const { EmbedBuilder } = require('discord.js');
const botConfig = require("../config.json")

const ShowInfoEmbed = (user) => {
    return new EmbedBuilder()
        .setTitle(`Info for ${user.username}`)
        .setThumbnail(user.displayAvatarURL())
        .addFields(
            { name: "Username", value: String(user.username) },
            { name: "Id", value: String(user.id) },
            { name: "Created", value: String(user.createdAt) },
            { name: "Bot", value: String(user.bot) }
        )
        .setColor("Aqua")
}

module.exports = {
    Name: "userinfo",
    Usage: `${botConfig.prefix}userinfo <user>`,
    Arguments: "<user>",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const userArg = message.mentions.members.first()
        if (!userArg) return message.channel.send({
            embeds: [ShowInfoEmbed(message.author)]
        })

        const user = userArg.user

        const infoEmbed = ShowInfoEmbed(user)
        return message.channel.send({
            embeds: [infoEmbed]
        })
    }
}