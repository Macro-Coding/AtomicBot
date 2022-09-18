const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const DiscordJS = require("discord.js")

module.exports = {
    Name: "say",
    Usage: `${botConfig.prefix}say`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        var messageS = ""
        for(var i = 1; i < args.length; i++){
            messageS+=args[i]+" "
        }
        message.delete().then(() => {
            const embed = new DiscordJS.EmbedBuilder()
            .setTitle("New Message")
            .setColor("Aqua")
            .setDescription(messageS)
            .setFooter({text: "Thank You For Chosing Discord to Build Your Community!"})
            .setTimestamp()
        message.channel.send({ embeds : [embed] })
        }).catch(e => {
            message.channel.send("I need to be able to delete messages if you want to use that command!")
            console.log(e)
        })
    }
}