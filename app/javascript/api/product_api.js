import axios from 'axios';

class ProductApi {
  static loadProducts(params = {}) {
    return axios.get(`/api/v1/products`, {params: params})
  }
}

export default ProductApi;
export { ProductApi };
