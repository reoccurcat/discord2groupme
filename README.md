# discord2groupme
With the power of monkeys and typewriters, anything is possible no matter how badly it's coded.

1. Make a groupme bot and a discord bot. I recommend your groupme bot's name be one character long to make more room for the 140 character text message limit if you use groupme's SMS mode a lot.

2. Make a discord webhook to the channel you want messages to be posted to

3. Edit config.json with...

- discord_token: The token of your discord bot
- discord_id: your discord ID, so your own sent messages on discord don't get posted back to the groupme chat.
- discord_channel_id: the discord channel id you want the discord bot to listen on, which should be the same as the webhook you're posting to.
- discord_webhook_url: the URL of your discord webhook.
- groupme_user_id & allow_all: set allow_all to true if you want any user in a GroupMe chat to talk to discord users, otherwise put in your GroupMe ID in the groupme_user_id field. If you don't know your user ID, leave it blank and keep going. Step 6 will tell you how to find it.
- groupme_token: The access token you can get from the top right of https://dev.groupme.com/bots/
- groupme_bot_id: The ID of the GroupMe bot you created.

4. Install discord.js and request for node, then requests for python. (Run these commands where you downloaded the files: `npm install discord.js`, `npm install request`, `pip3 install requests`)

5. Start discordhook with node and groupmehook with python. (`python3 groupmehook.py` and `node discordhook.js`) (Windows users: use `python` instead of `python3`.)

6. (Only if allow_all is false) send a message on GroupMe. The console of the GroupMe hook will show the ID of whoever posted the message, so you can paste this into the groupme_user_id field.

## Extra Info

Discord names will be shortened to 7 characters on groupme to better fit within 140 characters.

Nicknames and avatars from GroupMe will work in Discord.

Images posted to Discord will be posted to GroupMe and vice versa.

## Questions

Q: Why webhooks?

A: It's easy. It also enables you to use custom avatars and usernames on Discord. (Unfortunately, it doesn't work the other way around.)

Q: Why are you using two different programming languages?

A: I took the easiest tutorial on an http POST listener and the easiest tutorial on a discord bot and threw them together to create this.

Q: I get `node SyntaxError: missing ) after argument list` when I use the Discord hook.

A: Update node.js.

Q: I get ` OSError: [Errno 98] Address already in use` when I use GroupMe hook.

A: Port 80 is already in use. Specify a different one as an argument. (ex. `python3 groupmehook.py 6666` for port 6666.)

Q: I get ` OSError: [WinError 10013] An attempt was made to access a socket in a way forbidden by its access permissions` when I use GroupMe hook.

A: Port 80 may be [restricted by your OS](https://unix.stackexchange.com/questions/16564/why-are-the-first-1024-ports-restricted-to-the-root-user-only) or already in use. You can either start the program with admin/root or specify one above 1024 as an argument.

## I need help!

If you have read through the entire guide, the questions, the issues, and more... Make an issue and I will help you out.
