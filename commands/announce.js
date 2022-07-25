const { EmbedBuilder } = require("discord.js")
const botConfig = require("../config.json")

module.exports = {
    Name: "announce",
    Usage: `${botConfig.prefix}announce <title>\\<channel>\\ <announcement>`,
    Arguments: "<title> <channel> <announcement>",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const description = message.content.split("\\")
        if (!title || description[1] || description[2])
            return message.channel.send("the announcement must have a title a channel and description.")

        const AnnEmbed = new EmbedBuilder()
            .setTitle(`Announcement - ${title}`)
            .setTimestamp()
            .setDescription(`Created by ${message.author.tag} \n ${description[2]}`)

        message.delete() //Ann = abreviation for announcement
        description[1].send({
            embeds: [AnnEmbed]
        })
    })
  }
}
