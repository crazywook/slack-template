import { WebClient } from '@slack/web-api'

describe('sendSlackMessage', () => {
  it('should send a message to the slack channel', async () => {

    const slackMessage = 'Hello World'
    const slackWebhookUrl = 'https://hooks.slack.com/services/XXXXX/XXXXX/XXXXX'

    // const slackSender = new SlackSender(slackWebhookUrl)
    // const result = await slackSender.sendSlackMessage(slackMessage)

    expect(result).toBe(true)
  })
})