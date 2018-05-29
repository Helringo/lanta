module.exports.run = async (bot, message, args) => {
	const praise = bot.emojis.find("name", "praise");
	let target = message.author;
	if(!target){
		return message.channel.send(`Solaire praises the sun ${praise}`);
}else{
	message.channel.send(`${praise} ${target} has praised the sun ${praise}`, {files: ["https://cdn.discordapp.com/emojis/451150472624078868.png?v=1"]});
}
}

module.exports.help = {
	name: "praiseit"
}
