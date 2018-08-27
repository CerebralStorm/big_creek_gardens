import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { productsReducer } from './reducers/product'
import flashMessageReducer from './reducers/flash'
import {currentUserReducer} from './reducers/user'

const middleware = [thunk];

var reducer = combineReducers({
  products: productsReducer,
  flashMessage: flashMessageReducer,
  currentUser: currentUserReducer
})

var initialState = {
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
export default createStoreWithMiddleware(reducer, initialState)
