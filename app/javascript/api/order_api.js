import axios from '../custom_axios';

class OrderApi {
  static loadOrders(params = {}) {
    return axios.get(`/api/v1/orders`, {params: params})
  }

  static loadOrder(orderId, params = {}) {
    return axios.get(`/api/v1/orders/${orderId}`, {params: params})
  }
}

export default OrderApi;
export { OrderApi };
