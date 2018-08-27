import { PaychexAccountAPI } from '../api/paychex_account_api'
import { logAndDispatchError } from '../utils'
import { constants } from '../constants'

var loadProducts = function (params = {}) {
  return function (dispatch) {
    return ProductApi.loadProducts(params)
      .then(response => {
        dispatch({ type: constants.LOAD_PRODUCTS, products: response.data.products })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to load accounts.')
      })
  }
}

export { loadProducts };