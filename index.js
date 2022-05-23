// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js')
require('dotenv').config()
const Functions = require('./Functions')

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// respond to message
client.on('messageCreate', (msg) => {
  if (msg.author.bot) return

  switch (msg.content) {
    case 'hello':
      msg.channel.send(`Hello ${msg.author.username}`)
      break
    case 'ping':
      msg
        .reply('pong')
        .then((msg) => {
          setTimeout(() => msg.delete(), 5000)
        })
        .then(console.log('We just got pinged!!!'))
      break
    case '$inspire':
      Functions.getQuote().then((quote) => msg.channel.send(quote))
      break
    default:
      break
  }
})

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN)
