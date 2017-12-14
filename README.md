# discord2groupme
With the power of monkeys and typewriters, anything is possible no matter how badly it's coded.

1. Make a groupme bot and a discord bot. I recommend your groupme bot's name be one character long to make more room for the 140 character text message limit if you use groupme's SMS mode a lot.

2. Make a discord webhook to the channel you want messages to be posted to

3. Edit config.json with...

- The token of your discord bot
- the id of your groupme bot
- your discord ID, so your own sent messages don't get posted back to the groupme chat.
- the discord channel id you want the discord bot to listen on, which should be the same as the webhook you're posting to.
- the URL of your discord webhook.
- Your groupme user ID so all other messages are ignored. (Currently the link is designed for one person in groupme, although it's very possible for more.)

4. Install discord.js and request for node, then json and requests for python.

5. Start discordhook with node and groupmehook with python.

## Extra Info

Discord names will be shortened to 7 characters on groupme to better fit within 140 characters.

## Questions

Q: Why webhooks?

A: It's easy. It also enables you to use custom avatars and usernames on Discord if you have multiple groupme users. (Unfortunately, it doesn't work the other way around.)

Q: Why are you using two different programming languages?

A: I took the easiest tutorial on an http POST listener and the easiest tutorial on a discord bot and threw them together to create this.
