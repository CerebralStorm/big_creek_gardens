import UserApi from '../../app/javascript/api/user_api'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from '../../app/javascript/custom_axios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('updateUser', () => {
  it(`should updateUser`, () => {
    var mock = new MockAdapter(axios);
    mock.onPut('/api/v1/users/1').reply(200, {result: '/api/v1/users/1 was hit'})
    return UserApi.updateUser(1).then((response) => {
      expect(response.data.result).toEqual('/api/v1/users/1 was hit')
    })
  });

  it(`should fail to updateUser`, () => {
    var mock = new MockAdapter(axios);
    mock.onPut('/api/v1/users/1').reply(500, {error: 'server returned an error'})
    return UserApi.updateUser(1).catch((response) => {
      expect(response.response.data.error).toEqual('server returned an error')
    })
  });
});