const showItemsTemplate = require('../templates/items.handlebars')
const showCartTemplate = require('../templates/cart.handlebars')
const store = require('../store')

const getItemsSuccess = function (data) {
  const showItemsHtml = showItemsTemplate({ items: data.items })

  $('.items').html(showItemsHtml)
}

const getItemSuccess = function (data) {
  store.itemObj = data
  console.log(store.itemObj)
}

const createOrderSuccess = function (data) {
  store.currentOrder = data
  console.log(store.currentOrder)
}

const updateOrderSuccess = function () {
  console.log('THIS IS THE NEW CART', store.currentOrder)
  store.currentOrder.order.items.push(store.itemObj.item)
  // console.log('ITEMS', store.order.items)

  const showCartHtml = showCartTemplate({ orders: store.currentOrder.order.items })
  $('.cart').html(showCartHtml)
}

const getCurrentOrderSuccess = function (data) {
}

// const showOrdersSuccess =
//   // show all orders that have been "closed"
//
// const updateOrderSuccess =
//   // trigger reset and change forms
//
// const destroyOrderSuccess =
//   // delete items inside of the order and reset
//   // the order, do not delete items themselves
//
//
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
  //   showOrdersSuccess,
  //   updateOrderSuccess,
  //   destroyOrderSuccess,
}
