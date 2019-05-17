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
  console.log('stored itemObj:', store.itemObj)
  console.log(store.cartSum)
}

const createOrderSuccess = function (data) {
  $('.checkout').hide()
  store.currentOrder = data
  store.cartSum = 0
  $('.cart').empty()
  console.log('new order created, stored cart:', store.currentOrder)
}

const addToCartSuccess = function () {
  $('.checkout').show()
  console.log('update order success, check database to see updated order')
  store.currentOrder.order.items.push(store.itemObj.item)
  const showCartHtml = showCartTemplate({ items: store.currentOrder.order.items })
  $('.cart').html(showCartHtml)
}

const getItemToRemoveSuccess = function (data) {
  store.itemObj = data
  console.log('itemObj is:', store.itemObj)
  store.cartSum -= store.itemObj.item.price
  console.log(store.cartSum)
  const itemsArray = store.currentOrder.order.items
  console.log('item array:', itemsArray)
  const itemToRemove = data.item._id
  console.log('item to remove:', itemToRemove)
  const newItemsArray = itemsArray.filter(i => i._id !== itemToRemove)
  console.log('filtered array:', newItemsArray)
  store.currentOrder.order.items = newItemsArray
}

const deleteFromCartSuccess = function () {
  console.log('update order success, check database to see updated order')
  if (store.currentOrder.order.items.length > 0) {
    const showCartHtml = showCartTemplate({ items: store.currentOrder.order.items })
    $('.cart').html(showCartHtml)
  } else {
    $('.cart').empty()
    $('.checkout').hide()
  }
}

const getClosedOrdersSuccess = function (data) {
  console.log(data.orders)
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
