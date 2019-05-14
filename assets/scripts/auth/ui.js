'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`sign up success`).show()
  setTimeout(() => {
    $('.messages').text('').hide()
  }, 2000)
}

const signUpFailure = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`something went wrong, try to sign up again!`).show()
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
  $('.messages').text(`welcome!`).show()
  setTimeout(() => {
    $('.messages').text('').hide()
  }, 2000)
  $('.hidden').show()
}

const signInFailure = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`oops! somethings wrong try again`).show()
  setTimeout(() => {
    $('.messages').text('').hide()
  }, 2000)
}

const changePasswordSuccess = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`change password success!`).show()
  setTimeout(() => {
    $('.messages').text('').hide()
  }, 2000)
}

const changePasswordFailure = function (data) {
  $('form').trigger('reset')
  $('.messages').text(`change password error`).show()
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
  $('.messages').text(`see you next time!`).show()
  setTimeout(() => {
    $('.messages').text(' ').hide()
  }, 2000)
  $('.hidden').hide()
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('.messages').text(`somethings not working right`).show()
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
