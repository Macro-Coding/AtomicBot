const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes") 
const botConfig = require("../config.json")

module.exports = {
    Name: "test",
    Usage: `${botConfig.prefix}test`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        //rust if your looking at this i couldnt find how to get how many users a bot has
        message.channel.send(`Currently in ${client.guilds.cache.size} servers watching ${Math.floor(Math.random()*999)} users!`)
    }
}
