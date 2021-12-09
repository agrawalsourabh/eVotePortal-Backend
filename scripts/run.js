
const hre = require("hardhat");

async function main() {

  const [owner, randomPerson] = await hre.ethers.getSigners();

  // We get the contract to deploy
  const eVote = await hre.ethers.getContractFactory("eVote");
  const eVoteContract = await eVote.deploy();

  await eVoteContract.deployed();

  console.log("eVote contract deployed to:", eVoteContract.address);
  console.log("Owner address: " + owner.address);

  //check add participant method
  await eVoteContract.addParticipant("dominos");
  await eVoteContract.addParticipant("MOD");

  // cast vote
  voteTxn = await eVoteContract.castVote("dominos");
  await voteTxn;
  console.log("Vote casted Txn: " + voteTxn.hash);

  voteTxn = await eVoteContract.connect(randomPerson).castVote("MOD");
  await voteTxn;
  console.log("Vote casted Txn: " + voteTxn.hash);

  // get vote count
  let voteCountA = await eVoteContract.getVoteCount("dominos");
  let voteCountB = await eVoteContract.getVoteCount("MOD");

  // Test cast vote - with already voted address 
  voteTxn = await eVoteContract.castVote("dominos");
  await voteTxn;
  console.log("Vote casted Txn: " + voteTxn.hash);

  console.log("Dominos vote: " + voteCountA);
  console.log("MOD vote: " + voteCountB);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
