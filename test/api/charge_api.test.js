import ChargeApi from '../../app/javascript/api/charge_api'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from '../../app/javascript/custom_axios'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('createCharge', () => {
  it(`should create a charge`, () => {
    var mock = new MockAdapter(axios);
    mock.onPost('/api/v1/charges').reply(200, {result: '/api/v1/charges was hit'})
    return ChargeApi.createCharge().then((response) => {
      expect(response.data.result).toEqual('/api/v1/charges was hit')
    })
  });

  it(`should fail to createCharge`, () => {
    var mock = new MockAdapter(axios);
    mock.onPost('/api/v1/charges').reply(500, {error: 'server returned an error'})
    const store = mockStore({ });
    return ChargeApi.createCharge().catch((response) => {
      expect(response.response.data.error).toEqual('server returned an error')
    })
  });
});