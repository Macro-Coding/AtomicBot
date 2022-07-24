const { EmbedBuilder } = require('discord.js');
const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")

module.exports = {
    Name: "userinfo",
    Usage: `${botConfig.prefix}userinfo <user>`,
    Arguments: "<user>",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const userArg = message.mentions.members.first()
        if (!userArg) return message.channel.send("Please ping a user that you'd like to see the info of.")

        const user = userArg.user

        const infoEmbed = new EmbedBuilder()
        infoEmbed.setTitle(`Info for ${user.username}`)
        infoEmbed.setImage(user.displayAvatarURL())
        infoEmbed.setDescription(`
        Bot: ${user.bot}
        Id: ${user.id}
        Account Created: ${user.createdAt.replace("GMT-0500 (Central Daylight Time)", "")}`)
        /*
        infoEmbed.addFields(
            { name: "Bot", value: user.bot, inline: true },
            { name: "Id", value: user.id, inline: true },
            { name: "Account Created", value: user.createdAt, inline: true }
        )
        */
        return message.channel.send({
            embeds: [infoEmbed]
        })
    }
}