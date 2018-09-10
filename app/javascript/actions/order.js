import { OrderApi } from '../api/order_api'
import { logAndDispatchError } from '../utils'
import constants from '../constants'

var loadOrders = function (params = {}) {
  return function (dispatch) {
    return OrderApi.loadOrders(params)
      .then(response => {
        dispatch({ type: constants.LOAD_ORDERS, orders: response.data.orders })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to load accounts.')
      })
  }
}

var loadOrder = function (orderId, params = {}) {
  return function (dispatch) {
    return OrderApi.loadOrder(orderId, params)
      .then(response => {
        dispatch({ type: constants.LOAD_ORDER, orders: response.data.order })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to load accounts.')
      })
  }
}

export { loadOrders, loadOrder };