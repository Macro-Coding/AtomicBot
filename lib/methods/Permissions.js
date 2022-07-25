const DiscordJS = require("discord.js")

module.exports = class Permissions {
    static Has(client, permissions) {
        if (permissions.constructor != Array || permissions.constructor != DiscordJS.PermissionFlagsBits)
            return console.trace("Permissions parameter must be an array or Discord.js PermissionFlagsBits")

        if (client.constructor != DiscordJS.Client)
            return console.trace("Client parameter must be a Discord.js Client.")

        return client.user.flags.has(permissions)
    }
}