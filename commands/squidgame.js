const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const DiscordJS = require("discord.js")
//user coordinates
var x = 0
var y = 0
//set score and lives
var score = 0
var lives = 3
//reset running session numbers
var running = 0
//function for making random x and y coordinates
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
module.exports = {
    Name: "Squid Game",
    Usage: `${botConfig.prefix}squidgame`,
    Arguments: "",
    Type: "Utility",
    Permissions: [],
    Invoke(client, message, args, cmd) {
        //increase running int
        running++
        //testfor other sessions
        if(running==1){
        
        x = 0
        y = 0
        var disabled = false
        message.channel.send("got it!").then((message) => {
            //template array for lengths
            var onee = [
                "⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"
            ]
            //make random coordinates for sprites
            var randX = randomIntFromInterval(0, 9)
            var randY = randomIntFromInterval(0, onee.length)
            var emnyX = randomIntFromInterval(0, 9)
            var emnyY = randomIntFromInterval(0, onee.length)
            var emn1X = randomIntFromInterval(0, 9)
            var emn1Y = randomIntFromInterval(0, onee.length)
            var emn2X = randomIntFromInterval(0, 9)
            var emn2Y = randomIntFromInterval(0, onee.length)
            var coin0X = randomIntFromInterval(0, 9)
            var coin0Y = randomIntFromInterval(0, onee.length)
            var coin1X = randomIntFromInterval(0, 9)
            var coin1Y = randomIntFromInterval(0, onee.length)
            var coin2X = randomIntFromInterval(0, 9)
            var coin2Y = randomIntFromInterval(0, onee.length)
            //create reactions
            message.react("◀️")
            message.react("🔼")
            message.react("🔽")
            message.react("▶️")
            message.react("😉")
            message.react("♻️")
            //wait for reactions
            client.on('messageReactionAdd', (reaction, user) => {
                //debug net
                if(!reaction.id == message.id) return console.log("false")
                //these arrays hold the x values ie one[1] would be 0,1
                var one = [
                    "⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"
                ]
                var two = [
                    "⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"
                ]
                var three = [
                    "⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"
                ]
                var four = [
                    "⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"
                ]
                var five = [
                    "⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"
                ]
                var six = [
                    "⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"
                ]
                var seven = [
                    "⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"
                ]
                var eight = [
                    "⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"
                ]
                var nine = [
                    "⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"
                ]
                var ten = [
                    "⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"
                ]
                //base value
                var base = [
                    "⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"
                ]
                //maps y values to arrays, also used to render sprites
                const intmap = {
                    0 : one,
                    1 : two,
                    2 : three,
                    3 : four,
                    4 : five,
                    5 : six,
                    6 : seven,
                    7 : eight,
                    8 : nine,
                    9 : ten
                }
                //dont react if a user is a bot
                if(user.bot) return
                //react to reaction commands
                if(reaction._emoji.name == "🔽" && x != 9 && !disabled){
                    x+=1
                }else if(reaction._emoji.name == "▶️" && y != one.length && !disabled){
                    y+=1
                }else if(reaction._emoji.name == "◀️" && y != 0 && !disabled){
                    y-=1 
                }else if(reaction._emoji.name == "🔼" && x != 0 && !disabled){
                    x-=1
                }else if(reaction._emoji.name == "😉"){
                    //this DISABLES the game
                    y = 0
                    x = 0
                    score = 0
                    disabled = true
                    running = 0
                    lives = 3
                    message.reactions.removeAll()
                    return 
                }else if(reaction._emoji.name == "♻️"){
                    //this reloads the whole game
                    y = randomIntFromInterval(0, one.length)
                    x = randomIntFromInterval(0, 9)
                     randX = randomIntFromInterval(0, 9)
                     randY = randomIntFromInterval(0, one.length)
                     emnyX = randomIntFromInterval(0, 9)
                     emnyY = randomIntFromInterval(0, onee.length)
                     emn1X = randomIntFromInterval(0, 9)
                     emn1Y = randomIntFromInterval(0, onee.length)
                     emn2X = randomIntFromInterval(0, 9)
                     emn2Y = randomIntFromInterval(0, onee.length)
                     coin0X = randomIntFromInterval(0, 9)
                     coin0Y = randomIntFromInterval(0, onee.length)
                     coin1X = randomIntFromInterval(0, 9)
                     coin1Y = randomIntFromInterval(0, onee.length)
                     coin2X = randomIntFromInterval(0, 9)
                     coin2Y = randomIntFromInterval(0, onee.length)
                     score = 0
                     lives = 3
                }
                try{
                if(randX == x && randY == y){
                    //test if player reaches goal
                    y = randomIntFromInterval(0, one.length)
                    x = randomIntFromInterval(0, 9)
                     randX = randomIntFromInterval(0, 9)
                     randY = randomIntFromInterval(0, one.length)
                     emnyX = randomIntFromInterval(0, 9)
                     emnyY = randomIntFromInterval(0, onee.length)
                     emn1X = randomIntFromInterval(0, 9)
                     emn1Y = randomIntFromInterval(0, onee.length)
                     emn2X = randomIntFromInterval(0, 9)
                     emn2Y = randomIntFromInterval(0, onee.length)
                     coin0X = randomIntFromInterval(0, 9)
                     coin0Y = randomIntFromInterval(0, onee.length)
                     coin1X = randomIntFromInterval(0, 9)
                     coin1Y = randomIntFromInterval(0, onee.length)
                     coin2X = randomIntFromInterval(0, 9)
                     coin2Y = randomIntFromInterval(0, onee.length)
                    score++
                }
                //test for enemy collision
                if(emnyX == x && emnyY == y){
                    emnyX = randomIntFromInterval(0, 9)
                    emnyY = randomIntFromInterval(0, one.length)
                    score--
                    lives--
                    message.edit("You Took Damage From an Enemy! Your Score Is Now: "+score)
                }
                if(emn1X == x && emn1Y == y){
                    emn1X = randomIntFromInterval(0, 9)
                    emn1Y = randomIntFromInterval(0, one.length)
                    score--
                    lives--
                    message.edit("You Took Damage From an Enemy! Your Score Is Now: "+score)
                }
                if(emn2X == x && emn2Y == y){
                    emn2X = randomIntFromInterval(0, 9)
                    emn2Y = randomIntFromInterval(0, one.length)
                    score--
                    lives--
                    message.edit("You Took Damage From an Enemy! Your Score Is Now: "+score)
                }
                //render sprites
                intmap[coin0X][coin0Y] = "🪙"
                intmap[coin1X][coin1Y] = "🪙"
                intmap[coin2X][coin2Y] = "🪙"
                intmap[randX][randY] = "🦀"
                intmap[x][y] = "<:CSharp:992150277069217845>"
                intmap[emnyX][emnyY] = "🦈"
                intmap[emn1X][emn1Y] = "🦈"
                intmap[emn2X][emn2Y] = "🦈"
                //end if lives = 0
                if(lives == 0){
                    intmap[x][y] = "☠️"
                    y = 0
                    x = 0
                    score = 0
                    disabled = true
                    running = 0
                    lives = 3
                    message.reactions.removeAll()
                    message.edit("GAME OVER")
                }
                //make embed
                const embed = new DiscordJS.EmbedBuilder()
                    .setColor("Random")
                    .setTitle(`(${y},${x}), Score: ${score}, Lives: ${lives}, Player: ${user}`)
                    .setDescription(`${one.join("")}\n${two.join("")}\n${three.join("")}\n${four.join("")}\n${five.join("")}\n${six.join("")}\n${seven.join("")}\n${eight.join("")}\n${nine.join("")}\n${ten.join("")}`)
                message.edit({embeds:[embed]})
                const userReactions = message.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
                for (const reaction of userReactions.values()) {
                    reaction.users.remove(user.id);
                }
                }catch(e){
                    console.log(e)
                }
            });
        })
    }
       return message.channel.send("Another session is already running "+ running)
 }
}
