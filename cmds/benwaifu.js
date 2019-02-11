request = require("request");
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
message.channel.send("Surely, please wait a moment");
    
    
    function randomIntFromInterval(min,max)	
{
    Math.floor(Math.random()*(max-min+1)+min);
}
	var waifArray = new Array();
	waifArray[0] = 'saber';
	waifArray[1] = 'yorha_type_a_no._2';
	waifArray[2] = 'narmaya_%28granblue_fantasy%29';
	waifArray[3] = 'lyndis_%28fire_emblem%29';
	waifArray[4] = 'd.va_%28overwatch%29';
	waifArray[5] = 'caster';
	waifArray[6] = 'widowmaker_%28overwatch%29';
	waifArray[7] = 'frankenstein%27s_monster_%28fate%29';
	waifArray[8] = 'niijima_makoto';
	waifArray[9] = 'helena_blavatsky_%28fate%2Fgrand_order%29';
	waifArray[10] = 'miyamoto_musashi_%28fate%2Fgrand_order%29';
	waifArray[11] = 'nanami_chiaki';
	waifArray[12] = 'takeba_yukari';
	waifArray[13] = 'consort_yu_%28fate%29':

let randowaif = Math.floor(Math.random() * 14);
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
	name: "benwaifu"
}
