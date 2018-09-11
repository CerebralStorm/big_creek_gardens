import Cookies from 'js-cookie'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../app/javascript/actions/cart'
import { updateCart } from '../../app/javascript/actions/cart'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('loadCart', () => {
  it(`should load cart action`, () => {
    let cart = {}
    cart['1'] = {
      product: {
        name: 'product1'
      },
      quantity: 1
    }
    Cookies.set('cart', cart);
    expect(store.dispatch(actions.loadCart())).toEqual({
      type: 'LOAD_CART',
      cart: cart
    })
  });
});

describe('updateCart', () => {
  it(`should update the cart`, () => {
    Cookies.set('cart', {});
    expect(store.dispatch(actions.loadCart())).toEqual({
      type: 'LOAD_CART',
      cart: {}
    })
    let cart = {}
    cart['1'] = {
      product: {
        name: 'new product'
      },
      quantity: 2
    }
    updateCart(cart)
    expect(Cookies.getJSON('cart')).toEqual({})
  });

  it(`should create a default cart`, () => {
    updateCart(undefined)
    expect(Cookies.getJSON('cart')).toEqual({})
  });
});
