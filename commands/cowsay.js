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
        var txt = ""
        for (let i = 1; i < args.length; i++) {
            txt += args[i] + " "
        }
        if (!args[1]) return message.channel.send("What should I say?")
        const { exec } = require('child_process');

        exec("cowsay "+txt.replace("$", "\\$").replace("|", "\\|").replace(">", "\\>"), (error, stdout, stderr) => {
            message.channel.send("```\n"+stdout+"\n```")
            if (error) {
                console.error(`error: ${error.message}`);
                return;
            }
        })
    }
}