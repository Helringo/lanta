module.exports.run = async (bot, message, args) => {
		let cutie = message.mentions.users.last().username;
		let blush = bot.emojis.find("name", "Blush");
	if(!cutie){
		return message.channel.send(`You think I'm cute? ${blush}`);

}else{
	message.channel.send(`${cutie} a cute`);
}

}

module.exports.help = {
	name: "cute"
}