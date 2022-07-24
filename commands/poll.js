const { EmbedBuilder } = require("discord.js")
const botConfig = require("../config.json")

const NumberEmojis = [
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣"
]

module.exports = {
    Name: "poll",
    Usage: `${botConfig.prefix}poll <title> <a1> <a2> <?a3> <?a4>`,
    Arguments: "<title> <a1> <a2> <?a3> <?a4>",
    Type: "Fun",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const title = args[1]
        const Answers = [
            args[2],
            args[3],
            args[4],
            args[5]
        ]

        if (!title || !Answers[0] || !Answers[1])
            return message.channel.send("Poll must have a title and 2 answers.")

        const PollEmbed = new EmbedBuilder()
            .setTitle(`Poll - ${title}`)
            .setTimestamp()
            .setDescription(`Created by ${message.author.tag}`)

        message.delete()

        const PollMessage = message.channel.send({
            embeds: [PollEmbed]
        })

        PollMessage.then(msg => {
            Object.keys(Answers).forEach(key => {
                const value = Answers[key]

                if (value) msg.react(NumberEmojis[key])
            })
        })
    }
}