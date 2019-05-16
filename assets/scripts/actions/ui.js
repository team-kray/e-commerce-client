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

const updateOrderSuccess = function () {
  console.log('update order success, check database to see updated order')
  store.currentOrder.order.items.push(store.itemObj.item)
  const showCartHtml = showCartTemplate({ items: store.currentOrder.order.items })
  $('.cart').html(showCartHtml)
}

const getCurrentOrderSuccess = function (data) {
  console.log('the data is', data)
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
