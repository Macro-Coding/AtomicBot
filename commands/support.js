const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")                                    
module.exports = {
    Name: "support",
    Usage: `${botConfig.prefix}support`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const { EmbedBuilder } = require('discord.js');
        const exampleEmbed = new EmbedBuilder()
        exampleEmbed.setTitle('Invite')
        var size = client.guilds.cache.size
        var parsedSize = parseInt(size)
        exampleEmbed.setDescription('Hia wanna make me in ' + parsedSize + " servers? If so use this link: https://discord.com/api/oauth2/authorize?client_id=999512448736432189&permissions=8&scope=bot \n looking for the Support Server? here you go: https://discord.gg/SEP74J3QHw")
        return message.channel.send({ embeds: [exampleEmbed] })
    }
  }
