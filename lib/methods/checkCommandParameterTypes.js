const DiscordJS = require("discord.js")

module.exports = (client, message, args, cmd) => {
    const checks = {
        client: client.constructor == DiscordJS.Client,
        message: message.constructor == DiscordJS.Message,
        args: args.constructor == Array,
        cmd: typeof cmd == "string"
    }

    const values = Object.values(checks)
    values.forEach(v => {
        if (!v) return false
    })

    return checks
}