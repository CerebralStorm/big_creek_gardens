import axios from 'axios';

class OrderApi {
  static loadOrder(orderId, params = {}) {
    return axios.get(`/api/v1/orders/${orderId}`, {params: params})
  }
}

export default OrderApi;
export { OrderApi };
