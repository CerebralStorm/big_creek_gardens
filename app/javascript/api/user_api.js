import axios from '../custom_axios';

class UserApi {
  static updateUser(userId, params = {}) {
    return axios.put(`/api/v1/users/${userId}`, params)
  }
}

export default UserApi;
export { UserApi };
