import * as reducers from '../../app/javascript/reducers/cart'
import { constants } from '../../app/javascript/constants'

describe('cartReducer', () => {
  it('should return the initial state', () => {
    expect(reducers.cartReducer(undefined, {})).toEqual({});
  });

  it('should handle LOAD_CART', () => {
    let cart = {}
    cart['1'] = {
      product: {
        name: 'product1'
      },
      quantity: 1
    }
    const action = {
      type: constants.LOAD_CART,
      cart: cart
    }
    expect(reducers.cartReducer({}, action)).toEqual(cart);
  });
});