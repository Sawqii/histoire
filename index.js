const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login("NjI1MzY4OTg0NTM0OTA4OTI4.XZsUOA.KsHLXQx4fH5cfJhU7TMQbW1OnFc");

bot.on("guildMemberAdd", user =>{
    user.guild.channels.get("630116206216478740").send("Bienvenue " + user + " sur le serveur " + user.guild.name + " ! :yum: :man_dancing:" )
});

bot.on('message', msg => {
    if (msg.content === 'help') {
      msg.reply('pong');
    }
  });
