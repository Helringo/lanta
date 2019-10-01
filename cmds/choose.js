module.exports.run = async (bot, message, args) => {
	function randomIntFromInterval(min,max)
{
    Math.floor(Math.random()*(max-min+1)+min);
}
	let length = args.length();
	let choices = Math.floor(Math.random() * length+1);
	let choice = args[choices];
	if(!choice){
		return message.channel.send("I can't choose nothing");
}
	message.channel.send(`I pick ${choice}`);

}

module.exports.help = {
	name: "choose"
}
