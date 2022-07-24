const { EmbedBuilder, Embed } = require('discord.js');
const fs = require("fs")
const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const Contributors = require("../data/contributors.json")

const Commands = fs.readdirSync(__dirname).filter(command => command !== "help.js" && command.endsWith(".js"))

const CommandFields = Commands.map(command => {
    const info = require(`./${command}`)
    return { name: info.Name || "Unknown", value: `Usage: \`${info.Usage || ""}\`` }
})

const ContributorFields = Contributors.map(contributor => {
    return { name: contributor.name, value: contributor.role, inline: true }
})

const Embeds = {
    index: new EmbedBuilder()
        .setTitle("Atomic")
        .setDescription("Atomic is a Discord bot that utilises utility, moderation, and fun commands that you can use in your Discord server.")
        .setColor("Blue")
        .addFields(
            { name: "Commands", value: `Use \`${botConfig.prefix}help commands\` for a list of commands`, inline: true },
            { name: "Credits", value: `Use \`${botConfig.prefix}help credits\` for the credits.`, inline: true },
            { name: "Macro Coding Discord", value: "https://discord.gg/u5WeVyhDmu" },
            { name: "Macro Coding Github", value: "https://github.com/Macro-Coding" }
        ),
    commands: new EmbedBuilder()
        .setTitle("Atomic - Commands")
        .addFields(CommandFields)
        .setColor("Blue"),
    credits: new EmbedBuilder()
        .setTitle("Atomic - Credits")
        .setDescription("Atomic was made with the help of the following people.")
        .setColor("Blue")
        .addFields(ContributorFields)
        .setFooter({
            text: "Created by Macro Coding"
        })
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
        if (!helpSection) SendDefault(message)
        if (!embed) return message.channel.send(`Invalid help section. Please use \`${botConfig.prefix}help\`.`)

        message.channel.send({
            embeds: [embed]
        })
    }
}
