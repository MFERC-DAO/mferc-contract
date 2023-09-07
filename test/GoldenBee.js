const {
  time,
  loadFixture,
  mine
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

const TestUris = ['test1', 'test2', 'test3'];
const TestBaseUri = "https://test/";

describe("GoldenBee", function () {

  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, royaltyReceiver] = await ethers.getSigners();

    // deploy mferc
    const MFERC = await ethers.getContractFactory('MFERC20');
    const mferc = await MFERC.deploy("MFERC", 'MFERC');
    const GoldenBee = await ethers.getContractFactory("GoldenBee");
    const goldenBee = await GoldenBee.deploy("GoldenBee", "GB", mferc.address, royaltyReceiver.address, TestBaseUri);

    return { mferc, goldenBee, owner, otherAccount, royaltyReceiver };
  }

  describe("Deployment", function () {
    it("Should set the right mferc Token Address", async function () {
      const { mferc, goldenBee, owner } = await loadFixture(deployFixture);

      expect(await goldenBee.mfercTokenAddress()).to.equal(mferc.address);
    });

    it("Should set the right owner", async function () {
      const { goldenBee, owner } = await loadFixture(deployFixture);

      expect(await goldenBee.owner()).to.equal(owner.address);
    });

    it("Should set the right royalty", async function () {
      const { goldenBee, owner, royaltyReceiver } = await loadFixture(deployFixture);

      const res = await goldenBee.royaltyInfo(0, 1000000);
      expect((await goldenBee.royaltyInfo(0, 1000000))[0]).to.equal(royaltyReceiver.address);
      expect((await goldenBee.royaltyInfo(0, 1000000))[1]).to.equal(50000);
    });
  });

  describe("Mint", function () {
    describe("Validations", function () {
      it("Should fail if there is no NFT to mint", async function () {
        const { mferc, goldenBee, owner } = await loadFixture(deployFixture);
        await mferc.approve(goldenBee.address, "100000000000000000000000000");
        await expect(goldenBee.mintNFT()).to.be.revertedWith(
          "No NFT to mint"
        );
        await goldenBee.batchAddTokenURIs(['test1']);
        await goldenBee.mintNFT();
        await expect(goldenBee.mintNFT()).to.be.revertedWith(
          "No NFT to mint"
        );
      });

      it("Should revert if user not approve use mferc", async function () {
        const { mferc, goldenBee, owner } = await loadFixture(deployFixture);
        await goldenBee.batchAddTokenURIs(TestUris);
        await expect(goldenBee.mintNFT()).to.be.revertedWith(
          "ERC20: insufficient allowance"
        );
      });

      it("Should revert if user has insufficient mferc", async function () {
        const { mferc, goldenBee, owner, otherAccount } = await loadFixture(deployFixture);
        await goldenBee.batchAddTokenURIs(TestUris);
        await mferc.connect(otherAccount).approve(goldenBee.address, "100000000000000000000000000");
        await expect(goldenBee.connect(otherAccount).mintNFT()).to.be.revertedWith(
          "Insufficient balance"
        );
      });

      it("Everyone can mint a NFT", async function () {
        const { mferc, goldenBee, owner, otherAccount } = await loadFixture(deployFixture);
        await mferc.transfer(otherAccount.address, "10000000000000000000000000");
        await mferc.connect(otherAccount).approve(goldenBee.address, "100000000000000000000000000");
        await goldenBee.batchAddTokenURIs(TestUris);

        await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;
      });

      it("Everyone can mint more than one NFT", async function () {
        const { mferc, goldenBee, owner, otherAccount } = await loadFixture(deployFixture);
        await mferc.transfer(otherAccount.address, "10000000000000000000000000");
        await mferc.connect(otherAccount).approve(goldenBee.address, "100000000000000000000000000");
        await goldenBee.batchAddTokenURIs(TestUris);

        await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;
        await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;
        expect(await goldenBee.totalBurned()).to.be.equals("2000000000000000000000000");
      })

      it("The NFT uri should be shuffle", async function () {
        const { mferc, goldenBee, owner, otherAccount } = await loadFixture(deployFixture);
        await mferc.transfer(otherAccount.address, "10000000000000000000000000");
        await mferc.connect(otherAccount).approve(goldenBee.address, "100000000000000000000000000");
        await goldenBee.batchAddTokenURIs(TestUris);
        await mine(1);
        await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;
        await mine(242);
        await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;
        await mine(24);
        await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;

        const uris = await Promise.all([goldenBee.tokenURI(1), goldenBee.tokenURI(2), goldenBee.tokenURI(3)]);
        console.log(uris);
        // expect(uris[0]).to.be.equals(TestBaseUri + 'test2');
        // expect(uris[1]).to.be.equals(TestBaseUri + 'test3');
        // expect(uris[2]).to.be.equals(TestBaseUri + 'test1');
      });
    });

    describe("Events", function () {
      it("Should emit an event on mint NFT", async function () {
        const { mferc, goldenBee, owner, otherAccount } = await loadFixture(deployFixture);
        await mferc.transfer(otherAccount.address, "10000000000000000000000000");
        await mferc.connect(otherAccount).approve(goldenBee.address, "100000000000000000000000000");
        await goldenBee.batchAddTokenURIs(TestUris);
        await mine(1);
        await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;

        await expect(goldenBee.connect(otherAccount).mintNFT()).to.emit(goldenBee, "Transfer")
          .withArgs('0x0000000000000000000000000000000000000000', otherAccount.address, 2);

        await expect(goldenBee.connect(otherAccount).mintNFT()).to.emit(goldenBee, "Minted")
          .withArgs(otherAccount.address, 3, "test2");
      });

    });
  });

  describe("Ownable function", function () {
    it("Set base uri", async function () {
      const { mferc, goldenBee, owner, otherAccount } = await loadFixture(deployFixture);
      await expect(goldenBee.setBaseTokenURI("base url")).not.to.be.reverted;

      await expect(goldenBee.connect(otherAccount).setBaseTokenURI("base url")).to.be.revertedWith(
        "Ownable: caller is not the owner"
      );
    });

    it("batchAddTokenURIs", async function () {
      const { mferc, goldenBee, owner, otherAccount } = await loadFixture(deployFixture);
      await expect(goldenBee.batchAddTokenURIs(TestUris)).not.to.be.reverted;

      await expect(goldenBee.connect(otherAccount).batchAddTokenURIs(TestUris)).to.be.revertedWith(
        "Ownable: caller is not the owner"
      )
    });

    it("setDefaultRoyalty", async function () {
      const { mferc, goldenBee, owner, otherAccount, royaltyReceiver } = await loadFixture(deployFixture);
      await expect(goldenBee.setDefaultRoyalty(royaltyReceiver.address, 1000)).not.to.be.reverted;

      expect((await goldenBee.royaltyInfo(0, 1000000))[1]).to.equal(100000);

      await expect(goldenBee.connect(otherAccount).setDefaultRoyalty(royaltyReceiver.address, 1000)).to.be.revertedWith(
        "Ownable: caller is not the owner"
      )
    });
  });

  describe("Transfers", function () {
    it("Should transfer the NFT to other user", async function () {
      const { mferc, goldenBee, owner, otherAccount, royaltyReceiver } = await loadFixture(deployFixture);
      await mferc.transfer(otherAccount.address, "10000000000000000000000000");
      await mferc.connect(otherAccount).approve(goldenBee.address, "100000000000000000000000000");
      await goldenBee.batchAddTokenURIs(TestUris);
      await mine(1);
      await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;
      await expect(goldenBee.connect(otherAccount).transferFrom(otherAccount.address, owner.address, 1)).not.to.be.reverted;
    });

    it("Should revert if user not the owner of NFT when he transfer it", async function () {
      const { mferc, goldenBee, owner, otherAccount, royaltyReceiver } = await loadFixture(deployFixture);
      await mferc.transfer(otherAccount.address, "10000000000000000000000000");
      await mferc.connect(otherAccount).approve(goldenBee.address, "100000000000000000000000000");
      await goldenBee.batchAddTokenURIs(TestUris);
      await mine(1);
      await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;
      await expect(goldenBee.transferFrom(otherAccount.address, owner.address, 1)).to.be.revertedWith(
        "ERC721: caller is not token owner or approved"
      );
    });
  });

  describe("ERC165", function () {
    //0x80ac58cd
    it("Should support ERC721 interface", async function () {
      const { goldenBee } = await loadFixture(deployFixture);
      expect(await goldenBee.supportsInterface("0x80ac58cd")).to.be.true;
    });

    // 0x2a55205a
    it("Should support ERC2581 interface", async function () {
      const { goldenBee } = await loadFixture(deployFixture);
      expect(await goldenBee.supportsInterface("0x2a55205a")).to.be.true;
    });

    // 0x780e9d63
    it("Should support ERC721Enumerable interface", async function () {
      const { goldenBee } = await loadFixture(deployFixture);
      expect(await goldenBee.supportsInterface("0x780e9d63")).to.be.true;
    });
  });

  describe("ERC721Enumerable", function () {
    it("Should return right total supply", async function () {
      const { mferc, goldenBee, owner, otherAccount, royaltyReceiver } = await loadFixture(deployFixture);
      await mferc.transfer(otherAccount.address, "10000000000000000000000000");
      await mferc.connect(otherAccount).approve(goldenBee.address, "100000000000000000000000000");
      await goldenBee.batchAddTokenURIs(TestUris);
      await mine(1);
      await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;
      await expect(goldenBee.connect(otherAccount).transferFrom(otherAccount.address, owner.address, 1)).not.to.be.reverted;
      await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;
      expect(await goldenBee.totalSupply()).to.be.equals(2);
    });

    it("Should match the right token id of a user", async function () {
      const { mferc, goldenBee, owner, otherAccount, royaltyReceiver } = await loadFixture(deployFixture);
      await mferc.transfer(otherAccount.address, "10000000000000000000000000");
      await mferc.connect(otherAccount).approve(goldenBee.address, "100000000000000000000000000");
      await goldenBee.batchAddTokenURIs(TestUris);
      await mine(1);
      await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;
      await expect(goldenBee.connect(otherAccount).transferFrom(otherAccount.address, owner.address, 1)).not.to.be.reverted;
      await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;
      expect(await goldenBee.tokenOfOwnerByIndex(owner.address, 0)).to.be.equals(1);
      expect(await goldenBee.tokenOfOwnerByIndex(otherAccount.address, 0)).to.be.equals(2);
      await expect(goldenBee.tokenOfOwnerByIndex(owner.address, 1)).to.be.revertedWith(
        "ERC721Enumerable: owner index out of bounds"
      );
    });

    it("Should revert if call the index out of user's balance", async function () {
      const { mferc, goldenBee, owner, otherAccount, royaltyReceiver } = await loadFixture(deployFixture);
      await mferc.transfer(otherAccount.address, "10000000000000000000000000");
      await mferc.connect(otherAccount).approve(goldenBee.address, "100000000000000000000000000");
      await goldenBee.batchAddTokenURIs(TestUris);
      await mine(1);
      await expect(goldenBee.connect(otherAccount).mintNFT()).not.to.be.reverted;
      await expect(goldenBee.tokenOfOwnerByIndex(otherAccount.address, 1)).to.be.revertedWith(
        "ERC721Enumerable: owner index out of bounds"
      );
    });
  });
});
