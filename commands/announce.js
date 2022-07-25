const { EmbedBuilder } = require("discord.js")
const botConfig = require("../config.json")
const channelMentionToId = require("../lib/methods/channelMentionToId")

module.exports = {
    Name: "announce",
    Usage: `${botConfig.prefix}announce <title>\\<channel>\\ <announcement>`,
    Arguments: "<title> <channel> <announcement>",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const title = args[1]
        const channel = args[2]
        const description = args
        if (!title || !channel || !description)
            return message.channel.send("Announcement must have a title a channel and description.")

        const TargetChannel = message.guild.channels.cache.get(channelMentionToId(channel))
        console.log(TargetChannel.id)
        if (!TargetChannel) return message.channel.send("Invalid channel.")

        const AnnEmbed = new EmbedBuilder()
            .setTitle(`Announcement - ${title}`)
            .setTimestamp()
            .setColor("Aqua")
            .setDescription(`Created by ${message.author.tag} \n ${description[2]}`)

        message.delete() //Ann = abreviation for announcement
        return TargetChannel.send({
            embeds: [AnnEmbed]
        })
    }
}
