module.exports.run = async (bot, message, args) => {
	function randomIntFromInterval(min,max)	
{
    Math.floor(Math.random()*(max-min+1)+min);
}
	var imgArray = new Array();
	imgArray[0] = 'https://cdn.weeb.sh/images/BkZngAYtb.gif';
	imgArray[1] = 'https://cdn.weeb.sh/images/HkQs_dXPZ.gif';
	imgArray[2] = 'https://cdn.weeb.sh/images/BJCCd_7Pb.gif';
	imgArray[3] = 'https://cdn.weeb.sh/images/SywetdQvZ.gif';
	imgArray[4] = 'https://cdn.weeb.sh/images/B1wRd_XP-.gif';
	imgArray[5] = 'https://cdn.weeb.sh/images/r1b9d_QPW.gif';
	imgArray[6] = 'https://cdn.weeb.sh/images/Hk0yFumwW.gif';
	imgArray[7] = 'https://cdn.weeb.sh/images/ry6o__7D-.gif';

	let randopic = Math.floor(Math.random() * 8);
	let hugger = message.author.username;
	let huggee = message.mentions.users.last().username;
	if(!huggee){
		return message.channel.send(`Aww... hugging yourself, huh? Let me give you one :uwuhug:`);

}else{
	message.channel.send(`${hugger} gives a hug to ${huggee} :heart:`, {files: [imgArray[randopic]]});
}
}

module.exports.help = {
	name: "pat"
}
