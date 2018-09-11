import ProductApi from '../../app/javascript/api/product_api'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from '../../app/javascript/custom_axios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loadProducts', () => {
  it(`should loadProducts`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet('/api/v1/products').reply(200, {result: '/api/v1/products was hit'})
    return ProductApi.loadProducts().then((response) => {
      expect(response.data.result).toEqual('/api/v1/products was hit')
    })
  });

  it(`should fail to loadProducts`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet('/api/v1/products').reply(500, {error: 'server returned an error'})
    return ProductApi.loadProducts().catch((response) => {
      expect(response.response.data.error).toEqual('server returned an error')
    })
  });
});