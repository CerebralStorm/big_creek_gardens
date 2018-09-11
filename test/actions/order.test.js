import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../app/javascript/actions/order'
import MockAdapter from 'axios-mock-adapter';
import axios from '../../app/javascript/custom_axios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loadOrders', () => {
  it(`should loadOrders`, () => {
    let orders = [
      {
        id: 1,
        orderLineItems: []
      }
    ]
    var mock = new MockAdapter(axios);
    mock.onGet().reply(200, {orders: orders})
    const store = mockStore({});
    return store.dispatch(actions.loadOrders()).then(() => {
      expect(store.getActions()[0].type).toEqual('LOAD_ORDERS')
      expect(store.getActions()[0].orders).toEqual(orders)
    })
  });
  it(`should fail loadOrders`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet().reply(500)
    const store = mockStore({ });
    return store.dispatch(actions.loadOrders()).then(() => {
      expect(store.getActions()[0].type).toEqual('DISPLAY_FLASH_MESSAGE')
      expect(store.getActions()[0].message).toEqual('An error occurred while attempting to load orders.')
    })
  });
});

describe('loadOrder', () => {
  it(`should loadOrder`, () => {
    let order = {
      id: 1,
      orderLineItems: []
    }
    var mock = new MockAdapter(axios);
    mock.onGet().reply(200, {order: order})
    const store = mockStore({});
    return store.dispatch(actions.loadOrder()).then(() => {
      expect(store.getActions()[0].type).toEqual('LOAD_ORDER')
      expect(store.getActions()[0].order).toEqual(order)
    })
  });
  it(`should fail loadOrder`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet().reply(500)
    const store = mockStore({ });
    return store.dispatch(actions.loadOrder()).then(() => {
      expect(store.getActions()[0].type).toEqual('DISPLAY_FLASH_MESSAGE')
      expect(store.getActions()[0].message).toEqual('An error occurred while attempting to load order.')
    })
  });
});