module.exports.run = async (bot, message, args) => {
	message.reply("I have sent the commands to your DMs.");
  message.author.send("List of commands goes here.");
}

module.exports.help = {
	name: "help"
}
