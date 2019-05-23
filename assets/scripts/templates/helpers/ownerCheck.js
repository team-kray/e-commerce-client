'use strict'

const store = require('./../../store')

const ownerCheck = (currentUserID) => {
  console.log('stored user id', store.user._id)
  console.log('from handlebars id', currentUserID)
  if (store.user._id === currentUserID) {
    return true
  }
}

module.exports = ownerCheck
