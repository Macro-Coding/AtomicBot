const DiscordJS = require("discord.js")
const BotConfig = require("../config.json")

module.exports = {
    Name: "join voice",
    Usage: `${BotConfig.prefix}joinvoice`,
    Arguments: "",
    Type: "Moderation",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        const { joinVoiceChannel } = require('@discordjs/voice');

        const connection = joinVoiceChannel({
	        channelId: args[1],
	        guildId: message.guild.id,
	        adapterCreator: message.channel.guild.voiceAdapterCreator,
        });
        message.channel.send("Done!")
        const { createAudioPlayer, NoSubscriberBehavior, createAudioResource } = require('@discordjs/voice');

        const player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            },
        });
        const resource = createAudioResource('../bruh.mp3');
        player.play(resource);
        message.channel.send("Audio Over")
    }
}