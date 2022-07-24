const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const replies = ["Yes, for sure!", "Yeah I think so", "idk", "No, god no", "Nope definitely not"]

module.exports = {
  Name: "8ball",
  Usage: `${botConfig.prefix}8ball`,
  Arguments: "",
  Type: "Utility",
  Permissions: [],
  Invoke(client, message, args, cmd) {
    const question = args[1]
    if (!question) return message.reply("Please ask me something!")

    const randomNumber = Math.floor(Math.random() * replies.length)
    return message.reply(replies[randomNumber])
  }
}