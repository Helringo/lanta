module.exports.run = async (bot, message, args) => {
	let id = message.author.id;
	let newStatus = args;
	if(id == "246397316209180672"){
		return bot.user.setPresence({game: { name: args.join(" "), type: 0 }});
	}
	message.channel.send("Only my husband can change my status");

}

module.exports.help = {
	name: "status"
}