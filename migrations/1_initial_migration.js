const MyFirstNFT = artifacts.require("MyFirstNFT");

module.exports = (deployer) => {
    deployer.deploy(MyFirstNFT, "MyFirstNFT", "MNFT", 100000);
};
