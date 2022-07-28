const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes") 
const botConfig = require("../config.json")

module.exports = {
    Name: "fries",
    Usage: `${botConfig.prefix}fries`,
    Arguments: "<user>",
    Type: "Fun",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const DiscordJS = require('discord.js') const embed = new DiscordJS.EmbedBuilder() if (message.mentions.members.first()) {
            var member = message.mentions.members.first() 
            embed.setTitle(`${member.user.username} wants fries`) 
            embed.setImage('https://media.discordapp.net/attachments/1001515379874611351/1001756420745736242/20220727_034157.jpg')
            return message.channel.send({
                embeds: [embed]
            })
        }
        return message.reply("Mention a user please!")
    }
} 
