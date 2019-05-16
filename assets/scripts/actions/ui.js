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

const getItemToRemoveSuccess = function (data) {
  // console.log(data)
  // console.log(store.currentOrder.order.items)
  const itemsArray = store.currentOrder.order.items
  const itemToRemove = data.item._id
  console.log('item to remove:', itemToRemove)
  const newItemsArray = itemsArray.filter(i => i._id !== itemToRemove)
  store.filteredItems = newItemsArray
  console.log('filtered array:', newItemsArray)
  store.currentOrder.order.items = newItemsArray
  store.cartSum -= store.itemObj.item.price
  console.log(store.cartSum)
}

const createOrderSuccess = function (data) {
  store.currentOrder = data
  store.cartSum = 0
  $('.cart').empty()
  console.log('new order created, stored cart:', store.currentOrder)
}

const addToCartSuccess = function () {
  console.log('update order success, check database to see updated order')
  store.currentOrder.order.items.push(store.itemObj.item)
  const showCartHtml = showCartTemplate({ items: store.currentOrder.order.items })
  $('.cart').html(showCartHtml)
}

const deleteFromCartSuccess = function () {
  console.log('update order success, check database to see updated order')
  // store.currentOrder.order.items.push(store.filteredItems)
  console.log('this is store.filteredItems:', store.filteredItems)
  if (store.currentOrder.order.items.length > 0) {
    const showCartHtml = showCartTemplate({ items: store.currentOrder.order.items })
    $('.cart').html(showCartHtml)
  } else {
    $('.cart').empty()
  }
}

const getCurrentOrderSuccess = function (data) {
  console.log('the data is', data)
}

const getClosedOrdersSuccess = function (data) {
  console.log('VIEWORDERS')
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
  getCurrentOrderSuccess,
  getClosedOrdersSuccess,
  failure
}
