const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes") 
const botConfig = require("../config.json") 

module.exports = {
    Name: "bigbrain",
    Usage: `${botConfig.prefix}bigbrain`,
    Arguments: "<user>",
    Type: "Fun",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const DiscordJS = require('discord.js') 
        const embed = new DiscordJS.EmbedBuilder() 
        if (message.mentions.members.first()) {
            var member = message.mentions.members.first() 
            embed.setTitle(`${member.user.username} is having a big brain moment`) 
            embed.setImage('https://c.tenor.com/QaGZ50VlEPEAAAAM/think-about-it-use-your-brain.gif') 
          return message.channel.send({
                embeds: [embed]
            })
        }
        return message.reply("Mention a user please!")
    }
}
