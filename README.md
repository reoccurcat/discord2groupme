# discord2groupme
With the power of monkeys and typewriters, anything is possible no matter how badly it's coded.

1. Make a groupme bot and a discord bot

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
