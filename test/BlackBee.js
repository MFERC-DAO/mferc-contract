const {
    time,
    loadFixture,
    mine
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

const TestBaseUri = "https://test/";

describe("BlackBee", function () {
    async function deployFixture() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount, royaltyReceiver] = await ethers.getSigners();

        // deploy mferc
        const MFERC = await ethers.getContractFactory('MFERC20');
        const mferc = await MFERC.deploy("MFERC", 'MFERC');
        const BlackBee = await ethers.getContractFactory("BlackBee");
        const blackBee = await BlackBee.deploy("GoldenBee", "BB", mferc.address, royaltyReceiver.address, TestBaseUri);

        return { mferc, blackBee, owner, otherAccount, royaltyReceiver };
    }

    describe("Deployment", function () {
        it("Should set the right mferc Token Address", async function () {
            const { mferc, blackBee, owner } = await loadFixture(deployFixture);

            expect(await blackBee.mfercTokenAddress()).to.equal(mferc.address);
        });

        it("Should set the right owner", async function () {
            const { blackBee, owner } = await loadFixture(deployFixture);

            expect(await blackBee.owner()).to.equal(owner.address);
        });

        it("Should set the right royalty", async function () {
            const { blackBee, owner, royaltyReceiver } = await loadFixture(deployFixture);

            const res = await blackBee.royaltyInfo(0, 1000000);
            expect((await blackBee.royaltyInfo(0, 1000000))[0]).to.equal(royaltyReceiver.address);
            expect((await blackBee.royaltyInfo(0, 1000000))[1]).to.equal(50000);
        });
    });

    describe("Mint", function () {
        describe("Validations", function () {
            it("Should revert if the minter not in whitlist", async function () {
                const { mferc, blackBee, owner } = await loadFixture(deployFixture);
                await mferc.approve(blackBee.address, "10000000000000000000000000000");
                await expect(blackBee.mintNFT(1)).to.be.revertedWith(
                    "Address not in whitelisted"
                );
            });

            it("Should ververt if the minter minted more than one token", async function () {
                const { mferc, blackBee, owner } = await loadFixture(deployFixture);
                await mferc.approve(blackBee.address, "10000000000000000000000000000");
                await blackBee.addToWhitelist([owner.address]);
                await blackBee.mintNFT(1);
                await expect(blackBee.mintNFT(2)).to.be.revertedWith(
                    "Already minted a NFT"
                );
            })

            it("Should fail if the token id is invalid", async function () {
                const { mferc, blackBee, owner } = await loadFixture(deployFixture);
                await mferc.approve(blackBee.address, "1000000000000000000000000000");
                await blackBee.addToWhitelist([owner.address]);
                await expect(blackBee.mintNFT(0)).to.be.revertedWith(
                    "Invalid token id"
                );
                await expect(blackBee.mintNFT(67)).to.be.revertedWith(
                    "Invalid token id"
                );
            });

            it("Should revert if user mint the minted token", async function () {
                const { mferc, blackBee, owner, otherAccount } = await loadFixture(deployFixture);
                await blackBee.addToWhitelist([owner.address, otherAccount.address]);
                await mferc.approve(blackBee.address, "1000000000000000000000000000");
                await blackBee.mintNFT(2);
                await expect(blackBee.connect(otherAccount).mintNFT(2)).to.be.revertedWith(
                    "Token has been minted"
                );
            });

            it("Should revert if user has insuffient balance to mint", async function () {
                const { mferc, blackBee, owner, otherAccount } = await loadFixture(deployFixture);
                await blackBee.addToWhitelist([owner.address, otherAccount.address]);
                await mferc.transfer(otherAccount.address, "100000000000000000");
                await mferc.connect(otherAccount).approve(blackBee.address, "1000000000000000000000000000");
                await expect(blackBee.connect(otherAccount).mintNFT(2)).to.be.revertedWith(
                    "Insufficient balance"
                );
            });

            it("Should fail if get token uri with a invalid token id", async function () {
                const { blackBee } = await loadFixture(deployFixture);
                await expect(blackBee.tokenURI(0)).to.be.revertedWith(
                    "Invalid token id"
                );

                await expect(blackBee.tokenURI(77)).to.be.revertedWith(
                    "Invalid token id"
                );
            });
        });

        describe("Events", function () {
            it("Should emit an event on mint NFT", async function () {
                const { mferc, blackBee, owner, otherAccount } = await loadFixture(deployFixture);
                await mferc.transfer(otherAccount.address, "50000000000000000000000000");
                await blackBee.addToWhitelist([owner.address, otherAccount.address]);
                await mferc.connect(otherAccount).approve(blackBee.address, "100000000000000000000000000000");
                await expect(blackBee.connect(otherAccount).mintNFT(3)).to.emit(blackBee, "Transfer")
                  .withArgs('0x0000000000000000000000000000000000000000', otherAccount.address, 3);
            });
        });
    });

    it("Token uri", async function () {
        const { blackBee } = await loadFixture(deployFixture);
        for (let i of [4,5,7,23,44,56]) {
            expect(await blackBee.tokenURI(i)).to.be.equals(TestBaseUri + i + ".json");
        }
    });

    describe("ERC165", function () {
        //0x80ac58cd
        it("Should support ERC721 interface", async function () {
          const { blackBee } = await loadFixture(deployFixture);
          expect(await blackBee.supportsInterface("0x80ac58cd")).to.be.true;
        });
    
        // 0x2a55205a
        it("Should support ERC2581 interface", async function () {
          const { blackBee } = await loadFixture(deployFixture);
          expect(await blackBee.supportsInterface("0x2a55205a")).to.be.true;
        });
    
        // 0x780e9d63
        it("Should support ERC721Enumerable interface", async function () {
          const { blackBee } = await loadFixture(deployFixture);
          expect(await blackBee.supportsInterface("0x780e9d63")).to.be.true;
        });
      });
});