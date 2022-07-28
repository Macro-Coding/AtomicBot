const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const gifyToken = "XJ7pyiBBnsbYeMsBoInuDruaeyB01uLv"
const http = require("http")
const discord = require('discord.js')

module.exports = {
    Name: "gif",
    Usage: `${botConfig.prefix}gif <word>`,
    Arguments: "",
    Type: "Fun",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const arrayForArg = message.content.split(`gif `)
        var searchGif = arrayForArg[1]
        const url = `http://api.giphy.com/v1/gifs/search?q=${searchGif}&api_key=${gifyToken}&limit=100`;
        http.get(url, (res) => {
            let body = "";
            res.on("data", (chunk) => {
                body += chunk;
            });
            res.on("end", () => {
                try {
                    let json = JSON.parse(body)
                    const randomIndex = Math.floor(Math.random() * json.data.length);
                    const Embed = new discord.EmbedBuilder()
                    const gi = json.data[randomIndex]
                    const gif = gi
                    if (gi == undefined) return message.reply("Dang it! An error occurred, use `a!report` or `a!support` to alert developers!")
                    Embed.setTitle(gif.title)
                    Embed.setDescription(`[link](${gif.embed_url})`)
                    message.reply({ embeds: [Embed] })
                    message.channel.send(gif.url)
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
