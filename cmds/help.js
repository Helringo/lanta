const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	message.reply("I have sent the commands to your DMs.");
	
  let embed = new Discord.RichEmbed()
    .setDescription("<> means the argument is required, [] means optional")
    .setColor("#00B28C")
    .setAuthor("Atalanta")
    .addField("---- Moderation Commands ----", "The following commands are used to moderate your server/channel.")
    .addField("mute <user mention>", "Mutes the mentioned user")
    .addField("purge <number of messages>", "Deletes the specified number of messages")
    .addField("---- Utility Commands ----", "The following commands provide various useful things.")
    .addField("avatar [mention]", "Returns the profile picture of the mentioned user\nIf no user is mentioned, the profile picture of the author is given")
    .addField("icon", "Returns the server icon")
    .addField("userinfo [mention]", "Lists various info about the mentioned user or the author")
    .addField("---- Fun Commands ----", "The main purpose of these commands is to liven up the server~")
    .addField("selfie", "I will try to take a selfie and show it off to everyone~\nCan contain NSFW pictures!")
    .addField("neko", "I will try and send a picture of cute (or lewd) catgirls~!")
    .addField("bless", "I'll bestow my blessing on you~!")
    .addField("praise", "Praise the Sun!")
    .addField("say", "Make me say something!")
    .addField("hug <mention>", "Give a hug to the mentioned user!")
    .addField("drake <first panel text> | <second panel text>", "I'll generate the Drake meme!")
    .addField("mordor <text>", "One does not simply use this command.")
    .addField("loli [mention]", "So you want lolis, huh?")
    .addField("respect", "Press F to pay respects")
    .addField("rate <content>", "Have me rate something or someone!")
    .addField("dance", "I'll dance for you~!")
    .addField("dex <Pokemon name>", "I'll consult my Pokedex for you! Mega Evolutions are also supported.");
    
	message.author.send({embed: embed});
}

module.exports.help = {
	name: "help"
}
