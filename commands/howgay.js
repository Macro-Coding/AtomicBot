const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes") 
const botConfig = require("../config.json")
const DiscordJS = require('discord.js') 

module.exports = {
    Name: "howgay",
    Usage: `${botConfig.prefix}howgay`,
    Arguments: "",
    Type: "Fun",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        if (!message.mentions.members.first()) {
          var user = message.author
          } else { 
            var user = message.mentions.members.first() 
            }
        const GayEmbed = new DiscordJS.EmbedBuilder()
        .setTitle(`sus? 🌈🏳️‍🌈`)
        .setColor("Blue")
        .setDescription("The Gay Machine Returns a changing value on how gay a user is.")
        .addFields(
                   { name: "Rainbow Tester", value: `${user}`, inline: true }, 
                   { name: "Gayness:", value: `${Math.floor(Math.random()*100)}%`, inline: true }
                  ) 
        message.channel.send({ embeds: [GayEmbed] })
    }
} 
