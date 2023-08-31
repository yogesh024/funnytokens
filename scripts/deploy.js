const hre = require("hardhat");

async function main() {


  const Funtoken = await hre.ethers.deployContract("Funtoken");

  await Funtoken.waitForDeployment();

  console.log(" funtoken with ! nether  dployed to :",Funtoken.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
