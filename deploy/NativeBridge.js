const NATIVE_OFT_ARGS = require("../constants/nativeOftArgs.json")

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    const nativeOft = await ethers.getContract(NATIVE_OFT_ARGS[hre.network.name].contractName)
    console.log(`[${hre.network.name}] Native OFT Address: ${nativeOft.address}`)

    await deploy("NativeBridge", {
        from: deployer,
        args: [nativeOft.address],
        log: true,
        waitConfirmations: 1,
    })
}

module.exports.tags = ["NativeBridge"]