module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send("Preparing Meme");
	let input = args.join("_");
	let liner = input.split('|');
	let line1 = liner[0];
	let line2 = liner[1];
	let memelink = `https://memegen.link/drake/${line1}/${line2}.jpg`
	await message.channel.send({files: [memelink]});

	msg.delete();
}

module.exports.help = {
	name: "drake"
}
