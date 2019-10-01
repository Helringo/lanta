module.exports.run = async (bot, message, args) => {
	function randomIntFromInterval(min,max)
{
    Math.floor(Math.random()*(max-min+1)+min);
}
	let choices = Math.floor(Math.random() * args+1);
	let choice = args[choices];
	if(!choice){
		return message.channel.send("I can't choose nothing");
}
	message.channel.send(`I pick ${choice}`);

}

module.exports.help = {
	name: "choose"
}
