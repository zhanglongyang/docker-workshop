const mongoose = require('mongoose')

mongoose.connect('mongodb://db/oauth-server', function(err) {
  if (err) return console.log(err)
  console.log('Mongoose Connected')

  mongoose.connection.db.listCollections({name: 'user'})
    .next(function(err, collinfo) {
      if (!collinfo) {
        console.log('Seeding data...')
        const seed = require('./seed')
        seed()
      }
    })
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
