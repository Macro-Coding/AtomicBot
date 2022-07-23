const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")

module.exports = {
    Name: "test",
    Usage: `${botConfig.prefix}test`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        message.channel.send(`is maxx bran smal?`)
    }
}
