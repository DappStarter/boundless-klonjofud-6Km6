require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give knife fortune silver shock rifle smile pulp hockey kiwi once tent'; 
let testAccounts = [
"0x0e0e89358f763578331c0717c75f477a1e5487ae3494fe9bdc10c374fdf2f4bf",
"0xb8db1af8d0b37d407d25490f0bf17260aa6f926097d0483dbfcc510bbd796b9e",
"0x4b49037a6e5efff2938ca7a22b36006ec245c899f4ae07a2163075763deda735",
"0x7d193640294fc6b57a27d3889a8c55cc8665ea19a3eb08fba92cf5049fee244d",
"0x24bd1eaa105908289b77d3e9c3028e80fa5ef4155029420f96daf164350ef01d",
"0x5099ad9809102e11dd21eeb448043d7ca04eca4b94c3c887323410f347e353df",
"0x7805a2c90b59dc50f7105bd35dde703e9fc73f19f06b565c63fc0d149fc86000",
"0xa2138b249e17b8372b0241fae241a8d391f9330795062ec32704e1ff95278559",
"0xf98da1b2de3d6cf9076af4c5677680eb5b03bf36903d2a1d723aa6b27b9ae72e",
"0x2609056fcf52476a6fd3c574794f665100cc39c5918cfaf9bbe8c7f20dad0d3c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


