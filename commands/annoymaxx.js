const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const DiscordJS = require("discord.js")
const annoy = [
  "781131486094032897",
  "472530726613549066",
  "600010784453558331",
  "949801871197995008",
  "982628103908114442"
]
module.exports = {
  Name: "annoy maxx",
  Usage: `${botConfig.prefix}annoymaxx`,
  Arguments: "",
  Type: "Utility",
  Permissions: [],
  Invoke(client, message, args, cmd) {
    if (annoy.includes(message.author)) return message.channel.send("You cant use that command hehe")
    const { exec } = require('child_process');

    exec('java Main', (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }

      console.log(`stdout:\n${stdout}`);
    });
    message.channel.send("Maxx was sucsessfully annoyed, you cannot use atomic for another 2 mins")
    setTimeout(function () {
      message.channel.send("cooldown over!")
    }, 120000)

  }
}