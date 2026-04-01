const hre = require("hardhat");

async function main() {
  const AllyToken = await hre.ethers.getContractFactory("AllyToken");

  const initialSupply = 1000000; // 1M tokens
  const token = await AllyToken.deploy(initialSupply);

  await token.waitForDeployment();

  console.log("ALLY deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
