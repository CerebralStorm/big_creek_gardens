import constants from '../constants'

var cartReducer = function (state = new Set([]), action) {
  switch (action.type) {
    case constants.LOAD_CART:
      console.log(action);
      return action.cart;
    case constants.UPDATE_CART:
      console.log(action);
      return action.cart;
    default:
      return state;
  }
}

export { cartReducer };