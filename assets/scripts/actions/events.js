// const getFormFields = require('./../../../lib/get-form-fields')
const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const onGetItems = function (event) {
  // event.preventDefault()
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.failure)
}

const onaddToCart = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  // $(`data-id-${id}`).remove()
  $(`.addToCart[data-id=${id}]`).hide()
  api.getItem(id)
    .then(ui.getItemSuccess)
    .then(api.addToCart)
    .then(ui.addToCartSuccess)
    .catch(ui.failure)
}

const token = function (token) {
  api.stripeCheckout(token)
    .then(() => api.closeOrder())
    .then(() => api.createOrder())
    .then(ui.createOrderSuccess)
    .catch('checkout could not run')
}

const stripeCheckout = StripeCheckout.configure({
  key: 'pk_test_eWESnvJZAHAAuWxjeMrmOYrH00dsdAFmgI',
  locale: 'auto',
  token: token
})

const onCheckout = (event) => {
  event.preventDefault()
  stripeCheckout.open({
    name: 'That Hat',
    amount: store.cartSum * 100
  })
}

const onGetClosedOrders = function (event) {
  const id = $(event.target).data('id')
  api.getClosedOrders(id)
    .then(ui.getClosedOrdersSuccess)
    .catch(ui.failure)
}

const onDeleteOrderItem = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.getItem(id)
    .then(ui.getItemToRemoveSuccess)
    .then(api.deleteFromCart)
    .then(ui.deleteFromCartSuccess)
    .catch(ui.failure)
}

const addHandlers = function () {
  $('document').ready(onGetItems)
  $(document).on('click', '.add-to-cart', onaddToCart)
  $('.view-cart').on('click', event => event.preventDefault())
  $('.checkout').on('click', onCheckout)
  $('.view-orders').on('click', onGetClosedOrders)
  $('#view-cart-modal').on('click', '.remove-from-cart', onDeleteOrderItem)
  $('.checkout').hide()
  $('.view-orders').hide()
  $('.view-cart').hide()
}

module.exports = {
  addHandlers
}
