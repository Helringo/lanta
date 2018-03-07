module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send(":apple: Getting my apple ready :apple:");

	await message.channel.send("Dance time~", {files: ["https://media.giphy.com/media/3o6fIRD9wEeSdRThSM/giphy.gif"]});

	msg.delete();
}

module.exports.help = {
	name: "dance"
}