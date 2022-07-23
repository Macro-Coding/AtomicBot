const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")

module.exports = {
    Name: "pfp",
    Usage: `${botConfig.prefix}pfp`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        let member = message.mentions.members.first();
        if (member) {
            const avatar = member.user.displayAvatarURL();
            return message.reply(avatar)
        }
  
        return message.reply("Oops! You need to mention a user!")
    }
} 
