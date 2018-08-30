import constants from '../constants'

var cartReducer = function (state = {}, action) {
  switch (action.type) {
    case constants.LOAD_CART:
      return action.cart;
    default:
      return state;
  }
}

export { cartReducer };