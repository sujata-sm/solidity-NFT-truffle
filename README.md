# solidity-NFT-truffle
 
https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/03-truffle-setup/?coupon=udemy_77288

## Install Prerequisites¶
    node -v
    npm -v
    git --version

    Note - https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/02-prerequisites-truffle-hardhat-foundry/

## Getting started with Truffle¶
    npm install -g truffle

## How i created project structure - First Truffle Project Initialization¶

    https://ethereum-blockchain-developer.com/2022-06-nft-truffle-hardhat-foundry/03-truffle-setup/


https://dev.to/willkre/create-deploy-an-erc-20-token-in-15-minutes-truffle-openzeppelin-goerli-33lb

https://www.infura.io/blog/post/getting-started-with-infura-28e41844cc89

API Key - https://app.infura.io/

## Set up MetaMask
    First, in order to conduct transactions on a blockchain (for example, deploying a contract or minting an NFT), you’ll need a crypto wallet. MetaMask is available for free as a browser extension.

    ### Switch to the Sepolia test network
    Once your wallet is set up, navigate to the top-right of the wallet window and click on Show/Hide Test Networks. After showing test networks, you’ll see the drop-down option for Sepolia. Switch your network from Ethereum mainnet to Sepolia test network.

    ### get a free Eth -> you can check title "Deploying the contract to the sepolia testnet"

## Deploying the contract locally
To deploy the smart contract, we're going to need to connect to a blockchain. Truffle has a built-in personal blockchain that can be used for testing. This blockchain is local to your system and does not interact with the main Ethereum network.
1) Open a terminal window and cd into your Truffle project directory.

2) Run "truffle develop" which will start a local Ethereum network.

3) Run "compile" which will compile the Solidity contract files, which should give you something like this:

4) Finally, run "migrate --reset" to deploy your contract to the locally running network.

### Interacting with the token
Time to do some basic checks to see if everything's worked as expected:

1) Run token = await MyToken.deployed(); to access the TruffleContract. This should also output the full contract instance with all available methods, properties, etc.

2) From here, we can test out a few methods:


## Deploying the contract to the sepolia testnet

    Before you can deploy the contract to sepolia, we'll need some testnet Ethers! First of all, switch over to the sepolia network on your MetaMask (if it isn't an option for you, you may need to turn on the "Show test networks" option in the advanced settings):
    Go on this links 
    #### To get free Eth
    https://developers.moralis.com/faucets/

    - CLick Sepolia Faucet
    Image

    - 
    Image

#### Time to Migrate
    migrate --reset --network sepolia

## Viewing the contract on Etherscan
https://sepolia.etherscan.io/?ref=infura.ghost.io
In my case contract address is -
contract address:    0xf845AA770a01dC620778d41D45f6880093B2479B