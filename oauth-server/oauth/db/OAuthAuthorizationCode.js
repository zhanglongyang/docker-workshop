const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OAuthAuthorizationCodeSchema = new Schema({

})

module.exports = mongoose.model('OAuthAuthorizationCode', OAuthAuthorizationCodeSchema)
