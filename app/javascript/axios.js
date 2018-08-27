import axios from 'axios'

const instance = axios.create({
  headers: {
    'Authorization': `token=${ENV.session_key}`,
    'X-CSRF-Token': ENV.csrf_token
  }
});

export default instance;