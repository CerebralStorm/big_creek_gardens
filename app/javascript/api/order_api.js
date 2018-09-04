import axios from 'axios';

class OrderApi {
  static createOrder(params = {}) {
    return axios.get(`/api/v1/order`, {params: params})
  }
}

export default OrderApi;
export { OrderApi };
