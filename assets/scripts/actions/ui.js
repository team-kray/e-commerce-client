const showItemsTemplate = require('../templates/items.handlebars')

const getItemsSuccess = function (data) {
  const showItemsHtml = showItemsTemplate({ items: data.items })

  $('.items').html(showItemsHtml)
}

// handlebars, display all available items

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
  failure
  //   showOrdersSuccess,
  //   updateOrderSuccess,
  //   destroyOrderSuccess,
}
