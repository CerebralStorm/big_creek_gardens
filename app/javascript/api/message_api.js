import axios from '../custom_axios';

class MessageApi {
  static createMessage(params = {}) {
    return axios.post(`/api/v1/messages`, params)
  }
}

export default MessageApi;
export { MessageApi };
