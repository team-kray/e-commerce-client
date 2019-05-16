const showItemsTemplate = require('../templates/items.handlebars')
const showCartTemplate = require('../templates/cart.handlebars')
const store = require('../store')

const getItemsSuccess = function (data) {
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('.items').html(showItemsHtml)
}

const getItemSuccess = function (data) {
  store.itemObj = data
  console.log('stored itemObj:', store.itemObj)
}

const createOrderSuccess = function (data) {
  store.currentOrder = data
  console.log('stored cart:', store.currentOrder)
}

const updateOrderSuccess = function (data) {
  console.log('update order success, check database to see updated order')
}

const getCurrentOrderSuccess = function (data) {
  console.log('the data is', data)
  const showCartHtml = showCartTemplate({ order: data.order })
  $('.cart').html(showCartHtml)
}

const failure = (error) => {
  console.error(error)
}
//
module.exports = {
  getItemsSuccess,
  getItemSuccess,
  createOrderSuccess,
  updateOrderSuccess,
  getCurrentOrderSuccess,
  failure
}
