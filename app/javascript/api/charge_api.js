import axios from '../custom_axios';

class ChargeApi {
  static createCharge(params = {}) {
    return axios.post(`/api/v1/charges`, params)
  }
}

export default ChargeApi;
export { ChargeApi };
