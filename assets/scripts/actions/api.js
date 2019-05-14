const config = require('../config')
const store = require('../store')

const getItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
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

const updateOrder = function (data, id) {
  return $.ajax({
    url: config.apiUrl + `/orders/${id}`,
    method: 'PATCH',
    headers: {
      authorization: 'Token token=' + store.user.token
    },
    data: {
      // data.<resource>.<name of form fields>
      'order': {
        'item': data.item.id,
        'open': data.order.open
      }
    }
  })
}

const destroyOrder = function (id) {
  return $.ajax({
    url: config.apiUrl + `/orders/${id}`,
    method: 'DELETE',
    headers: {
      authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getItems,
  showOrders,
  updateOrder,
  destroyOrder
}
