const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")

module.exports = {
    Name: "potato",
    Usage: `${botConfig.prefix}potato <user>`,
    Arguments: "<user>",
    Type: "Fun",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        try {
            const DiscordJS = require('discord.js') 
            const embed = new DiscordJS.EmbedBuilder()
            if (message.mentions.members.first()) {
                var member = message.mentions.members.first()
                embed.setTitle(`${member.user.username} is having a potato moment`)
                embed.setImage('https://media.discordapp.net/attachments/1000503580282867793/1001644965572661359/unknown.gif') 
                return message.channel.send({
                    embeds: [embed]
                })
            }
            return message.reply("Mention a user please!")
        } catch (e) {
            message.reply("dang it! an error occurred!")
            console.log(e)
        }
    }
} 
