module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send("Preparing Meme");

	let memetext = args.join("_");
	let memelink = `https://memegen.link/mordor/one_does_not_simply/${memetext}.jpg`
	await message.channel.send({files: [memelink]});

	msg.delete();
}

module.exports.help = {
	name: "mordor"
}