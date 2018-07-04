module.exports.run = async (bot, message, args) => {
	message.reply("I have sent the commands to your DMs.");
  message.author.send("List of commands. <> is a required argument and [] an optional argument.",
		     "All commands require the prefix a!",
		     "----Moderation Commands----",
		      "mute <user mention> - this mutes the mentioned user"
		     );
}

module.exports.help = {
	name: "help"
}
