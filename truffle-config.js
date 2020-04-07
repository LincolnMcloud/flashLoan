const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider")
require("dotenv").config()

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      // gas: 20000000,
      network_id: "*",
      skipDryRun: true
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.kovanKEY, process.env.INFURA_API_KEY_KOVAN),
      network_id: 42,       // Ropsten's id
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(process.env.ropstenKEY, process.env.INFURA_API_KEY_ROPSTEN);
      },
      network_id: '3',
    }
    // mainnet: {
    //   provider: new HDWalletProvider(process.env.KEY, "https://mainnet.infura.io/" + process.env.INFURA_API_KEY),
    //   network_id: 1,
    //   gas: 5000000,
    //   gasPrice: 5000000000 // 5 Gwei
    // }
  },
  compilers: {
    solc: {
      version: "0.5.16",
      settings: {
        evmVersion: "constantinople"
      }
    }
  }
}
