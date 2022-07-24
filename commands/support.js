const { EmbedBuilder } = require('discord.js');
const botConfig = require("../config.json")

module.exports = {
    Name: "support",
    Usage: `${botConfig.prefix}support`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const supportEmbed = new EmbedBuilder()
        supportEmbed.setTitle("Support")
        supportEmbed.addFields(
            { name: "Invite Atomic", value: `[Invite](${botConfig.invite})`, inline: true },
            { name: "Support Server", value: "[Join](https://discord.gg/SEP74J3QHw)", inline: true }
        )

        return message.channel.send({ embeds: [supportEmbed] })
    }
}
