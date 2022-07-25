module.exports = (channelMention) => {
    if (typeof channelMention != "string")
        return console.trace("ChannelMention must be a string")

    return Number(channelMention.replace("<", "").replace("#", ""))
}