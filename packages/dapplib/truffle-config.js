require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan royal night unknown great light army gaze'; 
let testAccounts = [
"0x6532f68bd789814a7435b830ee7c31fadc217c59f1749471628d3905e2867ad6",
"0x246795f4a7fbb068534a3be82ce1cfe71f8715d90148ebd5332d5057fcb32c48",
"0xe2ca8f96c4296a6fd48d9e9435206fc0befb8c24b8d3e6ccd30eff5a061f1d34",
"0xd3534fd36d5038d594d5cefdd5a58c17289991e77b9aabef7de63ff62f3ff31e",
"0xf715fc386282ac47ed69c284546f1fa4a39ed7b3b5a2a5655c660b61aad2c0f9",
"0x7e8f8a8cb4a017c84802c3e32c95648405ac439517af7a1cce29543fa003a3e1",
"0x85ac01583b708fb57f10e7cfda8fc5811a3d013234800fc9fad832919ec32888",
"0xcf8f53692e28f321d540e83f1d666158a092ba214a0dbd6a642a381dac978c36",
"0x569cd4c18c0bc87b5b13b96ab880587c27941cb04460357e846d8c30a840ed5b",
"0x9e27d04786b8f6f83b12db381345a00d92852aebe14bb8c3dc9c9a7673373afc"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
