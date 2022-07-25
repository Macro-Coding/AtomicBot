const DiscordJS = require("discord.js")
const BotConfig = require("../config.json")

module.exports = {
    Name: "ban",
    Usage: `${BotConfig.prefix}ban <user> <?reason>`,
    Arguments: "<user> <?reason>",
    Type: "Moderation",
    Permissions: [
        DiscordJS.PermissionFlagsBits.BanMembers
    ],
    Invoke(client, message, args, cmd) {
        const author = message.member
        const reason = args.slice(2).join(" ")
        if (!author.permissions.has(this.Permissions))
            return message.channel.send("You do not have permission to use that command. Missing `BAN_MEMBERS`")

        const member = message.mentions.members.first()
        if (!member) return message.channel.send("❌ Please mention a user.")

        member.ban({
            reason: reason
        }).then(() => {
            const BanEmbed = new DiscordJS.EmbedBuilder()
                .setTitle("Ban")
                .setColor("DarkRed")
                .setTimestamp()
                .addFields(
                    { name: "Invoked by", value: String(author.user.tag), inline: true },
                    { name: "Reason", value: String(reason), inline: true }
                )

            message.channel.send({
                embeds: [BanEmbed]
            })
        }).catch(err => {
            console.log(err)
            message.channel.send("I am not allowed to ban that person.")
        })
    }
}