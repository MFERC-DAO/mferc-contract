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
        const [owner, otherAccount, royaltyReceiver, alice, bob] = await ethers.getSigners();

        // deploy mferc
        const MFERC = await ethers.getContractFactory('MFERC20');
        const mferc = await MFERC.deploy("MFERC", 'MFERC');
        const BlackBee = await ethers.getContractFactory("BlackBee");
        const blackBee = await BlackBee.deploy("GoldenBee", "BB", mferc.address, royaltyReceiver.address, TestBaseUri);

        return { mferc, blackBee, owner, otherAccount, royaltyReceiver, alice, bob };
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

            it("Should revert if the white list has expired", async function() {
                const { mferc, blackBee, owner } = await loadFixture(deployFixture);
                await mferc.approve(blackBee.address, "10000000000000000000000000000");
                await blackBee.addToWhitelist([owner.address]);
                await time.increase(3600 * 24 * 3);
                await expect(blackBee.mintNFT(1)).to.be.revertedWith(
                    "The white list has expired"
                );
                await blackBee.addToWhitelist([owner.address]);
                await time.increase(3600 * 24 * 2);
                await expect(blackBee.mintNFT(1)).not.to.be.reverted;
            })
        });

        describe("Mint", function () {
            it("Should mint when admin change the expiration time", async function() {
                const { mferc, blackBee, owner } = await loadFixture(deployFixture);
                await mferc.approve(blackBee.address, "10000000000000000000000000000");
                await blackBee.addToWhitelist([owner.address]);
                await time.increase(3600 * 24 * 3);
                await expect(blackBee.mintNFT(1)).to.be.revertedWith(
                    "The white list has expired"
                );
                
                await blackBee.updateExpirationDay(4);
                await expect(blackBee.mintNFT(1)).not.to.be.reverted;
            });

            it("Should mint when admin update the whitelist", async function () {
                const { mferc, blackBee, owner } = await loadFixture(deployFixture);
                await mferc.approve(blackBee.address, "10000000000000000000000000000");
                await blackBee.addToWhitelist([owner.address]);
                await time.increase(3600 * 24 * 3);
                await expect(blackBee.mintNFT(1)).to.be.revertedWith(
                    "The white list has expired"
                );
                
                await blackBee.addToWhitelist([owner.address]);
                await expect(blackBee.mintNFT(1)).not.to.be.reverted;
            });

            it("Should return right index of token", async function () {
                const { mferc, blackBee, owner } = await loadFixture(deployFixture);
                await mferc.approve(blackBee.address, "10000000000000000000000000000");
                await blackBee.addToWhitelist([owner.address]);
                await blackBee.mintNFT(10);
                expect(await blackBee.tokenByIndex(0)).to.be.equals(10);
            })
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

    describe("Ownerable function", function () {
        it("Set base uri", async function () {
            const { mferc, blackBee, owner, otherAccount } = await loadFixture(deployFixture);
            await expect(blackBee.setBaseTokenURI("base url")).not.to.be.reverted;
      
            await expect(blackBee.connect(otherAccount).setBaseTokenURI("base url")).to.be.revertedWith(
              "Ownable: caller is not the owner"
            );
          });

        it("Admin can burn mferc from this contract, and the variable always shows correct", async function() {
            const { mferc, blackBee, owner, otherAccount, alice, bob } = await loadFixture(deployFixture);
            await mferc.transfer(otherAccount.address, "20000000000000000000000000");
            await mferc.transfer(alice.address, "20000000000000000000000000");
            await mferc.transfer(bob.address, "20000000000000000000000000");
            await blackBee.addToWhitelist([alice.address, otherAccount.address, bob.address]);
            await mferc.connect(otherAccount).approve(blackBee.address, "100000000000000000000000000000");
            await mferc.connect(alice).approve(blackBee.address, "100000000000000000000000000000");
            await mferc.connect(bob).approve(blackBee.address, "100000000000000000000000000000");
            await expect(blackBee.connect(alice).mintNFT(3)).changeTokenBalance(mferc, alice, "-20000000000000000000000000");
            expect(await blackBee.totalBurned()).to.be.equals(0);
            expect(await blackBee.pendingBurnAmount()).to.be.equals("20000000000000000000000000");
            await expect(blackBee.connect(bob).mintNFT(5)).changeTokenBalance(mferc, bob, "-20000000000000000000000000");
            expect(await blackBee.totalBurned()).to.be.equals(0);
            expect(await blackBee.pendingBurnAmount()).to.be.equals("40000000000000000000000000");
            await blackBee.adminBurnToken();
            expect(await blackBee.totalBurned()).to.be.equals("40000000000000000000000000");
            expect(await blackBee.pendingBurnAmount()).to.be.equals("0");
            await expect(blackBee.connect(otherAccount).mintNFT(7)).changeTokenBalance(mferc, otherAccount, "-20000000000000000000000000");
            expect(await blackBee.totalBurned()).to.be.equals("40000000000000000000000000");
            expect(await blackBee.pendingBurnAmount()).to.be.equals("20000000000000000000000000");
            await blackBee.adminBurnToken();
            expect(await blackBee.totalBurned()).to.be.equals("60000000000000000000000000");
            expect(await blackBee.pendingBurnAmount()).to.be.equals("0");
        })
    })

    it("Token uri", async function () {
        const { blackBee } = await loadFixture(deployFixture);
        for (let i of [4,5,7,23,44,56]) {
            expect(await blackBee.tokenURI(i)).to.be.equals(TestBaseUri + i);
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