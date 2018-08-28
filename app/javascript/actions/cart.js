import Cookies from 'js-cookie'
import constants from '../constants'

let cartKey = function (currentUser = null) {
  if(!!currentUser) {
    return `${currentUser.id}_cart`;
  } else {
    return 'guest_cart';
  }
}

let loadCart = function (currentUser = null) {
  return function (dispatch) {
    let cart = Cookies.getJSON(cartKey(currentUser));
    return dispatch({ type: constants.LOAD_CART, cart: (cart || {}) })
  }
}

let updateCart = function (currentUser = null, cart = {}) {
  return function (dispatch) {
    Cookies.set(cartKey(currentUser), cart);
    return dispatch({ type: constants.LOAD_CART, cart: (cart || {}) })
  }
}

export { loadCart, updateCart };