
const hre = require("hardhat");

async function main() {
  const [owner, randomPerson] = await hre.ethers.getSigners();

  // We get the contract to deploy
  const eVote = await hre.ethers.getContractFactory("eVote");
  const eVoteContract = await eVote.deploy();

  await eVoteContract.deployed();

  console.log("eVote contract deployed to:", eVoteContract.address);
  console.log("Owner address: " + owner.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
