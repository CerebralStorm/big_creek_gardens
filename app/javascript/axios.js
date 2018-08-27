import axios from 'axios'

let instance = axios.create({
  baseURL: `/accounts/${ENV.account.id}`,
  headers: {
    'Authorization': `token=${ENV.session_key}`,
    'X-CSRF-Token': ENV.csrf_token
  }
});

export default instance;