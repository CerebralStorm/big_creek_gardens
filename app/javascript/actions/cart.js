import Cookies from 'js-cookie'
import constants from '../constants'
ENV.Cookies = Cookies

let cartKey = function (currentUser = null) {
  if(currentUser) {
    // `${currentUser.id}_cart`;
    return 'cart';
  } else {
    // 'guest_cart';
    return 'cart';
  }
}

let verifyCart = function (currentUser = null, cart = null) {
  if(typeof (cart) !== 'object') {
    Cookies.set(cartKey(currentUser), {});
    cart = {}
  }
  return cart;
}

let loadCart = function (currentUser = null) {
  return function (dispatch) {
    let cart = Cookies.getJSON(cartKey(currentUser));
    cart = verifyCart(currentUser, cart)
    return dispatch({ type: constants.LOAD_CART, cart: cart })
  }
}

let updateCart = function (currentUser = null, cart = {}) {
  cart = verifyCart(currentUser, cart)
  Cookies.set(cartKey(currentUser), cart);
}

export { loadCart, updateCart };