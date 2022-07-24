const DiscordJS = require("discord.js")
const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")

module.exports = {
    Name: "pfp",
    Usage: `${botConfig.prefix}pfp <user>`,
    Arguments: "<@user>",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const member = message.mentions.members.first();
        if (!member) return message.reply("Oops! You need to mention a user!")

        const avatar = member.user.displayAvatarURL();
        const embed = new DiscordJS.EmbedBuilder()
            .setTitle(`${member.user.username}'s Avatar`)
            .setImage(avatar)

        return message.reply({
            embeds: [embed]
        })
    }
} 
