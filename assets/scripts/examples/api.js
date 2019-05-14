'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createExample = function (data) {
  return $.ajax({
    url: config.apiUrl + '/examples/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const indexExample = function () {
  return $.ajax({
    url: config.apiUrl + '/examples/',
    method: 'GET'
  })
}

module.exports = {
  createExample,
  indexExample
}
