/* Module Includes */
const DiscordJS = require("discord.js");
const BotConfig = require("./config.json")
const FS = require("fs")
const Path = require("path")

/* Variables */
const Client = new DiscordJS.Client({ intents: BotConfig.intents })
const Commands = new Object()

/* Command handling */
const CommandFiles = FS.readdirSync(Path.join(__dirname, "./commands/"))
    .filter(file => file.endsWith(".js"))
for (var file of CommandFiles) { Commands[file.replace(".js", "")] = file.toLowerCase() }
Client.on("ready", () => {
    Client.user.setPresence({ activities: [{ name: "a!help" }], status: "online" });
    console.log(`${Client.user.username} is now online.`)
}) Client.on("messageCreate", (message) => {
    try {
        if (message.author.bot) return
        if (!message.content.startsWith(BotConfig.prefix)) return console.log(`${message.author.tag} in ${message.guild} in ${message.channel.name}: ${message.content}`)
        const args = message.content.trim()
            .split(/ +/g) const cmd = args[0].slice(BotConfig.prefix.length)
                .toLowerCase()

        const commandIndex = Commands[cmd]
        if (!commandIndex) return message.channel.send(`Invalid command \`${cmd}\`. Please use \`${BotConfig.prefix}help\` for a list of commands.`)

        const commandData = require(`./commands/${commandIndex}`)
        commandData.Invoke(Client, message, args, cmd)
    } catch (e) {
        message.reply("Dang it! an error occurred! ❌")
        console.log(e)
    }
})
Client.login(BotConfig.token) 
