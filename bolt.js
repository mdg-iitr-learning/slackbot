const { App } = require('@slack/bolt');
const dotenv=require('dotenv')
dotenv.config()
// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.MBOT_TOKEN,
  signingSecret: process.env.MSLACK_SIGNING_TOKEN,
  socketMode: true, // add this
  appToken: process.env.MSLACK_APP_TOKEN 

});
app.message('mega', async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  console.log(message)
  if (message.subtype === undefined || message.subtype === 'bot_message') {
  await say(message.text.replace('mega',''));
  }
});
(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
