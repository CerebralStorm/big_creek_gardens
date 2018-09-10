import constants from '../constants'

var ordersReducer = function (state = [], action) {
  switch (action.type) {
    case constants.LOAD_ORDERS:
      return action.orders;
    default:
      return state;
  }
}

var orderReducer = function (state = {}, action) {
  switch (action.type) {
    case constants.LOAD_ORDER:
      return action.order;
    default:
      return state;
  }
}

export { ordersReducer, orderReducer }