module.exports.run = async (bot, message, args) => {
	function randomIntFromInterval(min,max)
{
    Math.floor(Math.random()*(max-min+1)+min);
}
	let rating = Math.floor(Math.random() * 11);
	let toRate = args[0];
	if(!toRate){
		return message.channel.send("I can't rate nothing.");
}
	message.channel.send(`I'd rate ${args.join(" ")} a ${rating} out of 10.`);

}

module.exports.help = {
	name: "rate"
}