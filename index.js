const Discord = require("discord.js");
const bot = new Discord.Client();

bot.login(process.env.BOT_TOKEN)

bot.on("guildMemberAdd", user =>{
    user.guild.channels.get("630116206216478740").send("Bienvenue " + user + " sur le serveur " + user.guild.name + " ! :yum: :man_dancing:" )
});

bot.on('message', msg => {
    if (msg.content === 'help') {
      msg.reply('pong');
    }
  });
