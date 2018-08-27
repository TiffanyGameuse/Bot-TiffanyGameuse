const Discord = require('discord.js');
var bot = new Discord.Client();
var prefix = (":::");


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[:::help bot By TaRex]', tipe: 0} });
    console.log("Le TaRex BotV4 est ok hacked by TaRex XD bot by TaRex :) !");
});

bot.login();

bot.on('message', message => {
    if(message.content === ":::TaRex"){
        message.reply("ses un bg TaRex :)")
        console.log(':::TaRex');
    }
if(message.content === prefix + "infodiscord") {
        var embed = new Discord.RichEmbed()
        .addField("Nom du discord", message.guild.name)
        .addField("Quand le discord à été crée", message.guild.createdAt)
        .addField("Tu as rejoin infisiaRP le", message.member.joinedAt)
        .addField("Utilisateur sur le discord", message.guild.memberCount)
        .setColor("#00F710")
    message.channel.sendEmbed(embed)

    }

    if (message.content.startsWith(prefix + "sondage")) {
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join (" ")
        var embed = new Discord.RichEmbed()
            .setDescription("SONDAGE! :)")
            .addField(thingToEcho, "répondre avec :heavy_check_mark: ou :x:")
            .setColor("#00F710")
            .setTimestamp()
        message.guild.channels.find("name", "sondage").sendEmbed(embed)
        .then(function (message) {
            message.react("✔")
            message.react("❌")
        }).catch(function() {
        });
        }else{
        }
            bot.on('message', message => {
                if (message.content === ':::help') {
                message.channel.sendMessage('les commandes du TaRex bot son :::TaRex :::infodiscord voilla :)');
              }
            });
            
})
