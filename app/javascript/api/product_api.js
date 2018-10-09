import axios from '../custom_axios';

class ProductApi {
  static loadProducts(params = {}) {
    return axios.get(`/api/v1/products`, {params: params})
  }

  static loadProduct(productId, params = {}) {
    return axios.get(`/api/v1/products/${productId}`, {params: params})
  }
}

export default ProductApi;
export { ProductApi };
