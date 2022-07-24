const DiscordJS = require("discord.js")
const BotConfig = require("../config.json")

module.exports = {
    Name: "purge",
    Usage: `${BotConfig.prefix}purge <msgCount (0-100)>`,
    Arguments: "<msgCount>",
    Type: "Moderation",
    Permissions: [
        DiscordJS.PermissionFlagsBits.ManageMessages
    ],
    Invoke(client, message, args, cmd) {
        if (!message.member.permissions.has(this.Permissions))
            return message.channel.send("You do not have permission to use a!kick. Missing `MANAGE_MESSAGES`")

        const msgCount = Number(args[1])
        if (!msgCount)
            return message.channel.send("Invalid message count.")

        if (msgCount > 100)
            return message.channel.send("msgCount must be less than 100.")

        if (msgCount < 0)
            return message.channel.send("msgCount may not be a negative number.")

        message.channel.bulkDelete(msgCount)
        return message.channel.send(`Purged ${msgCount} message(s).`)
    }
}