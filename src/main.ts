import 'dotenv/config'
import { RTMClient } from '@slack/rtm-api'

const botToken = process.env['SLACK_BOT_USER_TOKEN'];

async function start () {
  if (!botToken) {
    console.log('SLACK_BOT_USER_TOKEN is not set')
    return
  }

  const rtm = new RTMClient(botToken)
  await rtm.start()

  console.log('Starter Bot connected and running!')

  rtm.on('message', async (event) => {
    const { bot_id, subtype, text, channel, ts } = event
    const tagCode = text && text.split(' ')[0]

    // Logging message
    console.log('=== event', event)

    if (!tagCode) {
      return
    }

    if (!bot_id && !subtype && tagCode.includes('>')) {
      // Extracting message sent by the user on Slack
      const messageText = text.split('>')[1].trim()
      if (messageText) {
        console.log('=== messageText')
      }
    }
  })
}

start()
