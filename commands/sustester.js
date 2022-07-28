const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes") 
const botConfig = require("../config.json")
const DiscordJS = require('discord.js')

module.exports = {
    Name: "sus test",
    Usage: `${botConfig.prefix}sustester`,
    Arguments: "",
    Type: "Fun",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        if (!message.mentions.members.first()) {
            var user = message.author
        } else { var user = message.mentions.members.first() }
        const GayEmbed = new DiscordJS.EmbedBuilder()
        .setTitle(`susy boi? 🌈🏳️‍🌈`)
        .setColor("Blue")
        .setDescription("The Sus Tester Returns a changing value on how sus a user is.")
        .addFields({ name: "Susy Tester", value: `${user}`, inline: true },
                   { name: "Susyness:", value: `${Math.floor(Math.random()*100)}%`, inline: true }
                  )
        message.channel.send({ embeds: [GayEmbed] })
    }
} 
