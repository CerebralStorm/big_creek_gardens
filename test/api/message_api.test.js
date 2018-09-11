import MessageApi from '../../app/javascript/api/message_api'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from '../../app/javascript/custom_axios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('createMessage', () => {
  it(`should create a charge`, () => {
    var mock = new MockAdapter(axios);
    mock.onPost('/api/v1/messages').reply(200, {result: '/api/v1/messages was hit'})
    return MessageApi.createMessage().then((response) => {
      expect(response.data.result).toEqual('/api/v1/messages was hit')
    })
  });

  it(`should fail to createMessage`, () => {
    var mock = new MockAdapter(axios);
    mock.onPost('/api/v1/messages').reply(500, {error: 'server returned an error'})
    const store = mockStore({ });
    return MessageApi.createMessage().catch((response) => {
      expect(response.response.data.error).toEqual('server returned an error')
    })
  });
});