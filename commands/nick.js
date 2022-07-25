const DiscordJS = require('discord.js');
const botConfig = require("../config.json")

module.exports = {
    Name: "nick",
    Usage: `${botConfig.prefix}nick <user> <nickname>`,
    Arguments: "<user> <nickname>",
    Type: "Utility",
    Permissions: [
        DiscordJS.PermissionFlagsBits.ManageNicknames
    ],
    Invoke(client, message, args, cmd) {
        const author = message.member
        const member = message.mentions.members.first()
        const nickname = args.slice(2).join(" ")

        if (!author.permissions.has(this.Permissions))
            return message.channel.send("You do not have permission to use that. Missing `MANAGE_NICKNAMES`")

        if (!member)
            return message.channel.send("Please mention a user.")

        if (nickname.length > 30)
            return message.channel.send("Nickname is too long. Max nickname length is 30.")

        member.setNickname(nickname).then(() => {
            return message.channel.send(`Changed nickname to \`${nickname}\``)
        }).catch(err => {
            return message.channel.send("I am not allowed to set that user's nickname.")
        })
    }
}
