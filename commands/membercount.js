const { EmbedBuilder } = require('discord.js');
const botConfig = require("../config.json")

module.exports = {
    Name: "membercount",
    Usage: `${botConfig.prefix}membercount`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const memberCountEmbed = new EmbedBuilder()
        memberCountEmbed.setTitle(`${message.guild}`)
        memberCountEmbed.setDescription('Total: ' + message.guild.memberCount)

        return message.channel.send({ embeds: [memberCountEmbed] })
    }
}