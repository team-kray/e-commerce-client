// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onGetItems = function (event) {
  // event.preventDefault()
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.failure)
}

const onUpdateOrder = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.getItem(id)
    .then(ui.getItemSuccess)
    .then(api.updateOrder)
    .then(ui.updateOrderSuccess)
    .catch(ui.failure)
}

const addHandlers = function () {
  $('document').ready(onGetItems)
  $(document).on('click', '.add-to-cart', onUpdateOrder)
  $('.view-cart').on('click', event => event.preventDefault())
}

module.exports = {
  addHandlers
}
