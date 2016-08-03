const db = require('./db')

function getAccessToken(bearerToken) {
  console.log('getAccessToken')
}

function getAuthorizationCode(code) {
  console.log('getAuthorizationCode')
}

function getClient(clientId, clientSecret) {
  const options = {
    client_id: clientId,
    client_secret: clientSecret
  }

  return db.OAuthClient
    .findOne(options)
    .then(function(client) {
      if (!client) return new Error("client not found")

      const clientWithGrants = client.toJSON()
      clientWithGrants.grants = [
        'authorization_code',
        'password',
        'refresh_token',
        'client_credentials'
      ]
      clientWithGrants.redirectUris = [clientWithGrants.redirect_uri]

      delete clientWithGrants.redirect_uri
        //clientWithGrants.refreshTokenLifetime = integer optional
        //clientWithGrants.accessTokenLifetime  = integer optional

      return clientWithGrants
    }).catch(function(err) {
      console.log("getClient - Err: ", err)
    })
}

function getUser(username, password) {
  return User.findOne({
      where: {
        username: username
      },
      attributes: ['id', 'username', 'password'],
    })
    .then(function(user) {
      return user.password == password ? user.toJSON() : false;
    })
    .catch(function(err) {
      console.log("getUser - Err: ", err)
    });
}

function saveToken(token, client, user) {
  return Promise.all([
      OAuthAccessToken.create({
        access_token: token.accessToken,
        expires: token.accessTokenExpiresAt,
        client_id: client.id,
        user_id: user.id,
        scope: token.scope
      }),
      token.refreshToken ? OAuthRefreshToken.create({ // no refresh token for client_credentials
        refresh_token: token.refreshToken,
        expires: token.refreshTokenExpiresAt,
        client_id: client.id,
        user_id: user.id,
        scope: token.scope
      }) : []
    ])
    .then(function(resultsArray) {
      return _.assign( // expected to return client and user, but not returning
        {
          client: client,
          user: user,
          access_token: token.accessToken, // proxy
          refresh_token: token.refreshToken, // proxy
        },
        token
      )
    })
    .catch(function(err) {
      console.log("revokeToken - Err: ", err)
    });
}

module.exports = {
  getAccessToken: getAccessToken,
  getAuthorizationCode: getAuthorizationCode,
  getClient: getClient,
  getUser: getUser,
  saveToken: saveToken
}
