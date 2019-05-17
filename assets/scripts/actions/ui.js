const showItemsTemplate = require('../templates/items.handlebars')
const showCartTemplate = require('../templates/cart.handlebars')
const showHistoryTemplate = require('../templates/history.handlebars')
const store = require('../store')

const getItemsSuccess = function (data) {
  const showItemsHtml = showItemsTemplate({ items: data.items })
  $('.items').html(showItemsHtml)
}

const getItemSuccess = function (data) {
  store.itemObj = data
  store.cartSum += store.itemObj.item.price
}

const createOrderSuccess = function (data) {
  $('.checkout').hide()
  store.currentOrder = data
  store.cartSum = 0
  $('.cart').empty()
}

const addToCartSuccess = function () {
  $('.checkout').show()
  store.currentOrder.order.items.push(store.itemObj.item)
  const showCartHtml = showCartTemplate({ items: store.currentOrder.order.items })
  $('.cart').html(showCartHtml)
}

const getItemToRemoveSuccess = function (data) {
  store.itemObj = data
  const itemsArray = store.currentOrder.order.items
  const itemToRemove = data.item._id
  const newItemsArray = itemsArray.filter(i => i._id !== itemToRemove)
  store.currentOrder.order.items = newItemsArray
}

const deleteFromCartSuccess = function () {
  if (store.currentOrder.order.items.length > 0) {
    const showCartHtml = showCartTemplate({ items: store.currentOrder.order.items })
    $('.cart').html(showCartHtml)
  } else {
    $('.cart').empty()
    $('.checkout').hide()
  }
}

const getClosedOrdersSuccess = function (data) {
  const showHistoryHtml = showHistoryTemplate({ orders: data.orders })
  $('.orders').html(showHistoryHtml)
}

const failure = (error) => {
  console.error(error)
}
//
module.exports = {
  getItemsSuccess,
  getItemSuccess,
  getItemToRemoveSuccess,
  createOrderSuccess,
  addToCartSuccess,
  deleteFromCartSuccess,
  getClosedOrdersSuccess,
  failure
}
