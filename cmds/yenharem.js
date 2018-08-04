request = require("request");
module.exports.run = async (bot, message, args) => {
message.channel.send("Surely, please wait a moment");
    
    
    function randomIntFromInterval(min,max)	
{
    Math.floor(Math.random()*(max-min+1)+min);
}
	var waifArray = new Array();
	waifArray[0] = 'krom';
	waifArray[1] = 'kitagawa_yuusuke';
	waifArray[2] = 'lucifer_%28shingeki_no_bahamut%29';
	waifArray[3] = 'sandalphon_%28granblue_fantasy%29';
	waifArray[4] = 'vane_%28granblue_fantasy%29';
	waifArray[5] = 'lancelot_%28granblue_fantasy%29';
  waifArray[6] = 'percival_%28granblue_fantasy%29';
  waifArray[7] = 'soleil_%28fire_emblem_if%29';

let randowaif = Math.floor(Math.random() * 8);
let waiftag = waifArray[randowaif];
let waifurl = `https://danbooru.donmai.us/posts.json?random=true&limit=1&tags=${waiftag}`;
    
    
    request({
      url: waifurl,
      json: true
    }, function (err, temp, body) {
      if (!err && body.length > 0 && body[0].file_url) {
	  waifu = {
          image: { url: body[0].file_url },
          description: "Here you go~",
          color: 0x00B28C
        }
	message.channel.send("", { embed: waifu });
      } else {
        message.channel.send("I'm sorry, the camera is broken");
        console.log(err);
        console.log(body);
      }
});
}

module.exports.help = {
	name: "yenharem"
}
