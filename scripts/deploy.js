
const { ethers } = require("hardhat");
const royaltyRecipient = '0xaed73876e542309416022DDA3781c52C6CAD5c04';
let mferc = '0xB4ee30dE6BF7e8F9eFBFcC9715021144DEFDe96F';
let bbUrl = 'https://gateway.nutbox.app/ipns/k51qzi5uqu5dlep4q5te5cs4yxhco1ekfdgeuk4ppwidy3e5l5csgfoqdga96k/'; // product
let gbUrl = 'https://gateway.nutbox.app/ipns/k51qzi5uqu5dil44fz8dwqh84boop5moe5qojmifrx2036p7vloi2wmum7y68w/'; // product
let whitelist = [
  '0x75446751464b28C07d7617Cf98047434D6aEB99D',
  '0x1f0ea29902bacff8187e3b7995d0e03b67538963',
  '0x6709b449a6B03113A430664554664a85EC0259B2',
  '0x688E1B7dBbB9A3FaB6311dc75787855D9A41C3B4',
  '0xa24ab5d5ef3e3cdb55225e1a5af7ba00f877410e',
  '0x28653493f8cDf343777D76e409c4632869c72939',
  '0x85810C02e1A54784b922E5c9E9a26E381ee9cF6C',
  '0x7A9C74AFdD2644A2ca3E4A977fE226dCf105be89',
  '0xea4D485195fe38F8F1C175F896005B3Fb06E7e29',
  '0xA24fe39Ef0a1C1F7B7a67557EC549318500D20f8',
  '0xCA141D558E91885b1a244Ec6fbbCFfc5f06acD10',
  '0x0Fdb956B85630912f56d1cf7BE8aC2c923e407f7',
  '0x4Da9632ACA956BEc8e01D22E88d6AFaF2DEB9E41',
  '0x869B2908A8337b3E9Db25c09db4599573c4d7bE6',
  '0xaefbc310c7c1559ca6c20a563a0dd9059bc94a99',
  '0x79444E8e592993Facf111869E50214769A1F482B',
  '0xBe16Bc273ff67d6CCaa72555A0E265b083078137',
  '0x02F3782AAe79853c7cA3e9084147Bca1d0523333',
  '0x7b828B1A587CfE2a914d45C58aD3d523B181477B',
  '0x42c40726Dc35e343F24416a54502F009a5c374D4'
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
  await contract.addToWhitelist(whitelist);
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
