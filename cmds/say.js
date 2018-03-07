module.exports.run = async (bot, message, args) => {
	let toSay = args;
	if(!toSay){
		return message.channel.send("You need to tell me what to say.")
	}
	message.channel.send(toSay.join(" "));
	message.delete();

}

module.exports.help = {
	name: "say"
}