module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7777,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "51.15.95.203",
      port: 80,
      network_id: "*",
      gas: 4600000,
      from: ""
    }
  }
};
