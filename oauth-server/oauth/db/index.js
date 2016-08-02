var mongoose = require('mongoose')
mongoose.connect(
  'mongodb://username:password@ds139675.mlab.com:39675/oauth-server',
  function(err) {
    if (err) return console.log(err)
    console.log('Mongoose Connected')
  })

module.exports = {
  OAuthAccessToken: require('./OAuthAccessToken'),
  OAuthAuthorizationCode: require('./OAuthAuthorizationCode'),
  OAuthClient: require('./OAuthClient'),
  OAuthRefreshToken: require('./OAuthRefreshToken'),
  OAuthScope: require('./OAuthScope'),
  User: require('./User'),
  Thing: require('./Thing')
}
