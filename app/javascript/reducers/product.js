import constants from '../constants'

var productsReducer = function (state = [], action) {
  switch (action.type) {
    case constants.LOAD_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}

export { productsReducer }