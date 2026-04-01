const hre = require("hardhat");

async function main() {
  const AllyToken = await hre.ethers.getContractFactory("Neora");

  const initialSupply = 1000000; // 1M tokens
  const token = await AllyToken.deploy(initialSupply);

  await token.waitForDeployment();

  console.log("Neora deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
