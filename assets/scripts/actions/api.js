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
    // data: {
    //   'item': []
    //     'id': data.item._id
    // //     // 'price':
    // //     // 'description':
    // //     // 'imgUrl':
    // //     // 'owner':
    //   }

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
        'owner': store.user._id,
        'items': [
          {
            'item': store.itemObj.item
          // 'name': store.itemObj.item.name,
          // 'price': store.itemObj.item.price,
          // 'description': store.itemObj.item.description,
          // 'imgUrl': store.itemObj.item.imgUrl
          }
        ]
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

//
// const destroyOrder = function (id) {
//   return $.ajax({
//     url: config.apiUrl + `/orders/${id}`,
//     method: 'DELETE',
//     headers: {
//       authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  getItems,
  getItem,
  showOrders,
  updateOrder,
  createOrder,
  getCurrentOrder
  // destroyOrder
}
