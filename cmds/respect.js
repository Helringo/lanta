module.exports.run = async (bot, message, args) => {
	let user = message.author.username;
	message.channel.send(`${user} has paid their respects :heart:`);
}

module.exports.help = {
	name: "respect"
}