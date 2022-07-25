const DiscordJS = require("discord.js")
const BotConfig = require("../config.json")

module.exports = {
    Name: "report",
    Usage: `${BotConfig.prefix}report <msg>`,
    Arguments: "<msg>",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const reportMessage = args.slice(1).join(" ")

        message.guild.channels.fetch(BotConfig.messagesChannel).then(channel => {
            message.delete()

            const SentMessageEmbed = new DiscordJS.EmbedBuilder()
                .setTitle("Sent Message")
                .setDescription(`\`${reportMessage}\``)
                .setColor("Aqua")
                .setFooter({
                    text: "Thanks for helping improve Atomic!"
                })
                .setTimestamp()

            const MessageEmbed = new DiscordJS.EmbedBuilder()
                .setTitle(`Message from ${message.author.tag}`)
                .setDescription(reportMessage)
                .setColor("DarkRed")
                .setTimestamp()

            channel.send({
                embeds: [MessageEmbed]
            })

            message.channel.send({
                embeds: [SentMessageEmbed]
            })
        })
    }
}