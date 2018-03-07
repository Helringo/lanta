const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let target = message.mentions.users.first() || message.author;
	let embed = new Discord.RichEmbed()
		.setAuthor(target.username)
		.setDescription("This is the user's info!")
		.setImage(target.displayAvatarURL)
		.setColor("#00B28C")
		.addField("Full Username", `${target.username}#${target.discriminator}`)
		.addField("ID", target.id)
		.addField("Created At", target.createdAt);

		message.channel.send({embed: embed});
}

module.exports.help = {
	name: "userinfo"
}