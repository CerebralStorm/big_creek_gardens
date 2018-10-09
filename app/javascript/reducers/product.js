import constants from '../constants'

var productsReducer = function (state = [], action) {
  switch (action.type) {
    case constants.LOAD_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}

var productReducer = function (state = {}, action) {
  switch (action.type) {
    case constants.LOAD_PRODUCT:
      return action.product;
    default:
      return state;
  }
}

export { productsReducer, productReducer }