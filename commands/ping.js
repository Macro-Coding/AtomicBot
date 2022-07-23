const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")

module.exports = {
    Name: "ping",
    Usage: `${botConfig.prefix}ping`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const ping = client.ws.ping
        message.channel.send(`Pong! Bot ping is ${ping}`)
    }
}