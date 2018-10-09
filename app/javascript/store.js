import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { productsReducer, productReducer } from './reducers/product'
import { ordersReducer, orderReducer } from './reducers/order'
import flashReducer from './reducers/flash'
import { currentUserReducer } from './reducers/user'
import { cartReducer } from './reducers/cart'

const middleware = [thunk];

var reducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  orders: ordersReducer,
  order: orderReducer,
  flash: flashReducer,
  currentUser: currentUserReducer,
  cart: cartReducer
})

var initialState = {
  cart: {}
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
export default createStoreWithMiddleware(reducer, initialState)
