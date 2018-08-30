import constants from '../constants'

var cartReducer = function (state = {}, action) {
  switch (action.type) {
    case constants.LOAD_CART:
      console.log(state)
      console.log(action.cart)
      return action.cart;
    default:
      return state;
  }
}

export { cartReducer };