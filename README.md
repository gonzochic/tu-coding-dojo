# TU-Wien Blockchain Hackaton

Hi and welcome to the Readme of the Blockchain Hackaton. Please make sure you have installed your environment before you proceed.

## Agenda
- Installation of required software
- Welcome
- Introduction to Blockchain (Andreas Freitag)
- [Hello World Example](contracts/Intro/README.md) 
- Coding Dojo
    - [TUCoin](contracts/TUCoin/README.md) 
    - [BlockchainZombies](contracts/Zombies/README.md)
- getTUgether

## Installation of Environment

Before you start, make sure that you have `NodeJS` installed on your machine. To do you go to `https://nodejs.org/en/download/` and install the current LTS version.

Open your command prompt (\*NIX: Terminal, Windows: NodeJS CommandPrompt) and install `truffle` and `ganache-cli`.

```bash
npm install -g truffle
npm install -g ganache-cli
npm install
```

+ VS-Code Solidity Plugin ;)

# Metamask
## Setup
Metamask is a very nifty tool to interact with different blockchains and wallets directly from your browser. Please install the Plugin (available for Chrome, Firefox and Opera) by visiting
```
metamask.io
```
After successful installation you should see a fox-like symbol next to your address bar. After clicking it, you will be asked if you want to update to the newest beta version - we suggest that you do so. After this, you will be asked to create a new account by setting a password. After this, you will be displayed a "mnemonic", which you should store safely on your machine. After you saved it you will be asked to input the mnemonic again using text blocks that need to be put in the correct order. 

## Using Metamask
Now that Metamask was successfully installed it's time to use it! Click on the Metamask symbol (the fox-symbol) and click the 3 dots on the right side of the screen and click "Expand View" - this opens Metamask in a new tab and we can see better what's going on. 

### Selecting the network
First you can select the network you want to interact with. You have some pre-configured networks available:
- Main Ethereum Network: This is the _real_ Ethereum network. Here you can make transaction with real ether. 
- Ropsten/Kovan/Rinkeby Test Network: These are _test_ networks (as their name suggests) where you can play around with smart contracts and transactions. To get started you can used so called "faucets" to get some free Ether on your wallet. 
- Localhost 8545: When you start a blockchain on your machine with "ganache-cli", the standard port is 8545 (if you don't specify any other). If you start a chain on this port, you can directly connect to it via this entry. 
- Custom RPC: If you start a blockchain with other parameters on your machine you can select this entry to specify the parameters. For our case we'll just enter the value "7777" to the "New Network" setting (hint: you should run the ganache command described above first).

### Adding wallets
After we selected the network, we can add a wallet. To do so, just click on the round avatar on the right side and you should be able to see "My Accounts". Here you can either create an account or import one. Since ganache is friendly enough to create 10 wallets for us, we can just copy the _private key_ from one of the wallets, then click on _import_ in Metamask and paste the private key. After clicking "import" you should be able to see the wallet with a balance of 100 ETH. 

### Adding tokens
When adding tokens by migrating a contract to the blockchain you'll get an output like this: 
```bash 
Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x98f2b90263ffdbf815588fa5b70b87051ecada270aa340c3ddf723d98ca3e35c
  Migrations: 0xc1e7f07e87304230610477798d94120a52ff08c0
Saving successful migration to network...
  ... 0xe5081ec2d82c27045016177a255bfa1951b21190c96734a8cce14675eedd893a
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying TUERC20...
  ... 0x645af49c964b4d8cde612ca77ac78b0e4ecbab31811b995117f0bfd03bd8a987
  TUERC20: 0x4f921011f97dd4642a75c31a4abb575fbab1808c
Saving successful migration to network...
  ... 0x27ad4e7ca0b7e7071944fa24a4702ad52956daf43d903aac88ce1a24765ab2d8
Saving artifacts...
```

In this case, the line ```TUERC20: 0x4f921011f97dd4642a75c31a4abb575fbab1808c``` describes the address where the coin is deployed. To add the coin to your wallet, copy this address to your clipboard. In Metamask, click the "Add Token" link on the left side of the screen, click the "Custom Token" and paste the Token Address. The "Token Symbol" and the "Decimals of Precision" should be loaded automatically. Click "Next" and "Add Tokens" to add the Token to your wallet. 

## Next Steps

[Start Here](./contracts/Intro/README.md)

[TUCoin Challenge](./contracts/TUCoin/README.md)

[Zombie Challenge](./contracts/Zombies/README.md)
