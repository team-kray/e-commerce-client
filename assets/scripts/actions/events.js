const getFormFields = require('./../../../lib/get-form-fields')
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
    // updateOrderSuccess isn't logging the updated order
    .then(ui.updateOrderSuccess)
    .catch(ui.failure)
}

const onViewCart = function (event) {
  event.preventDefault()
  api.getCurrentOrder()
    .then(ui.getCurrentOrderSuccess)
    .catch(ui.failure)
}

// const onCreateOrder = function () {
//
// }

// const onShowOrders = function (event) {
//   event.preventDefault()
//   api.showOrders()
//   .then(ui.showOrdersSuccess)
//   .catch(ui.failure)
// }

// const onDestroyOrder = function (event) {
//   event.preventDefault()
// }

const addHandlers = function () {
  $('document').ready(onGetItems)
  $(document).on('click', '.add-to-cart', onUpdateOrder)
  $('document').ready('.add-to-cart').hide()
  $('.view-cart').on('click', onViewCart)
  $('document').ready('.remove-from-cart', onRemoveFromCart)
  // $('#get-orders').on('submit')
  // $('#delete-item').on('submit')
  // $('#show-orders').on('submit')
  // $('#on-purchase').on('submit')
}

module.exports = {
  addHandlers
}
