var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

 if(message.author.id != "584438848034177027" && message.channel.id === "584438198927884299"){
        if(msg.startsWith('!', 0)){
            if(msg === prefix + "bang" && message.channel.id === "584438198927884299"){
                message.channel.send('!rg') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand !rg right now. More will be added when my creator is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '!' dot.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
