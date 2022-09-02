const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const DiscordJS = require("discord.js")

module.exports = {
    Name: "test",
    Usage: `${botConfig.prefix}test`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const voice = require('@discordjs/voice');
        voice.getVoiceConnection(message.guild.id).disconnect();
        message.channel.send("Left the voice channel")
    }
}