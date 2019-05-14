const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onGetItems = function (event) {
  // event.preventDefault()
  api.getItems()
    .then(ui.getItemsSuccess)
    .catch(ui.failure)
}

const onShowOrders = function (event) {
  event.preventDefault()
  api.showOrders()
    .then(ui.showOrdersSuccess)
    .catch(ui.failure)
}

const onUpdateOrder = function (event) {
  console.log(event)
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log("DATA IS", data)
  const id = $(event.target).data('id')
  console.log("ID IS", id)
  api.updateOrder(data, id)
    .then(ui.updateOrderSuccess)
    .catch(ui.failure)
}

const onDestroyOrder = function (event) {
  event.preventDefault()

}

module.exports = {
  onGetItems,
  onShowOrders,
  onUpdateOrder
}
