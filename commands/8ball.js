const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")

module.exports = {
    Name: "8ball",
    Usage: `${botConfig.prefix}8ball`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const replies = ["Yes, for sure!", "Yeah I think so", "idk", "No, god no", "Nope definitely not"] 
        return message.reply(replies[Math.floor(Math.random() * arr.length)])
    })
  }
} 
