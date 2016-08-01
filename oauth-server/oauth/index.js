var oauthServer = require('oauth2-server')
var Request = oauthServer.Request
var Response = oauthServer.Response
var oauth = require('./oauth')

module.exports = function(app) {
  app.all('/oauth/token', function(req, res, next) {
    var request = new Request(req)
    var response = new Response(res)

    oauth
      .token(request, response)
      .then(function(token) {
        return res.json(token)
      })
      .catch(function(error) {
        return res.status(500).json(error)
      })
  })

  app.post('/authorise', function(req, res, next) {

  })

  app.get('/authorise', function(req, res, next) {

  })
}
