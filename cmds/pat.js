module.exports.run = async (bot, message, args) => {
	function randomIntFromInterval(min,max)	
{
    Math.floor(Math.random()*(max-min+1)+min);
}
	var imgArray = new Array();
	imgArray[0] = 'https://cdn.weeb.sh/images/ryV2k1tP-.gif';
	imgArray[1] = 'https://cdn.weeb.sh/images/HkZqkyFvZ.gif';
	imgArray[2] = 'https://cdn.weeb.sh/images/ryLKqTVCW.gif';
	imgArray[3] = 'https://cdn.weeb.sh/images/r1AsJ1twZ.gif';
	imgArray[4] = 'https://cdn.weeb.sh/images/rkZbJAYKW.gif';
	imgArray[5] = 'https://cdn.weeb.sh/images/HyWlxJFvb.gif';
	imgArray[6] = 'https://cdn.weeb.sh/images/HJGQlJYwb.gif';
	imgArray[7] = 'https://cdn.weeb.sh/images/BJp1lyYD-.gif';
	imgArray[8] = 'https://cdn.weeb.sh/images/ryh6x04Rb.gif';
	imgArray[9] = 'https://cdn.weeb.sh/images/H1jgekFwZ.gif';
	imgArray[10] = 'https://cdn.weeb.sh/images/H1s5hx0Bf.gif';
	imgArray[11] = 'https://cdn.weeb.sh/images/ryXj1JKDb.gif';
	imgArray[12] = 'https://cdn.weeb.sh/images/SJS1lyYwW.gif';
	imgArray[13] = 'https://cdn.weeb.sh/images/B1D9J1tvZ.gif';
	imgArray[14] = 'https://cdn.weeb.sh/images/SJva1kFv-.gif';
	imgArray[15] = 'https://cdn.weeb.sh/images/r1Y5L6NCZ.gif';
	imgArray[16] = 'https://cdn.weeb.sh/images/BJnD9a4Rb.gif';

	let randopic = Math.floor(Math.random() * 17);
	let patter = message.author.username;
	let pattee = message.mentions.users.last().username;
	if(!pattee){
		return message.channel.send(`Aww... hugging yourself, huh? Let me give you one :uwuhug:`);

}else{
	message.channel.send(`${patter} gives a hug to ${pattee} :heart:`, {files: [imgArray[randopic]]});
}
}

module.exports.help = {
	name: "pat"
}
