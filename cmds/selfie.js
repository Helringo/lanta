request = require("request");
module.exports.run = async (bot, message, args) => {
message.channel.send("Surely, please wait a moment");
    request({
      url: 'https://safebooru.donmai.us/posts.json?random=true&limit=1&tags=atalanta_%28fate%29',
      json: true
    }, function (err, temp, body) {
      if (!err && body.length > 0 && body[0].file_url) {
        selfie = {
          image: { url: "https://safebooru.donmai.us" + body[0].file_url },
          description: "Here you go",
          color: 0xff0000
        }
        message.channel.send("", { embed: selfie });
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
