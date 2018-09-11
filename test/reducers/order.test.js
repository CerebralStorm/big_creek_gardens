import * as reducers from '../../app/javascript/reducers/order'
import { constants } from '../../app/javascript/constants'

describe('ordersReducer', () => {
  it('should return the initial state', () => {
    expect(reducers.ordersReducer(undefined, {})).toEqual([]);
  });

  it('should handle LOAD_ORDERS', () => {
    let orders = [
      {
        id: 1,
        orderLineItems: []
      }
    ]
    const action = {
      type: constants.LOAD_ORDERS,
      orders: orders
    }
    expect(reducers.ordersReducer([], action)).toEqual(orders);
  });
});

describe('orderReducer', () => {
  it('should return the initial state', () => {
    expect(reducers.orderReducer(undefined, {})).toEqual({});
  });

  it('should handle LOAD_ORDER', () => {
    let order = {
      id: 1,
      orderLineItems: []
    }
    const action = {
      type: constants.LOAD_ORDER,
      order: order
    }
    expect(reducers.orderReducer({}, action)).toEqual(order);
  });
});