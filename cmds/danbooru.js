request = require("request");
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
message.channel.send("Surely, please wait a moment");

    let tags = args.join("_");
    let tagsplit = tags.split('_|_');
    let tag1 = tagsplit[0];
    let tag2 = tagsplit[1];
	let tagurl = `https://danbooru.donmai.us/posts.json?random=true&limit=1&tags=`;
	if(!tagsplit[1]){
		tagurl = `https://danbooru.donmai.us/posts.json?random=true&limit=1&tags=${tag1}`;
	}else{
		tagurl = `https://danbooru.donmai.us/posts.json?random=true&limit=1&tags=${tag1}+${tag2}`;
	}

    request({
      url: tagurl,
      json: true
    }, function (err, temp, body) {
      if (!err && body.length > 0 && body[0].file_url) {
	      let danpost = new Discord.RichEmbed()
          .setImage(body[0].file_url)
          .setDescription("Here you go~")
          .setColor(0x00B28C)
	  message.channel.send({embed: danpost});
      } else {
        message.channel.send("I'm sorry, the camera is broken");
        console.log(err);
        console.log(body);
      }
});
}

module.exports.help = {
	name: "danbooru"
}
