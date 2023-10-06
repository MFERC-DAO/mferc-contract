
const { ethers } = require("hardhat");
const royaltyRecipient = '0x3b5BBA2a73d1f8814e6d1D14Cbed01dBB830CfeC';
let mferc = '0xB4ee30dE6BF7e8F9eFBFcC9715021144DEFDe96F';
let bbUrl = 'https://gateway.nutbox.app/ipns/k51qzi5uqu5dlep4q5te5cs4yxhco1ekfdgeuk4ppwidy3e5l5csgfoqdga96k/'; // product
let gbUrl = 'https://gateway.nutbox.app/ipns/k51qzi5uqu5dil44fz8dwqh84boop5moe5qojmifrx2036p7vloi2wmum7y68w/'; // product
let whitelist = [
  '0xaeFBC310c7c1559CA6C20A563A0dd9059Bc94A99',
  '0x2e7cb46dc1d88686fb45126bfd13d26e7e1a2128',
  '0x6709b449a6B03113A430664554664a85EC0259B2',
  '0xBe16Bc273ff67d6CCaa72555A0E265b083078137'
]

// test contract
// mferc = '0xDB78c8B524Aa2D836Cb8C2868Be01A14b7E13863';
// let MCO = '0x7Bc2E3A31Cb25A4E0CbA7E12E651e617e43198e3';
// let MCM = '0xa4f1bfDF8da3C0A9007C3DD132f4E922d602339E';

async function deployTestMferc() {
  const factory = await ethers.getContractFactory("MFERC20");
  const contract = await factory.deploy("Test Meme Ferc 20", "T-MFERC");
  await contract.deployed();
  console.log('✓ MFERC contract deployed', contract.address);
  for (let t of whitelist) {
    await contract.transfer(t, '1000000000000000000000000000');
  }
  mferc = contract.address;
  return;
}

async function deployBlackBee() {
  const factory = await ethers.getContractFactory("BlackBee");
  const contract = await factory.deploy("Mferc Community OG", 'MCO', mferc, royaltyRecipient, bbUrl);
  await contract.deployed();
  console.log('✓ Black bee contract deployed', contract.address);
  // await contract.addToWhitelist(whitelist);
  return contract.address;
}

async function deployGoldenBee() {
  const factory = await ethers.getContractFactory("GoldenBee");
  const contract = await factory.deploy("Mferc Community Member", "MCM", mferc, royaltyRecipient, gbUrl);
  await contract.deployed();
  console.log('✓ Golden bee contract deployed', contract.address);
  await contract.batchAddTokenURIs((new Array(200).fill(1)).map((item, i) => (i+1).toString()));
  return contract.address;
}

async function main() {
  // await deployTestMferc();
  await deployBlackBee();
  await deployGoldenBee();
}

main().catch((error) => {
  console.error(error);
  process.exit();
});
