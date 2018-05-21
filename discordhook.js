// Load up the discord.js library
const Discord = require("discord.js");
//post message to groupme
const request = require("request");


// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.discord_token contains the discord bot's token
// config.groupme_token contains the token needed to upload images.
// config.groupme_id for the groupme bot's ID

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  // If it matches the owner in the config or it's a message from a channel that's other than in the config, ignore it.
  if(message.author.id == config.discord_id || message.channel.id != config.discord_channel_id) return;
  
  //message.content is our message.
  console.log(message.author.username + " sent: " + message.content)

  var myJSONObject;
  //If there's attachments... (IMAGES ONLY!!!)
  if (message.attachments.array().length > 0)
  {
  	if (config.groupme_token == "")
  	{
  		console.log("You don't have a groupme token set! You need this to upload images.")
  		return;
  	}
	var IMAGE_URL = message.attachments.array()[0].url
	var GM_TOKEN = config.groupme_token;
	
	console.log(IMAGE_URL);
	if (!IMAGE_URL.endsWith(".png") && !IMAGE_URL.endsWith(".jpg"))
	{
		console.log("Uploaded file was not a jpg or png image, ignoring.");
		return;
	}
	console.log("Reuploading image to GroupMe.");
	//Upload image to groupme
	//I hate JavaScript. Just let me do my stupid programming syncronously so I don't have to spend 1000 hours figuring out why it won't work

	var headers = {
		'X-Access-Token': GM_TOKEN,
		'Content-Type': 'image/jpeg'
	};

	var requestSettings = {
		method: "GET",
		url: IMAGE_URL,
		encoding: null

	};
	//Wow it's like I'm playing line rider
	request(requestSettings,
		function(err, response, buffer)
		{
			var options = {
				url: 'https://image.groupme.com/pictures',
				method: 'POST',
				headers: headers,
				body: response.body
			};
			
			request(options,
				function(error, response, body)
				{
					if (!error && response.statusCode == 200)
					{
						var res = JSON.parse(body)
						//console.log();
						console.log(res['payload']['picture_url']);
						//Make JSON to send newly uploaded image in a message to GroupMe.
						var myJSONObject = {
							"text": `${message.author.username.substring(0,7)}|${message.content}`,
							"bot_id": config.groupme_bot_id,
							"attachments": [
								{
									"type": "image",
									"url" : res['payload']['picture_url']
								}
							]
						}
						request({
							url: "https://api.groupme.com/v3/bots/post",
							method: "POST",
							json: true,   // <--Very important!!!
							body: myJSONObject
							}, function (error, response, body){
							//console.log(response);
						  });
					}
					else
					{
						console.log("ERROR " + response.statusCode)
					}
				})
			}
	);
  }
  else
  {	
	  var myJSONObject = {"text": `${message.author.username.substring(0,7)}|${message.content}`, "bot_id": config.groupme_bot_id}
	  request({
		url: "https://api.groupme.com/v3/bots/post",
		method: "POST",
		json: true,   // <--Very important!!!
		body: myJSONObject
		}, function (error, response, body){
		//console.log(response);
	  });
  }
});

client.login(config.discord_token);
		   
