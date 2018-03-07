module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send("Preparing blessing~!");

	await message.channel.send({files: ["https://i.imgur.com/yVoov1w.jpg"]});

	msg.edit("Smolanta blesses all the sleeps :green_heart:");
}

module.exports.help = {
	name: "bless"
}