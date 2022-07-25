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
        const reason = args.slice(2).join(" ")
        if (!author.permissions.has(this.Permissions))
            return message.channel.send("You do not have permission to use a!kick. Missing `KICK_MEMBERS`")

        const member = message.mentions.members.first()
        if (!member) return message.channel.send("❌ Please mention a user.")

        member.kick(reason).then(() => {
            message.channel.send(`Kicked for ${reason}`)
        }).catch(err => {
            message.channel.send("I am not allowed to kick that person.")
            console.log(err)
        })
    }
}