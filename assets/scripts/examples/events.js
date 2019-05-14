'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onCreateExample = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.createExample(data)
    .then(ui.createExampleSuccess)
    .catch(ui.createExampleFailure)
}

const onIndexExample = function (event) {
  event.preventDefault()

  api.indexExample()
    .then(ui.indexExampleSuccess)
    .catch(ui.indexExampleFailure)
}

const addHandlers = function () {
  $('#create-example').on('submit', onCreateExample)
  $('#index-example').on('submit', onIndexExample)
}

module.exports = {
  addHandlers
}
