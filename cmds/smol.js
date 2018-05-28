module.exports.run = async (bot, message, args) => {
		let smol = message.mentions.users.last().username;
	if(!smol){
		return message.channel.send(`I'm not smol, I protect the smols.`);

}else{
	message.channel.send(`${smol} a smol`);
}

}

module.exports.help = {
	name: "smol"
}
