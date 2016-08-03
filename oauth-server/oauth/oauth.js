var oauthServer = require('oauth2-server')
var model = require('./model.js')

module.exports = new oauthServer({
  model: model
})
