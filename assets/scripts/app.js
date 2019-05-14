'use strict'

const auth = require('./auth/events')
const actions = require('./actions/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#sign-out').on('submit', auth.onSignOut)
  $('#change-password').on('submit', auth.onChangePassword)
  $('#get-all').on('submit', actions.onGetItems)
  $('#get-orders').on('submit')
  $('#delete-item').on('submit')
  $('#show-orders').on('submit')
  $('#on-purchase').on('submit')
})
