const { EmbedBuilder, Embed } = require('discord.js');
const fs = require("fs")
const botConfig = require("../config.json")
const Contributors = require("../data/contributors.json")

const Commands = fs.readdirSync(__dirname).filter(command => command !== "help.js" && command.endsWith(".js"))

const CommandFields = Commands.map(command => {
    const info = require(`./${command}`)
    return `\`a!${command.replace(".js", "")}\` Usage: \`${info.Usage || ""}\``
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
            { name: "Commands", value: `Use \`${botConfig.prefix}help commands\` for a list of commands.`, inline: true },
            { name: "Credits", value: `Use \`${botConfig.prefix}help credits\` for the credits.`, inline: true },
            { name: "Premium", value: `Use \`${botConfig.prefix}help premium\` to explore premium.`, inline: true },
            { name: "Macro Coding Discord", value: "[Discord](https://discord.gg/u5WeVyhDmu)" },
            { name: "Macro Coding Github", value: "[Github](https://github.com/Macro-Coding)" },
            { name: "Bot Commands Website (powered by Heroku)", value: "[Commands](https://atomic-commands.herokuapp.com)"}
        )
        .setImage("https://media.discordapp.net/attachments/1000503580282867793/1000784830700724274/standard_9.gif"),
    commands: new EmbedBuilder()
        .setTitle("Atomic - Commands")
        .setDescription(CommandFields.join("\n"))
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
        .setDescription("Nuclear is the premium version of Atomic. With Nuclear, you will have the ability to")
        .addFields(
            { name: "Create reaction roles", value: "With Nuclear, you will be able to create reaction roles", inline: true },
            { name: "Mute command", value: "With Nuclear, you can also use the a!mute command", inline: true },
            { name: "Automod", value: "With Nuclear, you will be able to set up automod for your server", inline: true }
        )
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

        if (!helpSection) return SendDefault(message)
        if (!embed) return message.channel.send(`Invalid help section. Please use \`${botConfig.prefix}help\`.`)

        message.channel.send({
            embeds: [embed]
        })
    }
}
