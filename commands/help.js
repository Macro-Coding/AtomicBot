const { EmbedBuilder, Embed } = require('discord.js');
const fs = require("fs")
const botConfig = require("../config.json")
const Contributors = require("../data/contributors.json")

const Commands = fs.readdirSync(__dirname).filter(command => command !== "help.js" && command.endsWith(".js"))

const CommandFields = Commands.map(command => {
    const info = require(`./${command}`)
    return { name: info.Name || "Unknown", value: `Usage: \`${info.Usage || ""}\``, inline: true }
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
            { name: "Macro Coding Discord", value: "[Discord](https://discord.gg/u5WeVyhDmu)" },
            { name: "Macro Coding Github", value: "[Github](https://github.com/Macro-Coding)" }
        )
        .setImage("https://media.discordapp.net/attachments/1000503580282867793/1000784830700724274/standard_9.gif"),
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
        }),
    premium: new EmbedBuilder()
        .setTitle("Atomic - Nuclear (Premium)")
        .setColor("Blue")
        .setDescription("Wanna see what were doing next? Introducing Atomic (Premium)  code named Nuclear! What can you expect from Nuclear? \n reaction roles, \n mute commands, \n automoderation \n and more \nMake sure you join Macro Coding to get updates about progress in current projects!")
        

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

        if (!helpSection) return SendDefault(message)
        if (!embed) return message.channel.send(`Invalid help section. Please use \`${botConfig.prefix}help\`.`)

        message.channel.send({
            embeds: [embed]
        })
    }
}
