const { EmbedBuilder } = require("discord.js")
const botConfig = require("../config.json")
const channelMentionToId = require("../lib/methods/channelMentionToId")

module.exports = {
    Name: "announce",
    Usage: `${botConfig.prefix}announce <title> <channel> <announcement>`,
    Arguments: "<title> <channel> <announcement>",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const title = args[1]
        const channel = args[2]
        const description = args.slice(3).join(" ")

        if (!title || !channel || !description)
            return message.channel.send("Announcement must have a title, channel, and description.")

        const AnnEmbed = new EmbedBuilder()
            .setTitle(`Announcement - ${title}`)
            .setTimestamp()
            .setColor("Aqua")
            .addFields(
                { name: "Created by", value: message.author.tag, inline: true },
                { name: "Description", value: description, inline: true }
            )

        message.guild.channels.fetch(channelMentionToId(channel)).then(channel => {
            message.delete()

            const NoticeEmbed = new EmbedBuilder()
                .setTitle("Announcement Sent")
                .setDescription(description)
                .setColor("Aqua")
                .setTimestamp()

            channel.send({
                embeds: [AnnEmbed]
            }).then(msg => {
                NoticeEmbed.addFields(
                    { name: "Message", value: `[Jump](${msg.url})` }
                )

                message.channel.send({
                    embeds: [NoticeEmbed]
                })
            })
        }).catch(err => {
            console.log(err)
            message.channel.send("Invalid channel.")
        })
    }
}