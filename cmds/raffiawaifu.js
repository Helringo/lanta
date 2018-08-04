request = require("request");
module.exports.run = async (bot, message, args) => {
message.channel.send("Surely, please wait a moment");
    
    
    function randomIntFromInterval(min,max)	
{
    Math.floor(Math.random()*(max-min+1)+min);
}
	var waifArray = new Array();
	waifArray[0] = 'angelise_ikaruga_misurugi';
	waifArray[1] = 'yaya_%28machine-doll%29';
	waifArray[2] = 'satellizer_el_bridget';
	waifArray[3] = 'izetta';
	waifArray[4] = 'toujou_koneko';
	waifArray[5] = 'rory_mercury';
	waifArray[6] = 'zero_two_%28darling_in_the_franxx%29';
	waifArray[7] = '001_%28darling_in_the_franxx%29';
	waifArray[8] = 'rachnera_arachnera';
	waifArray[9] = 'papi_%28monster_musume%29';
	waifArray[10] = 'miia_%28monster_musume%29';
	waifArray[11] = 'lala_%28monster_musume%29';

let randowaif = Math.floor(Math.random() * 12);
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
	name: "raffiawaifu"
}
