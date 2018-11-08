# Blockchain Zombies

## Introduction

Welcome to the BlockchainZombies.
"The what?" you might ask yourself. While other people run through the world fighting pocket monsters via AR, we want to leverage the power of the Blockchain and smart contracts to let Zombies fight each other.

_Where to start?_ The zombies will be just a token on the Ethereum chain. Since we are dealing with zombies it makes sense to define the token in a way that they can be traded in whole numbers only (who would want to transfer half a zombie?). Lets have a look at `/contracts/Zombies/ZombieToken.sol`.

We will start with simple functions like creating new zombies and add more and more features with each task. Let's have a look at the mission below.

## Mission

### First, we need to create some zombies.

Therefore we need some kind of logic which can take care of creating zombies. Each zombie has a name and is associated to one owner (at least at the beginning - we'll get into that later). The contract needs to keep track of the created zombies in some way, so we can reference them later.

**Hint:** Check out the openzeppelin-solidity [ERC721 token](https://openzeppelin.org/api/docs/learn-about-tokens.html#erc721).

### Then, we want to view our zombies.

Each zombie is associated to one account (wallet). We need some way to tell which account the zombie belongs to and vice versa, i.e. we need to be able to lookup the owner when we have the zombie's ID and if we have the owner's address we need to be able to list all the zombies of this account. IF you are using the ERC721 interface, you should be able to view and trade your zombies

Maybe you want to share the zombies with your friends. Since our zombies are tokens, they can be transferred from one account to another.

### Time to fight!

After we created our zombies and it's time to let them fight each other. A fight is always started by one zombie (the attacker) that wants to fight another zombie (the victim). If the attacker wins, the owner of the attacking zombie gets a new zombie as a reward - the victim and the owner get nothing.
Rules for the fight:

- There is 50/50 chance to win a fight.
- We need to add the following data to our zombie data: number of wins and number of losses. After each fight, the number of wins is increased by one for the winner and the number of losses is increased by one for the loser of the battle.


### Bonus

### Level 1 zombies are for noobs.

So we want to level them up! But we did not introduce the level of the zombies yet. Therefore, the level of the zombie needs to be added to the data structure we defined in the first step and a default value needs to be set. Level 1 sounds like a good start, right?
Then we need to agree on the price for levelling up our zombies. Once we set the price for each level we can level up our zombies as much as we can.
Additionally adapt the propability of winning a fight depdending on the level of the zombies. The level of the winner zombie is increased by one.

### Build a zombie family

Each Zombie should have a DNA that is inherited when a new zombie is created after a successful attack.
**Hint:** To generate random DNAs check out the [keccak](https://solidity.readthedocs.io/en/v0.4.24/units-and-global-variables.html) function provided by solidity.
