async function main() {
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const addr="Paste your account address"
const PRIVATE_KEY="Paste Your Private Key" 
let provider = new HDWalletProvider(["Paste Your Private Key"], `Paste Your Web3 Provider API`);
const web3 = new Web3(provider);
let getPendingTxcount;

// // Get Tx Count and pending Tx data
// let getTxcount = await web3.eth.getTransactionCount(addr)
// console.log((getTxcount));
// web3.eth.getPendingTransactions().then((result)=>{
//     console.log("Pending Transactions : ",result)
//     console.log("Pending Transactions count:",result.length)
//     getPendingTxcount=result.length;
// });

// Create a new transaction
// const transaction = {
//     'to': 'Paste your account address', 
//     'value': 0,  
//     'gas': 21000, 
//     'gasPrice': 50e9,
//     'nonce': (getTxcount - getPendingTxcount), // getTransaction count and put minus 1 to cancel the pending Tranaction
// };
// const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
// web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
//     if (!error) {
//       console.log("🎉 The hash of your transaction is: ", hash);
//     } else {
//       console.log("❗Something went wrong while submitting your transaction:", error)
//     }
// })
}
main()