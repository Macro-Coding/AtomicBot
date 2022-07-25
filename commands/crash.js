const { Client } = require("discord.js")
const botConfig = require("../config.json")

module.exports = {
    Name: "crash",
    Usage: `${botConfig.prefix}crash`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const author = message.member
        if (!botConfig.debugWhitelist.includes(author.id))
            return message.channel.send("a!crash is a debug command and is only usable by the creators of Atomic.")

        message.channel.send("Crashing bot...")
        return process.exit()
    }
}