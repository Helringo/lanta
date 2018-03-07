module.exports.run = async (bot, message, args) => {
	//let cop = message.author;
	//let offender = message.mentions.users.last().username;
	let target = message.mentions.users.first() || message.author;
	if(!target){
		return message.channel.send(`:oncoming_police_car: You've been added to the FBI watchlist :oncoming_police_car: `);

}else{
	message.channel.send(`:oncoming_police_car: ${target} has been added to the FBI watchlist :oncoming_police_car: `, {files: ["http://i0.kym-cdn.com/photos/images/original/001/222/622/aaf.jpg"]});
}
}

module.exports.help = {
	name: "loli"
}