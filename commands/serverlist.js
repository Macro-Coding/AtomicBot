const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const DiscordJS = require("discord.js")

module.exports = {
    Name: "server list",
    Usage: `${botConfig.prefix}serverlist`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        client.guilds.cache.forEach(guild => {
            const embed = new DiscordJS.EmbedBuilder()
                .setTitle(guild.name)
                .setColor("Random")
                .setThumbnail(guild.iconURL())
                .setDescription(`ID: ${guild.id}\nMember Count: ${guild.memberCount}`);
            message.channel.send({ embeds: [embed] })
        })
    }
}
