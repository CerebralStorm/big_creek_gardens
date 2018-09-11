import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../app/javascript/actions/product'
import MockAdapter from 'axios-mock-adapter';
import axios from '../../app/javascript/custom_axios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loadProducts', () => {
  it(`should loadProducts`, () => {
    let products = [
      {
        id: 1,
        name: 'test product'
      }
    ]
    var mock = new MockAdapter(axios);
    mock.onGet().reply(200, {products: products})
    const store = mockStore({});
    return store.dispatch(actions.loadProducts()).then(() => {
      expect(store.getActions()[0].type).toEqual('LOAD_PRODUCTS')
      expect(store.getActions()[0].products).toEqual(products)
    })
  });
  it(`should fail loadProducts`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet().reply(500)
    const store = mockStore({ });
    return store.dispatch(actions.loadProducts()).then(() => {
      expect(store.getActions()[0].type).toEqual('DISPLAY_FLASH_MESSAGE')
      expect(store.getActions()[0].message).toEqual('An error occurred while attempting to load products.')
    })
  });
});