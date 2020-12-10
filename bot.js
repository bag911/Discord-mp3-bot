const Discord = require('discord.js');
const bot = new Discord.Client();
const {OpusEncoder} = require('@discordjs/opus')

let cfg = require('./botconfig.json')
let token = cfg.token;
let prefix = cfg.prefix;

bot.login(token);

// bot.on('ready', () => {
//   console.log(`Logged in as ${bot.user.username}!`);
//   bot.generateInvite(["ADMINISTRATOR"]).then(link=>{
//       console.log(link);
//   })
// });

bot.on('message',async message =>{
    if(!message.guild) return;
    
    if(message.content ==='/hit'){
        if(message.member.voice.channel){
            const connection = await message.member.voice.channel.join();
            connection.play('hit.mp3')
        }
        else{
            message.reply('Твою мать!')
        }
    }

})

bot.on('message',async message =>{
    if(!message.guild) return;
    
    if(message.content ==='/nih'){
        if(message.member.voice.channel){
            const connection = await message.member.voice.channel.join();
            connection.play('Nih.mp3')
        }
        else{
            message.reply('Твою мать!')
        }
    }


})

bot.on('message',async message =>{
    if(!message.guild) return;
    
    if(message.content ==='/leave'){
        if(message.member.voice.channel){
            const connection = await message.member.voice.channel.join();
        }
        else{
            message.reply('Твою мать!')
        }
    }
})

