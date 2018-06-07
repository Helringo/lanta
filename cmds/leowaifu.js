request = require("request");
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

let randowaif = Math.floor(Math.random() * 8);
let waiftag = waifArray[randowaif];
let waifurl = `https://danbooru.donmai.us/posts.json?random=true&limit=1&tags=${waiftag}`;
    
    
    request({
      url: waifurl,
      json: true
    }, function (err, temp, body) {
      if (!err && body.length > 0 && body[0].file_url) {
	      try{
    message.channel.send("Here you go", {files: [body[0].file_url]});
  } catch(error) {//here goes if someAsyncPromise() rejected}
    return message.channel.send("Sorry, something went wrong.");
  };    
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
