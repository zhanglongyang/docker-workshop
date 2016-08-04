const _ = require('lodash')
const db = require('./db')

function getAccessToken(bearerToken) {
  console.log('getAccessToken')
}

function getAuthorizationCode(code) {
  console.log('getAuthorizationCode')
}

function getClient(clientId, clientSecret) {
  return db.OAuthClient
    .findOne({
      client_id: clientId,
      client_secret: clientSecret
    }, {
      id: 1,
      client_id: 1,
      client_secret: 1,
      redirect_uri: 1
    })
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
  return db.User.findOne({
      username: username
    }, {
      id: 1,
      username: 1,
      password: 1
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
      db.OAuthAccessToken.create({
        access_token: token.accessToken,
        expires: token.accessTokenExpiresAt,
        client_id: client.id,
        user_id: user.id,
        scope: token.scope
      }),
      token.refreshToken ? db.OAuthRefreshToken.create({ // no refresh token for client_credentials
        refresh_token: token.refreshToken,
        expires: token.refreshTokenExpiresAt,
        client_id: client.id,
        user_id: user.id,
        scope: token.scope
      }) : []
    ])
    .then(function(resultsArray) {
      return _.assign({
          client: client,
          user: user,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
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
