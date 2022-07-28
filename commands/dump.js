const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")
const botConfig = require("../config.json")
const discord = require("discord.js")

module.exports = {
        Name: "dump",
        Usage: `${botConfig.prefix}dump`,
        Arguments: "",
        Type: "Utility",
        Permissions: [],
        Invoke(client, message, args, cmd) {
            const dump = [] // Get the right server                                                      
            const guild = client.guilds.cache.get(message.guild.id);
            var usrs = ""
            // Fetch and get the list named 'members'
            guild.members.fetch().then(members => { // Loop through every members
                    members.forEach(member => {
                        // Do whatever you want with the current member                                
                        var info = member.user.tag+"("+member.user.id+")"                              
                        dump.push(info)                                                                
                        console.log(dump)                                                            
             });                                                                            
                        for(i=0; i<dump.length; i++){                                                   
                          usrs+=dump[i]+"\n"                                                            
                        }                                                                              
                        const users = new discord.EmbedBuilder()
                        users.setTitle(message.guild.name) 
                        users.setDescription(usrs)
                        users.setThumbnail(message.guild.iconURL()) 
                        users.setFooter({ text: message.author.username })
                        users.setColor("BLUE") 
                        users.setTimestamp()
                        message.reply({ embeds: [users] })
                    });
                }
            }
