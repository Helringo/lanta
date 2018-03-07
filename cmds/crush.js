module.exports.run = async (bot, message, args) => {
	let firstUser = message.guild.member(message.mentions.users.first());
	let secondUser = message.guild.member(message.mentions.users.last());
	if(!firstUser || !secondUser || firstUser == secondUser) return message.channel.send("This command needs two users.");
	message.channel.send(`Aww,${firstUser} has a crush on ${secondUser} :heart:`)
}

module.exports.help = {
	name: "crush"
}