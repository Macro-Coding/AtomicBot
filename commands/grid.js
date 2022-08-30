const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const DiscordJS = require("discord.js")

module.exports = {
    Name: "grid",
    Usage: `${botConfig.prefix}grid`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        var one = [
            "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
        ]
        var two = [
            "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
        ]
        var three = [
            "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
        ]
        var four = [
            "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
        ]
        var five = [
            "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
        ]
        var six = [
            "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
        ]
        var seven = [
            "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
        ]
        var eight = [
            "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
        ]
        var nine = [
            "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
        ]
        var ten = [
            "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
        ]
        var base = [
            "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
        ]
        const intmap = {
            "1" : one,
            "2" : two,
            "3" : three,
            "4" : four,
            "5" : five,
            "6" : six,
            "7" : seven,
            "8" : eight,
            "9" : nine,
            "10" : ten
        }
        const allarr = [
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten
        ]
        
        function resetSquares(){
             one = [
                "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
            ]
             two = [
                "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
            ]
             three = [
                "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
            ]
             four = [
                "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
            ]
             five = [
                "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
            ]
             six = [
                "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
            ]
             seven = [
                "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
            ]
             eight = [
                "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
            ]
             nine = [
                "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
            ]
             ten = [
                "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
            ]
             base = [
                "▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️","▫️"
            ]
            console.log("cleared")
            message.channel.send("Board has been reset, ||aka: or you filled in the square!||")
        }
        if(args[1] == "clear" || !one == base && one == two == three == four == five == six == seven == eight == nine == ten) return resetSquares()
        if(!args[1] || parseInt(args[1]) > 10 || parseInt(args[1]) < 0 || parseInt(args[2]) > 10 || parseInt(args[2]) < 0 ) return message.channel.send("Specify two numbers betwene 1 and 10 please!")
        intmap[args[1]][parseInt(args[2])-1] = "🟩"
        console.log(`set ${args[1]}, ${args[2]}`)
        const embed = new DiscordJS.EmbedBuilder()
            .setDescription(`${one.join("")}\n${two.join("")}\n${three.join("")}\n${four.join("")}\n${five.join("")}\n${six.join("")}\n${seven.join("")}\n${eight.join("")}\n${nine.join("")}\n${ten.join("")}`)
        message.channel.send({embeds:[embed]})
    }
}
