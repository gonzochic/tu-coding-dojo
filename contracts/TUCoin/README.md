# Ethereum token: TU Coin

## Tokens and ERC20

You are the principal of TU Wien and one day you had a great idea: You want to pay students that work for the university in a cryptocurrency that is only useful on the TU campus (e.g. in the caffeteria).

That's where tokens come in. Tokens are just contracts on the Ethereum chain that can be created, traded or spent. The _ERC20_ is an interface that describes and implements basic functionality for each token - something like a common language and ruleset for all tokens. Imagine you are building a PC: You don't need to worry about defining the ports that will be used by your motherboard, hard disk or graphics card - there are standards for this that all parts need to fulfill. You can still decide which components you want to use, but they will be able to fit together due to common standards. In the end you will have a different PC than your friend, but both will be PCs that can be used for similar things.

**You should not use any other libraries than `SafeMath`**

## TU Coin

With your knowledge of tokens you decide to create a new token called "TU Coin" and you implement it using the ERC20 interface. This interface comes with some useful functions:

### Implement the ERC20 Interface

Lets start and create a token by implementing the ERC20 Interface. After doing this setup Metamask and try to trade the token with your colleagues.

### Generate tokens

First you (and your staff) need to create some tokens. Creating tokens is also called _minting_. Obviously, minting is a serious role and only you, the principal of the TU and owner of the token is allowed to do so (because you don't want others do generate tokens for others ;) ). Keep in mind, when you generate tokens for somebody, you need also to increase the total supply.

### Cap the generation of tokens

After you have created some tokens and given it to students the accounting department calls you and tells you about something called "inflation" - if you continue to create infinitely many tokens, the value of each token is decreased. So you decide to set a maximum number of tokens that can be created. You agree with the Accounting departement that the maximum amount of Tokens is 666.666 and will be enforced with a smart contract. Now there is a maximum number of tokens and none of the minters can create more than this fixed value. Be aware the account team might want to check and change the cap of tokens in future.

### Add Tax

Since the generation of tokens is capped you need a mechanism to prevent student from exchanging Tokens from one to each other and having no need to come back to you for more work. Let's introduce tax! Every transaction will be taxed with 15%. This means you will take 15% of the transaction value and destroy it. Be aware, we are working with integer, and you might not be able to devide a small number so you might introduce a minimal tax per transaction.

### Revoke / Destroy tokens

A student calls your office to inform you about a student that does some work for the TU, but is actually from the WU! You confront the student in question and he indeed admits that he is from the WU. You tell him to give all his precious TU Coins back, but he refuses. Now you see no other choice than to leverage your power to remove the coins from the WU student's wallet. Remember: If you destroy tokens you should also decrease your total supply.

### Pause trading

One day you notice that the grades of the students start to get lower and lower. After some investigation you realize that the students use their tokens to buy beer during the "Prüfungswochen". In order to prevent this, you want to stop the transactions during the "Prüfungswochen". The idea is a success and grades start to rise again! Pro Challenge: Pause the token for a specified amount of time
