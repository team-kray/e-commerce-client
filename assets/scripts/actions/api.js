const config = require('../config')
const store = require('../store')

const getItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET'
  })
}

const getItem = function (id) {
  return $.ajax({
    url: config.apiUrl + `/items/${id}`,
    method: 'GET'
  })
}

const showOrders = function (id) {
  return $.ajax({
    url: config.apiUrl + `/orders/${id}`,
    method: 'GET',
    headers: {
      authorization: 'Token token=' + store.user.token
    }
  })
}

const updateOrder = function () {
  return $.ajax({
    url: config.apiUrl + `/orders/${store.currentOrder.order._id}`,
    method: 'PATCH',
    headers: {
      authorization: 'Token token=' + store.user.token
    },
    data: {
      'order': {
        'items':
          {
            'item': store.itemObj.item
          }
      }
    }
  })
}

const closeOrder = function () {
  return $.ajax({
    url: config.apiUrl + `/orders/${store.currentOrder.order._id}`,
    method: 'PATCH',
    headers: {
      authorization: 'Token token=' + store.user.token
    },
    data: {
      'order': {
        'open': false
      }
    }
  })
}

const createOrder = function () {
  return $.ajax({
    url: config.apiUrl + '/orders',
    method: 'POST',
    headers: {
      authorization: 'Token token=' + store.user.token
    },
    data: {
      'order': {
        'owner': store.user._id
      }
    }
  })
}

const getCurrentOrder = function () {
  return $.ajax({
    url: config.apiUrl + `/orders/${store.currentOrder.order._id}`,
    method: 'GET',
    headers: {
      authorization: 'Token token=' + store.user.token
    }
  })
}

const stripeCheckout = (token) => {
  return $.ajax({
    url: config.apiUrl + '/charge',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'token': token,
      'amount': parseInt(store.cartSum * 100)
    }
  })
}

const getClosedOrders = function () {
  return $.ajax({
    url: config.apiUrl + `/orders`,
    method: 'GET',
    headers: {
      authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getItems,
  getItem,
  showOrders,
  updateOrder,
  createOrder,
  getCurrentOrder,
  stripeCheckout,
  closeOrder,
  getClosedOrders
  // destroyOrder
}
