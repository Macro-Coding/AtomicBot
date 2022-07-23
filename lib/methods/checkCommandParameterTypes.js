const DiscordJS = require("discord.js")

/**
 * Checks command parameter types.
 * @param {DiscordJS.Client} client 
 * @param {DiscordJS.Message} message 
 * @param {String[]} args 
 * @param {String} cmd 
 * @returns false if a check is false, all checks if all checks are true
 */
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