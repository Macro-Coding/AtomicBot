const https = require("https");

const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const DiscordJS = require("discord.js")

module.exports = {
    Name: "hack",
    Usage: `${botConfig.prefix}hack`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        https.get("https://random-data-api.com/api/address/random_address", (res) => {
            let data = "";

            res.on("data", (chunk) => {
                data += chunk;
            });

            res.on("end", () => {
                var json = JSON.parse(data)
                const embed = new DiscordJS.EmbedBuilder()
                    .setTitle(`ID: ${json.id}`)
                    .setDescription(`\`\`\`\nUDI: ${json.uid}\nCity: ${json.city}\nStreet: ${json.street_name}\nStreet Address: ${json.street_address}\nBuilding Number: ${json.building_number}\nMail Box: ${json.mail_box}\nCommunity: ${json.community}\nZip Code: ${json.zip_code}\nZip: ${json.zip}\nPost Code: ${json.postcode}\nTime Zone: ${json.time_zone}\nCountry: ${json.country}\nCoordinates: ${json.latitude}, ${json.longitude}\nFull Address: ${json.full_address}\`\`\``)
                    .setColor("Random")
                    .setFooter({text: message.author.tag})
                    .setTimestamp()
                message.channel.send({embeds: [embed]})
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }
}