const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")

module.exports = {
    Name: "help",
    Usage: `${botConfig.prefix}help`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const { EmbedBuilder } = require('discord.js');
        const exampleEmbed = new EmbedBuilder()
        exampleEmbed.setTitle('Commands')
        exampleEmbed.setDescription('Hia, my prefix is `a!` and i was made by Maxx with help from Edge Tech Coder and Rust (extreme credit to everyone in the Programming  Hero discord server), AceTheFox and many many others! Run a!setup to get started, you can also make a channel called #online to get updates when the bot comes online! My commands are:```js \n a!invite ✅  \n a!kick ❌ \n a!ban ❌ \n a!mute ❌ \n a!poll ❌ \n a!ann (announcement command by the way) ❌ \n a!8ball ❌ \n a!rrcreate <msg id> <emoji> <role> ❌ \n a!userinfo ✅ \n a!pfp ✅ \n a!membercount ✅```');
        message.channel.send({
            embeds: [exampleEmbed]
        })
    }
}
