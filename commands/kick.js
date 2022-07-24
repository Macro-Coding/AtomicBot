const DiscordJS = require("discord.js")
const BotConfig = require("../config.json")

module.exports = {
    Name: "kick",
    Usage: `${BotConfig.prefix}kick <user> <?reason>`,
    Arguments: "<user> <?reason>",
    Type: "Moderation",
    Permissions: [
        DiscordJS.PermissionFlagsBits.KickMembers
    ],
    Invoke(client, message, args, cmd) {
        const author = message.member
        const reason = args[2] || "Not specified"
        if (!author.permissions.has(this.Permissions))
            return message.channel.send("You do not have permission to use a!kick. Missing `KICK_MEMBERS`")

        const member = message.mentions.members.first()
        if (!member) return message.channel.send("❌ Please mention a user.")

        member.kick(reason)
    }
}