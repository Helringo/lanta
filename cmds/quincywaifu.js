request = require("request");
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
message.channel.send("Surely, please wait a moment");
    
    
    function randomIntFromInterval(min,max)	
{
    Math.floor(Math.random()*(max-min+1)+min);
}
	var waifArray = new Array();
	waifArray[0] = 'nero_claudius_%28fate%29_%28all%29';
	waifArray[1] = 'okita_souji_%28fate%29';
	waifArray[2] = 'miyamoto_musashi_%28fate%2Fgrand_order%29';
	waifArray[3] = 'ereshkigal_%28fate%2Fgrand_order%29';
	waifArray[4] = 'belfast_%28azur_lane%29';
	waifArray[5] = 'nanami_chiaki';
	waifArray[6] = 'tsumiki_mikan';
	waifArray[7] = 'noire';
	waifArray[8] = 'neptune_%28neptune_series%29';
	waifArray[9] = 'nepgear';

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
	name: "quincywaifu"
}
