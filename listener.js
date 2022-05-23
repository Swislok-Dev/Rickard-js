const Functions = require('./Functions')
function onMessage(message) {
  if (message.author.bot) return

  message.content = message.content.toLowerCase()
  switch (message.content) {
    case 'hello':
      message.channel.send(`Hello ${message.author.username}`)
      break
    case '$ping':
      message
        .reply('pong')
        .then((message) => {
          setTimeout(() => message.delete(), 5000)
        })
        .then(console.log('We just got pinged!!!'))
      break
    case 'inspire':
      Functions.getQuote().then((quote) => message.channel.send(quote))
      break
    default:
      break
  }
}

module.exports = { onMessage }
