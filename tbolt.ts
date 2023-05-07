import { App } from '@slack/bolt'
import dotenv from 'dotenv'
dotenv.config()
//getting tokens from enviroment variables
const app = new App({
    token: process.env.MBOT_TOKEN,
    signingSecret: process.env.MSLACK_SIGNING_TOKEN,
    socketMode: true, // add this
    appToken: process.env.MSLACK_APP_TOKEN 
  
  });
  app.use(async ({ next }) => {
    await next();
  });
  app.message('mega', async ({ message, say }) => {
      // say() sends a message to the channel where the event was triggered
      if (message.subtype === undefined || message.subtype === 'bot_message') {
      const toSend={
        value:message.text?.replace(/mega/,'')
      }
      await say({
        text:toSend.value      
      });
      }
    });
  (async () => {
      // Start your app
      await app.start(process.env.PORT || 3000);
    
      console.log('⚡️ Bolt app is running!');
  })();