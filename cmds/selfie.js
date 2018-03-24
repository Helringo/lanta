request = require("request");
module.exports.run = async (bot, message, args) => {
message.channel.send("Surely, please wait a moment");
    request({
      url: 'https://safebooru.donmai.us/posts.json?random=true&limit=1&tags=atalanta_%28fate%29',
      json: true
    }, function (err, temp, body) {
      if (!err && body.length > 0 && body[0].file_url) {
	      try{
    await message.channel.send("Here you go", {files: [body[0].file_url]});
  } catch(error) {//here goes if someAsyncPromise() rejected}
    return message.channel.send("Sorry, something went wrong.");
  });    
      } else {
        message.channel.send("I'm sorry, the camera is broken");
        console.log(err);
        console.log(body);
      }
});
}

module.exports.help = {
	name: "selfie"
}
