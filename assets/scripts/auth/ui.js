'use strict'
const store = require('../store')
const actionsApi = require('../actions/api')
const actionsUi = require('../actions/ui')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`Sign up success!`).show()
  setTimeout(() => {
    $('.messages').text('').hide()
  }, 2000)
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`Something went wrong, please try again!`).show()
  setTimeout(() => {
    $('.messages').text('').hide()
  }, 2000)
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  store.user = data.user
  $('.messages').text(`Welcome!`).show()
  setTimeout(() => {
    $('.messages').text('').hide()
  }, 2000)
  $('.hidden').show()
  $('.add-to-cart').show()
  actionsApi.createOrder()
    .then(actionsUi.createOrderSuccess)
    .catch(actionsUi.failure)
}

const signInFailure = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`Something went wrong, please try again!`).show()
  setTimeout(() => {
    $('.messages').text('').hide()
  }, 2000)
}

const changePasswordSuccess = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`Change password success!`).show()
  setTimeout(() => {
    $('.messages').text('').hide()
  }, 2000)
}

const changePasswordFailure = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`Something went wrong, please try again!`).show()
  setTimeout(() => {
    $('.messages').text('').hide()
  }, 2000)
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('#content').empty()
  $('.messages').text(`See you next time!`).show()
  setTimeout(() => {
    $('.messages').text(' ').hide()
  }, 2000)
  $('.hidden').hide()
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('.messages').text(`Something went wrong, please try again!`).show()
  setTimeout(() => {
    $('.messages').text(' ').hide()
  }, 2000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
