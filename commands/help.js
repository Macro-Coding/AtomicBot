const { EmbedBuilder, Embed } = require('discord.js');
const fs = require("fs")
const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")

const Commands = fs.readdirSync(__dirname).filter(command => command !== "help.js" && command.endsWith(".js"))

console.log(Commands)
const Fields = Commands.map(command => {
    const info = require(`./${command}`)
    return { name: info.Name || "Unknown", value: `Usage: ${info.Usage || ""}` }
})

const Embeds = {
    index: new EmbedBuilder()
        .setTitle("Atomic")
        .setDescription("Atomic is a Discord bot that utilises utility, moderation, and fun commands that you can use in your Discord server.")
        .setColor("Blue")
        .addFields(
            { name: "Commands", value: `Use \`${botConfig.prefix}help commands\` for a list of commands`, inline: true },
            { name: "Credits", value: `Use \`${botConfig.prefix}help credits\` for the credits.`, inline: true }
        ),
    commands: new EmbedBuilder()
        .setTitle("Atomic - Commands")
        .addFields(Fields)
        .setColor("Blue")
}

const SendDefault = (message) => {
    return message.channel.send({
        embeds: [Embeds.index]
    })
}

module.exports = {
    Name: "help",
    Usage: `${botConfig.prefix}help <?section>`,
    Arguments: "<?section>",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const helpSection = args[1]
        const embed = Embeds[helpSection]
        if (!helpSection || !embed) SendDefault(message)

        message.channel.send({
            embeds: [embed]
        })
    }
}
