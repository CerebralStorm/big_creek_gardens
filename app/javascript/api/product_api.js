import axios from '../custom_axios';

class ProductApi {
  static loadProducts(params = {}) {
    return axios.get(`/api/v1/products`, {params: params})
  }
}

export default ProductApi;
export { ProductApi };
