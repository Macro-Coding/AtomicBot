const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes") 
const botConfig = require("../config.json")

module.exports = {
    Name: "fries",
    Usage: `${botConfig.prefix}fries`,
    Arguments: "<user>",
    Type: "Fun",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        message.channel.send("no")
    }
}