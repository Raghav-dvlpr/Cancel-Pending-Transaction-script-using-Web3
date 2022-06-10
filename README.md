# Cancel 🔛 Pending Transaction Script📝

- This is a Simple script to Cancel the Pending Transaction in EVM Blockchain Network Using Web3.

## Getting started 📖

📁 Create a new folder in VScode 
Open Your termial in Vscode. or press  `Ctrl+Shift+` `

🏃 Run: -- Initalize Node  
```
npm init 
```
or use ( Here `-y` means we are saying `yes` to all steps in node creation )

```
npm init -y
```

## Node Dependencies 🎒

``` 
npm install @truffle/hdwallet-provider
```

``` 
npm install web3
```
## Steps to do 🛠️

- Create a Web3 API Provider URL.

- Ethereum  use `Infura` or `Moarils`.

- Polygon use `MagicVigil` or `Moarils` or `Infura (For Infura you can add Polygon Plugin into your account)`.

- Copy your account address which you wHat to cancel the transaction.

- Copy your private key of your account.

Create a `getcount.js` file and copy paste the following code.
```
async function main() {

const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
onst addr="Paste your account address"
const PRIVATE_KEY="Paste Your Private Key" 
let provider = new HDWalletProvider(["Paste Your Private Key"], `Paste Your Web3 Provider API`);
const web3 = new Web3(provider);
let getPendingTxcount;

// Get Tx Count and pending Tx data
let getTxcount = await web3.eth.getTransactionCount(addr)
console.log((getTxcount));
web3.eth.getPendingTransactions().then((result)=>{
    console.log("Pending Transactions : ",result)
    console.log("Pending Transactions count:",result.length)
    getPendingTxcount=result.length;
});

}
main()

```
Above code will give you the transaction count...

Then substitue with this in nonce in your Transaction

``` 'nonce':Transactioncount - no.of.Pending Transaction Count ```

### Example :

*149th Transaction is gone Pending in Blockchain.
Then if you want to cancel the 149th Transaction then We want to create a **null Transaction** in order to cancel that **pending Transaction**.*

*For that First you should run `node getcount.js` file, This will give you the **transaction count** of paritcular account and 
check **how many transactions gone pending in the blockchain***

*For Example: Consider 1 Transaction gone pending then put 149-1 is 148 so put 148 in nonce.*

*Create Transaction null transaction using this script and Put`'nonce':148` in  Transaction data,So this will cancel 149th Transaction which is got pending*

Create a `index.js` file and copy paste the following code to create a null transaction.


```
async function main() {

const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const addr="Paste your account address"
const PRIVATE_KEY="Paste Your Private Key" 
let provider = new HDWalletProvider(["Paste Your Private Key"], `Paste Your Web3 Provider API`);
const web3 = new Web3(provider);

const transaction = {
    'to': 'Paste your account address', 
    'value': 0,  
    'gas': 21000, 
    'gasPrice': 50e9,
    'nonce': (getTxcount - getPendingTxcount), // getTransaction count and put minus 1 to cancel the pending Tranaction
};

const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash);
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
})
}
main()

```

## To Run ⛏️

```
 node index.js
```
## Result 💯
After you created null transaction pending transaction will be rejected by blockchain and null transaction will be added to the block and also you can check it block explore the pending transaction is rejceted or not, if you have pending Transaction Hash
