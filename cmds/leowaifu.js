request = require("request");
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
message.channel.send("Surely, please wait a moment");
    
    
    function randomIntFromInterval(min,max)	
{
    Math.floor(Math.random()*(max-min+1)+min);
}
	var waifArray = new Array();
	waifArray[0] = 'toosaka_rin';
	waifArray[1] = 'ishtar_%28fate/grand_order%29';
	waifArray[2] = 'tiamo';
	waifArray[3] = 'homura_%28xenoblade_2%29';
	waifArray[4] = 'wayu_%28fire_emblem%29';
	waifArray[5] = 'shuten_douji_%28fate%2Fgrand_order%29';
	waifArray[6] = 'oda_nobunaga_%28fate%29';
	waifArray[7] = 'sakura_futaba';
	waifArray[8] = 'kairi_%28kingdom_hearts%29';
	waifArray[9] = 'ibaraki_douji_%28fate%2Fgrand_order%29';

let randowaif = Math.floor(Math.random() * 10);
let waiftag = waifArray[randowaif];
let waifurl = `https://danbooru.donmai.us/posts.json?random=true&limit=1&tags=${waiftag}`;
    
    
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
	name: "leowaifu"
}
