const DiscordJS = require("discord.js")
const BotConfig = require("../config.json")

module.exports = {
    Name: "ban",
    Usage: `${BotConfig.prefix}ban <user> <?reason>`,
    Arguments: "<user> <?reason>",
    Type: "Moderation", Permissions: [
        DiscordJS.PermissionFlagsBits.BanMembers
    ],
    Invoke(client, message, args, cmd) {
        const author = message.member
        const reason = args[2] || "Not specified"
        if (!author.permissions.has(this.Permissions))
            return message.channel.send("You do not have permission to use a!ban. Missing `BAN_MEMBERS`")

        const member = message.mentions.members.first()
        if (!member) return message.channel.send("❌ Please mention a user.")

        member.ban({
            reason: reason
        })

        const BanEmbed = new DiscordJS.EmbedBuilder()
            .setTitle("Ban")
            .setColor("DarkRed")
            .setTimestamp()
            .addFields(
                { name: "Invoked by", value: author.username },
                { name: "Reason", value: reason }
            )

        return message.channel.send({
            embeds: [BanEmbed]
        })
    }
}