const DiscordJS = require('discord.js');
const botConfig = require("../config.json")

module.exports = {
    Name: "nick",
    Usage: `${botConfig.prefix}nick <nickname>`,
    Arguments: "<nickname>",
    Type: "Utility",
    Permissions: [
        DiscordJS.PermissionFlagsBits.ChangeNickname
    ],
    Invoke(client, message, args, cmd) {
        const member = message.member
        const nickname = args.slice(1).join(" ")

        if (!member.permissions.has(this.Permissions))
            return message.channel.send("You do not have permission to use that. Missing `CHANGE_NICKNAME`")

        if (nickname.length > 30)
            return message.channel.send("Nickname is too long. Max nickname length is 30.")

        member.setNickname(nickname)
        return message.channel.send(`Set nickname to \`${nickname}\``)
    }
}