const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const DiscordJS = require("discord.js")

module.exports = {
    Name: "initialize",
    Usage: `${botConfig.prefix}init`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const embed = new DiscordJS.EmbedBuilder()
            .setTitle("Thank You For Chosing Atomic!")
            .setColor("Aqua")
            .setDescription("Run `a!help` to get bot info \nMake sure to join our [Discord](https://discord.gg/u5WeVyhDmu) Server too! \nFor Bot Commands [go here](https://atomic-commands.herokuapp.com)")
            .setFooter({text: "Thank You For Chosing Discord to Build Your Community!"})
            .setTimestamp()
        message.channel.send({ embeds : [embed] })
    }
}