const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const DiscordJS = require("discord.js")
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const http = require("https")
module.exports = {
    Name: "test",
    Usage: `${botConfig.prefix}test`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        message.channel.send("lol")
    }
}
