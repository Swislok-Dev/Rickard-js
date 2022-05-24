const fetch = require('node-fetch')

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

function getPing(message) {
  let latency = `Latency is ${message.createdTimestamp - Date.now()}ms.`
  console.log(`Latency is ${message.createdTimestamp - Date.now()}ms.`)
  return latency
}

module.exports = {
  getQuote,
  getPing,
}
