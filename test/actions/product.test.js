import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../app/javascript/admin/actions/webhook'
import MockAdapter from 'axios-mock-adapter';
import axios from '../../../app/javascript/shared/axios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('loadWebhooks', () => {
  it(`should load libraries action`, () => {
    var mock = new MockAdapter(axios);
    mock.onGet().reply(200, [{id: 1, name: 'webhook', description: 'test webhook'}] )
    const store = mockStore({ webhooks: [] });
    store.dispatch(actions.loadWebhooks())
  });
});