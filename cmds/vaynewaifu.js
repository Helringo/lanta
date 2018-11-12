request = require("request");
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
message.channel.send("Surely, please wait a moment");
    
    
    function randomIntFromInterval(min,max)	
{
    Math.floor(Math.random()*(max-min+1)+min);
}
	var waifArray = new Array();
	waifArray[0] = 'iris_amicitia';
	waifArray[1] = 'blanc';
  	waifArray[2] = 'white_heart';
	waifArray[3] = 'bowsette';

let randowaif = Math.floor(Math.random() * 4);
let waiftag = waifArray[randowaif];
let rating = args.join("_");
let waifurl = `https://danbooru.donmai.us/posts.json?random=true&limit=1&tags=${waiftag}+rating:explicit`;
	if(rating === "sfw"){
	waifurl = `https://danbooru.donmai.us/posts.json?random=true&limit=1&tags=${waiftag}+rating:safe`;	
	}else{
	waifurl = `https://danbooru.donmai.us/posts.json?random=true&limit=1&tags=${waiftag}+rating:explicit`;	
}
    
    
    request({
      url: waifurl,
      json: true
    }, function (err, temp, body) {
      if (!err && body.length > 0 && body[0].file_url) {
	  let waifu = new Discord.RichEmbed()
          .setImage(body[0].file_url)
          .setDescription("Here you go~")
          .setColor(0x00B28C)
	  message.channel.send({embed: waifu});
      } else {
        message.channel.send("I'm sorry, the camera is broken");
        console.log(err);
        console.log(body);
      }
});
}

module.exports.help = {
	name: "vaynewaifu"
}
