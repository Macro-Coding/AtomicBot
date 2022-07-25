const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes") 
const botConfig = require("../config.json") 
const { PermissionFlagsBits } = require('discord.js') 

module.exports = {
    Name: "party",
    Usage: `${botConfig.prefix}party`,
    Arguments: "",
    Type: "Fun",
    Permissions: [
        PermissionFlagsBits.Administrator
    ],
    Invoke(client, message, args, cmd) {
        if (!message.member.permissions.has(this.Permissions)) return message.channel.send("You do not have permission to use a!party Missing `ADMINISTRATOR`") message.channel.send(`@everyone <@${message.author.id}> is throwing a party! \n :tada: :tada: :tada:`)
    }
}
