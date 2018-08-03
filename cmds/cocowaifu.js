request = require("request");
module.exports.run = async (bot, message, args) => {
message.channel.send("Surely, please wait a moment");
    
    
    function randomIntFromInterval(min,max)	
{
    Math.floor(Math.random()*(max-min+1)+min);
}
	var waifArray = new Array();
	waifArray[0] = 'kiyohime_%28fate%2Fgrand_order%29';
	waifArray[1] = 'minamoto_no_raikou_%28fate%2Fgrand_order%29';
	waifArray[2] = 'm4_sopmod_ii_%28girls_frontline%29';
	waifArray[3] = 'passion_lip';
	waifArray[4] = 'flandre_scarlet';
	waifArray[5] = 'elizabeth_bathory_%28fate%29_%28all%29';
	waifArray[6] = 'papi_%28monster_musume%29';
	waifArray[7] = 'penthesilea_%28fate%2Fgrand_order%29';
	waifArray[8] = 'seaport_hime';

let randowaif = Math.floor(Math.random() * 9);
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
	name: "cocowaifu"
}
