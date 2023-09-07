
const { ethers } = require("hardhat");
const royaltyRecipient = '0xA4b5936fCdab2553103960027bCF01Aac5ebc74F';
let mferc = '0xB4ee30dE6BF7e8F9eFBFcC9715021144DEFDe96F';
let bbUrl = 'https://gateway.nutbox.app/ipns/k51qzi5uqu5dl68xvjba9czwwj7nxvtz2323r7xzzp0uc6u49ggl4qpjh8vtq4/';
let gbUrl = '';


async function deployTestMferc() {
  const factory = await ethers.getContractFactory("MFERC20");
  const contract = await factory.deploy("Meme Ferc 20", "MFERC");
  await contract.deployed();
  console.log('✓ MFERC contract deployed', contract.address);
  mferc = contract.address;
  return;
}

async function deployBlackBee() {
  const factory = await ethers.getContractFactory("BlackBee");
  const contract = await factory.deploy("$M Black Bee", 'BB', mferc, royaltyRecipient, bbUrl);
  await contract.deployed();
  console.log('✓ Black bee contract deployed', contract.address);
  return contract.address;
}

async function deployGoldenBee() {
  const factory = await ethers.getContractFactory("GoldenBee");
  const contract = await factory.deploy("$M Golden Bee", "GB", mferc, royaltyRecipient, gbUrl);
  await contract.deployed();
  console.log('✓ Golden bee contract deployed', contract.address);
  return contract.address;
}

async function main() {
  await deployTestMferc();
  await deployBlackBee();
  await deployGoldenBee();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
