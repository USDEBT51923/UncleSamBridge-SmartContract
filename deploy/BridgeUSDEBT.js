const LZ_ENDPOINTS = require("../constants/layerzeroEndpoints.json")

module.exports = async function ({ deployments, getNamedAccounts }) {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(`>>> your address: ${deployer}`)

    const lzEndpointAddress = LZ_ENDPOINTS[hre.network.name]
    console.log(`[${hre.network.name}] Endpoint Address: ${lzEndpointAddress}`)

    await deploy("BridgeUSDEBT", {
        from: deployer,
        args: [lzEndpointAddress, "0xc7d16c43c2791b3aef2778bf21f11fe10eff271c"],
        log: true,
        waitConfirmations: 1,
    })
}

module.exports.tags = ["BridgeUSDEBT"]
