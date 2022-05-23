// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js')
const fetch = require('node-fetch')
require('dotenv').config()

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// Get random quote
function getQuote() {
  return fetch('https://zenquotes.io/api/random')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      return data[0]['q'] + ' -' + data[0]['a']
    })
}

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
      getQuote().then((quote) => msg.channel.send(quote))
      break
    default:
      break
  }
})

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN)
