'use strict'

const createExampleSuccess = function (data) {
  $('form').trigger('reset')
}

const createExampleFailure = function (data) {
  $('form').trigger('reset')
}

const indexExampleSuccess = function (data) {
  $('form').trigger('reset')
}

const indexExampleFailure = function (data) {
  $('form').trigger('reset')
}

module.exports = {
  createExampleSuccess,
  createExampleFailure,
  indexExampleSuccess,
  indexExampleFailure
}
