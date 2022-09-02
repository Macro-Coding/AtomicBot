const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const DiscordJS = require("discord.js")
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const http = require("https")
module.exports = {
    Name: "define",
    Usage: `${botConfig.prefix}define`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        if(!args[1]) return message.channel.send("Specify a word please")
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${args[1]}`;
        http.get(url, (res) => {
            let body = "";
            res.on("data", (chunk) => {
                body += chunk;
            });
            res.on("end", () => {
                try {
                    let json = JSON.parse(body)
                    const Embed = new DiscordJS.EmbedBuilder()
                        .setColor("Random")
                        .setTitle("Word: "+json[0].word)
                        .setDescription(`Audio: ${json[0].phonetics[0].audio}\nPhonetic: ${json[0].phonetics[1].text}\nDefinition: ${json[0].meanings[0].definitions[0].definition}\nExample: ${json[0].meanings[0].definitions[0].example}`)
                    message.channel.send({ embeds: [Embed] })
                } catch (error) {
                    message.reply("Dang it! An error occurred, use `a!report` or `a!support` to alert developers!")
                    console.error(error.message);
                };
            });
        }).on("error", (error) => {
            message.reply("Dang it! An error occurred, use `a!report` or `a!support` to alert developers of this issue")
            console.error(error.message);
        });
    }
}
