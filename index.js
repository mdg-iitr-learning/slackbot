const SlackBot=require('slackbots')
const axios=require('axios')
const dotenv=require('dotenv')
dotenv.config()
const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'deca'
})

bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    bot.postMessageToChannel(
        'random',
        'Get inspired while working with @deca',
        params
    );
    
})
bot.on('message', (data) => {
  
    const params = {
        icon_emoji: ':male-technologist:'
    }
    if(data.type== 'desktop_notification'&&(data.title)=='deca') {
        
        bot.postMessageToChannel(
                data.subtitle.slice(1,),
                data.content.replace('@deca',''),
                params
            )
    }
   
})
bot.on('error',(err)=>{
    console.log(err)
})


