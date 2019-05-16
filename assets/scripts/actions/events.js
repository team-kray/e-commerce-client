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

const onUpdateOrder = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.getItem(id)
    .then(ui.getItemSuccess)
    .then(api.updateOrder)
    .then(ui.updateOrderSuccess)
    .catch(ui.failure)
}

const token = function (token) {
  console.log('token is:', token)
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

const addHandlers = function () {
  $('document').ready(onGetItems)
  $(document).on('click', '.add-to-cart', onUpdateOrder)
  $('.view-cart').on('click', event => event.preventDefault())
  $('.checkout').on('click', onCheckout)
  $('.view-orders').on('click', onGetClosedOrders)
}

module.exports = {
  addHandlers
}
