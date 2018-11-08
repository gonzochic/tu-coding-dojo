# Prerequisites

In order to test your Smartcontract there is no need to deploy them to a public network. You can simply deploy them to you private `ganache` network.

```bash
ganache-cli -p 7777
```

Start the network into a seperate terminal window

# 1_HelloWorld.sol

Lets create our first hello world example by writing the following code

```solidity
pragma solidity ^0.4.24;

contract HelloWorld {
  function sayHi() public pure returns (string) {
    return "hello tu wien";
  }
}
```

The code above creates a pure (read-only, therefore gas-free) function in solidity.

First of all you need to deploy the smart-contract to the Ethereum network (ganache). We will use `truffle` to do so.

Lets check the `truffle.js` in the root folder of the project. There we have to set-up the Ethereum network we want to talk to. To start with `ganache` we added the following snippet

```javascript
    development: {
      host: "127.0.0.1",
      port: 7777,
      network_id: "*" // Match any network id
    },
```

Next, we need to tell truffle which contract we want to deploy. Therefore we added the following snippet to the deploy script at `/migrations/2_deploy_contracts.js`

```javascript
const HelloWorld = artifacts.require("./HelloWorld.sol");
module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
};
```

Everything is set-up now. Lets deploy it to the development network that we set up in the `truffle.js`

If you are working on a WINDOWS machine follow these steps to move on:

- search and copy "truffle.cmd" into the root directory (usually located in - C:\Users\yourUser\AppData\Roaming\npm\truffle.cmd)
- rename it to something like "truf.cmd"
- use truffle with "truf.cmd" instead of "truffle"

```bash
truffle migrate --network development --reset
```

After the deployment you should see the following output

```bash
Writing artifacts to ./build/contracts

Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xa96344dd91450d67b9359fd39b0047f3dc679338d6275019ba259369a80f246a
  Migrations: 0xec621d3bb1feb43c8ac0283fa85f179babcd45ab
Saving successful migration to network...
  ... 0xc3d7e8cb9b06b4626a5389d5fde78df8f04bf2fec66344a2fddd7cc62a82e6c1
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying HelloWorld...
  ... 0xbc398ab66ff2077b77fc1d55fb02d315fe3f062400c82c315d51278d956df27a
  HelloWorld: 0xf8827a73b74b0aa34c1d8e992c9db75fec060aa5
Saving successful migration to network...
  ... 0x7d8f2a4e3651c3152e16767274566b0b757be2cc3904ac10c89c3058a2fb76ee
Saving artifacts...
```

Where the important part is this line `HelloWorld: 0xf8827a73b74b0aa34c1d8e992c9db75fec060aa5`. It tells you that your contract was deployed to the address `0xf8827a73b74b0aa34c1d8e992c9db75fec060aa5` on the Ethereum network (ganache)

The next step is to execute our deployed function. We will use the `truffle` console to post queries to the Ethereum Network.

```bash
truffle console --network development
```

Instantiate your smart contract with its contract address (see above)

```bash
var c = HelloWorld.at("0xf8827a73b74b0aa34c1d8e992c9db75fec060aa5")
c.sayHi()
```

Congrats, you deployed and used your first smart contract.

## Deploy to Rinkeby

Since we are only deploying our smart contract to `ganache` it is private to your machine only. Lets deploy it to the decentralized Ethereum network. The problem here is, you have to pay to deploy smart contract (remember gas?), but thankfully there are testnetwork out there in the wild. We will use `Rinkeby Testnet` for this purpose. We are hosting a own node just for you and deployed your keys there. You can see the server in the `truffle.js` file.

```javascript
    rinkeby: {
      host: "51.15.95.203",
      port: 80,
      network_id: "*",
      gas: 4600000,
      from: ""
    }
```

You need to provide the address from which you plan to deploy your smart contract.

Now lets deploy:

```bash
truffle migrate --network rinkeby --reset
```

After deployment go to https://rinkeby.etherscan.io and search for your Smart Contract address.

# 2_ExampleERC20.sol

If you want to create a tradeable token you might want to create an ERC20 Token which represents a fungible asset.

To do so your smart contract needs to full fill the ERC20 interface which is defined by (see https://theethereum.wiki/w/index.php/ERC20_Token_Standard):

```solidity
contract ERC20Interface {
    string public constant name = "Token Name";
    string public constant symbol = "SYM";
    uint8 public constant decimals = 18;  // 18 is the most common number of decimal places

    function totalSupply() public constant returns (uint);
    function balanceOf(address tokenOwner) public constant returns (uint balance);
    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);
    function transfer(address to, uint tokens) public returns (bool success);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}
```

An minimal example of the TU Coin can be found in `/contract/Intro/2_ExampleERC20.sol``

## Deploy our ExampleERC20

Don't forget to add the ExampleERC20 to your deploy script at `/migrations/2_deploy_contracts.js`

```bash
truffle migrate --network development --reset
```

You should see that the contract is deployed under a certrain address

```bash
Compiling ./contracts/ExampleERC20.sol...
Compiling openzeppelin-solidity/contracts/math/SafeMath.sol...
Compiling openzeppelin-solidity/contracts/ownership/Ownable.sol...
Compiling openzeppelin-solidity/contracts/token/ERC20/ERC20.sol...
Compiling openzeppelin-solidity/contracts/token/ERC20/IERC20.sol...
Writing artifacts to ./build/contracts

Using network 'development'.

Running migration: 1_initial_migration.js
  Replacing Migrations...
  ... 0x026f737105843ea5040d83bbd4f19088ccb1d2a0fd640deb05421f7a96cdee35
  Migrations: 0x1e2b7cfd8640db32026c389e5d4f7a18d0d1afe4
Saving successful migration to network...
  ... 0x10a3f5c152895da4d790a1e618682fd3ca20729ba7cde9353b18baaa304d6f40
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying ExampleERC20...
  ... 0xfbf53917105f16e90d84d26796dfb53200a6b181b2b380895e7ce40ae49dac08
  ExampleERC20: 0xad7b6bc88ab0dfdee9ffc5ec9a03207bbc4eb036
Saving successful migration to network...
  ... 0x3c7e4d2f2886b6834d48e0001246626a5712a5707aee1cc4657e6b42641d5235
Saving artifacts...
```

## Do some transactions

Now lets do some transactions. Genache spawns a wallet with 10 addresses therefore we can transfer our ExampleERC20 between theses addresses.

```bash
truffle console --network development
```

Opens the truffle console

```bash
// take address from your coin
> tuc = ExampleERC20.at("0xad7b6bc88ab0dfdee9ffc5ec9a03207bbc4eb036")
> tuc.transfer(web3.eth.accounts[1], 2500)
```

Yey, you did it, you transfered 25 ExampleERC20s from `accounts[0]` to `accounts[1]`. Since `accounts[0]` is the owner, you don't need to pay tax. Lets transfer some more and pay tax.

```bash
> tuc.transfer(web3.eth.accounts[2], 1000, {from: web3.eth.accounts[1]})
```

We transfered 10 ExampleERC20s from `accounts[1]` to `accounts[2]`. When we check the balance we see that we payed 15% tax which directly went to the wallet of `accounts[0]`.

```bash
> tuc.balanceOf(web3.eth.accounts[0])
> tuc.balanceOf(web3.eth.accounts[1])
> tuc.balanceOf(web3.eth.accounts[2])
```
