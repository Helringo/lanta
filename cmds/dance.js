module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send(":apple: Getting my apple ready :apple:");

	await message.channel.send("Dance time~", {files: ["https://img2.gelbooru.com/images/e8/ce/e8ceb06c1fdd39d9d04bf120ccd80912.gif"]});

	msg.delete();
}

module.exports.help = {
	name: "dance"
}
