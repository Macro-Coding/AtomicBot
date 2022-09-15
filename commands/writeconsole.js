const botConfig = require("../config.json")
const DiscordJS = require("discord.js")
const stuff = []

module.exports = {
    Name: "writeconsole",
    Usage: `${botConfig.prefix}writeconsole`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        if(!args[1]) return message.channel.send("What should I say 🤔?")
        for(let i = 1; i < args.length; i++){
            stuff.push(args[i])
        }
        console.log(message.author.tag+": "+stuff.join(" "))
    }
}
