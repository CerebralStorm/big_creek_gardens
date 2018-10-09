import { ProductApi } from '../api/product_api'
import { logAndDispatchError } from '../utils'
import constants from '../constants'

var loadProducts = function (params = {}) {
  return function (dispatch) {
    return ProductApi.loadProducts(params)
      .then(response => {
        dispatch({ type: constants.LOAD_PRODUCTS, products: response.data.products })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to load products.')
      })
  }
}

var loadProduct = function (productId, params = {}) {
  return function (dispatch) {
    return ProductApi.loadProduct(productId, params)
      .then(response => {
        dispatch({ type: constants.LOAD_PRODUCT, product: response.data })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to load the product.')
      })
  }
}

export { loadProducts, loadProduct };