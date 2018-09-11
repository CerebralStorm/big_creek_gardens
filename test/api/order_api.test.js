import OrderApi from '../../app/javascript/api/order_api'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from '../../app/javascript/custom_axios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loadOrders', () => {
  it(`should loadOrders`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet('/api/v1/orders').reply(200, {result: '/api/v1/orders was hit'})
    return OrderApi.loadOrders().then((response) => {
      expect(response.data.result).toEqual('/api/v1/orders was hit')
    })
  });

  it(`should fail to loadOrders`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet('/api/v1/orders').reply(500, {error: 'server returned an error'})
    return OrderApi.loadOrders().catch((response) => {
      expect(response.response.data.error).toEqual('server returned an error')
    })
  });
});

describe('loadOrder', () => {
  it(`should loadOrder`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet('/api/v1/orders/1').reply(200, {result: '/api/v1/orders was hit'})
    return OrderApi.loadOrder(1).then((response) => {
      expect(response.data.result).toEqual('/api/v1/orders was hit')
    })
  });

  it(`should fail to loadOrder`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet('/api/v1/orders/1').reply(500, {error: 'server returned an error'})
    return OrderApi.loadOrder(1).catch((response) => {
      expect(response.response.data.error).toEqual('server returned an error')
    })
  });
});