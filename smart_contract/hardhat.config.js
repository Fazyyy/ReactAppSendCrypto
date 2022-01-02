// https://eth-ropsten.alchemyapi.io/v2/sW8Bfiq4Qgsb8A5PkzbWAxx5nCq-6q5U

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/sW8Bfiq4Qgsb8A5PkzbWAxx5nCq-6q5U',
      accounts: ['e7b258775e077c5764acddd5ab5bf97291202e598777b42b536485a17e85a3e0']
    }
  }
}
