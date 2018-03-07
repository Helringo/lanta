module.exports.run = async (bot, message, args) => {
	const thonk = bot.emojis.find("name", "remthonk");
	const thonk2 = bot.emojis.find("name", "NatsukiTHONK");
	const thonk4 = bot.emojis.find("name", "sayothonk");
	const thonk5 = bot.emojis.find("name", "Thonk");
	const thonk6 = bot.emojis.find("name", "hyperthonk");
	const thonk7 = bot.emojis.find("name", "illyaTHONK");
	const thonk8 = bot.emojis.find("name", "MordyThonk");
   message.channel.send(`${thonk} ${thonk2} ${thonk4} ${thonk5} ${thonk6} ${thonk7} ${thonk8}`);
}
module.exports.help = {
	name: "thonk"
}
