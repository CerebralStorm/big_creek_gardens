import * as reducers from '../../app/javascript/reducers/product'
import { constants } from '../../app/javascript/constants'

describe('productsReducer', () => {
  it('should return the initial state', () => {
    expect(reducers.productsReducer(undefined, {})).toEqual([]);
  });

  it('should handle LOAD_ORDERS', () => {
    let products = [
      {
        id: 1,
        name: 'test product'
      }
    ]
    const action = {
      type: constants.LOAD_PRODUCTS,
      products: products
    }
    expect(reducers.productsReducer([], action)).toEqual(products);
  });
});