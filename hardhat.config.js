require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",

  networks:{
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/tXQpzC4QXBE0bWVbHd_TzFEzMnW6hbuP",
      accounts: ['fa94b8656534d22d8c55d257cc59d84282f6817be8f51727b3e666d3409890b1']
    }
  }
};


