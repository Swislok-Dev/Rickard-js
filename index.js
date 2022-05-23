// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js')
require('dotenv').config()
const listener = require('./listener')

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

// respond to message
client.on('messageCreate', (message) => {
  listener.onMessage(message)
})

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN)
