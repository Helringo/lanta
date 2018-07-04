module.exports.run = async (bot, message, args) => {
	  message.delete();
    const fetched = await message.channel.fetchMessages({limit: args[0]});
    message.channel.bulkDelete(fetched);
    //.catch(error => message.channel.send(`Error: ${error}`));
}
module.exports.help = {
	name: "purge"
}
