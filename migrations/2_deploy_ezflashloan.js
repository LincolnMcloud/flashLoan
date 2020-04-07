let Flashloan = artifacts.require("Flashloan")
//let TradeExample = artifacts.require("UniswapTradeExample")

function token(amount){
    var value = amount * Math.pow(10, 18)
    return value.toString()
}


module.exports = async function (deployer) {
    try {
        await deployer.deploy(Flashloan)
        //let f = await Flashloan.deployed()
        //await f.putFunds({value: value})
        //await f.buyDai({value: value})
        //await deployer.deploy(TradeExample)
    } catch (e) {
        console.log(`Error in migration: ${e.message}`)
    }
}