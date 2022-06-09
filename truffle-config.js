module.exports = {
  environments: {
    infura: {
      ipfs: {
        address: "https://ipfs.infura.io:5001"
      }
    }
  },

  plugins: [
    "@truffle/preserve-fs",
    "@truffle/preserve-to-ipfs",
    "@truffle/preserve-to-filecoin"
  ]
}
