module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send("Preparing blessing~!");

	await message.channel.send("Smolanta blesses all the sleeps :green_heart:", {files: ["https://i.imgur.com/yVoov1w.jpg"]});

	msg.delete();
}

module.exports.help = {
	name: "bless"
}
