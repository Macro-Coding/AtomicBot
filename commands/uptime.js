
const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const DiscordJS = require("discord.js")

module.exports = {
    Name: "uptime",
    Usage: `${botConfig.prefix}uptime`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `\`${days}\` days,\n\`${hours}\` hours,\n\`${minutes}\` minutes \nand \`${seconds}\` seconds`;
        const embed = new DiscordJS.EmbedBuilder()
            .setTitle("Uptime")
            .setDescription(uptime)
            .setColor("Aqua")
            .setFooter({ text : "Atomic - made by Macro Coding" })
            .setTimestamp()
        message.channel.send({ 
            embeds: [
                embed
            ] 
        })
        console.log(uptime)
    }
}
