const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")

module.exports = {
    Name: "bruhmoment",
    Usage: `${botConfig.prefix}bruhmoment <user>`,
    Arguments: "<user>",
    Type: "Fun",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const DiscordJS = require('discord.js') 
        const embed = new DiscordJS.EmbedBuilder() 
        if (message.mentions.members.first()) {
            var member = message.mentions.members.first()
            embed.setTitle(`${member.user.username} is having a bruh moment`)
            embed.setImage('https://media.discordapp.net/attachments/1001515379874611351/1001686062965469204/unknown.gif')
            return message.channel.send({
                embeds: [embed]
            })
        }
        return message.reply("Mention a user please!")
    }
}
