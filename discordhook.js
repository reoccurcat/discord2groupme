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
// config.token contains the bot's token
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
  if(message.author.id == config.discord_id || message.channel.id != config.discord_channel_id) return;
  
  //message.content is our message
  myJSONObject = {"text": `${message.author.username.substring(0,7)}|${message.content}`, "bot_id": config.groupme_bot_id}
  request({
    url: "https://api.groupme.com/v3/bots/post",
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
    }, function (error, response, body){
    //console.log(response);
  });
});

client.login(config.token);
           
