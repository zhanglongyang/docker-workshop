const db = require('./db')

function getClient(clientId, clientSecret) {
  console.log("clientId", clientId)

  const options = {
    where: {
      client_id: clientId
    },
    attributes: ['id', 'client_id', 'redirect_uri']
  }

  return db.OAuthClient
    .findOne(options)
    .then(function(client) {

    })

  return "client"
}

module.exports = {
  getClient: getClient
}
