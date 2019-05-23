'use strict'

const store = require('./../../store')

const ownerCheck = (currentUserID) => {
  if (store.user._id === currentUserID) {
    return true
  }
}

module.exports = ownerCheck
