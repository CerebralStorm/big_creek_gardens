import axios from 'axios';

const instance = axios.create({
  headers: {'X-CSRF-Token': ENV.csrf_token}
});

export default instance