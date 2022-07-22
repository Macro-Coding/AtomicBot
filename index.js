const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.MessageContent,
        //  GatewayIntentBits.GuildPresences
    ]
});

const prefix = "a!"
client.on("ready", function () {
    client.user.setActivity("a!help");
    console.log("Ready, signed in as " + client.user.tag)
    var channel = client.channels.cache.find(channel => channel.name === "online");
    channel.send(`Yes! ${client.user.tag} is online`)
})
client.on("messageCreate", (message) => {
    try {
        if (message.content == prefix + "invite") {
            const { EmbedBuilder } = require('discord.js');
            const exampleEmbed = new EmbedBuilder()
            var size = client.guilds.cache.size
            var ty = x + 1
        }
        client.user.setActivity(`a!help, in ${client.guilds.cache.size} servers`);
        if (message.content == prefix + "help") {
            const { EmbedBuilder } = require('discord.js');
            const exampleEmbed = new EmbedBuilder()
            exampleEmbed.setTitle('Commands')
            exampleEmbed.setDescription('Hia, my prefix is `a!` and i was made by Maxx with help from Edge Tech Coder (extreme credit to everyone in the Programming  Hero discord server), AceTheFox and many many others! Run a!setup to get started, you can also make a channel called #online to get updates when the bot comes online! My commands are:```js \n a!invite ✅  \n a!kick ❌ \n a!ban ❌ \n a!mute ❌ \n a!poll ❌ \n a!ann (announcement command by the way) ❌ \n a!8ball ❌ \n a!rrcreate <msg id> <emoji> <role> ❌ \n a!userinfo ✅ \n a!pfp ✅ ```');
            message.channel.send({ embeds: [exampleEmbed] })
        }
        if (message.content.startsWith(prefix + "pfp")) {
            if (message.mentions.members.first() != undefined) {
                const { EmbedBuilder } = require('discord.js');
                const exampleEmbed = new EmbedBuilder()
                exampleEmbed.setTitle('PFP')
                exampleEmbed.setThumbnail(message.mentions.members.first().displayAvatarURL())
                exampleEmbed.setDescription("<@" + message.mentions.members.first() + '>\'s PfP')
                message.channel.send({ embeds: [exampleEmbed] })
            } else {
                message.reply("Oops! you need to mention a user!")
            }
        }
        if (message.content.startsWith(prefix + "userinfo")) {
            if (message.mentions.members.first() != undefined) {
                const { EmbedBuilder } = require('discord.js');
                var member = message.mentions.members.first()
                const exampleEmbed = new EmbedBuilder()
                exampleEmbed.setTitle('Info:')
                exampleEmbed.setDescription("Bot: " + member.user.bot + "\n Id: " + member.id + "\n PFP URL: <just run: a!pfp <@" + member + ">> \n Account Created at: " + member.user.createdAt)
                message.channel.send({ embeds: [exampleEmbed] })
            } else {
                message.reply("Oops! you need to mention a user!")
            }
        }
        if (message.content.startsWith(prefix + "setup") && message.member.permissions.has('MANAGE_SERVER') && !message.guild.roles.cache.find(role => role.name === "MUTED BOI")) {
            message.guild.roles.create({
                name: 'MUTED BOI', color: 'BLUE',
                reason: 'we needed a role for muted People',
            }).then(console.log)
                .catch(console.error);
        } if (message.content.startsWith(prefix + "mute")) {
            var member = message.mentions.members.first()
            let role = message.guild.roles.cache.find(role => role.name === "MUTED BOI"); role.setPermissions({
                permissions: [
                    "SEND_MESSAGES" == false, "MANAGE_MESSAGES" == false,
                    "READ_MESSAGES" == false, "ADD_REACTIONS" == false
                ]
            })

            member.roles.add(role)
            message.reply("muted: <@" + member + ">")
        }
    } catch (err) {
        console.log(err)
    }
})
client.login("token")