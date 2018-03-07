module.exports.run = async (bot, message, args) => {
	const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
  message.channel.send(emojiList);
}

module.exports.help = {
	name: "emoji"
}