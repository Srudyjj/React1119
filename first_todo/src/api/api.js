import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3004/'
});

export default {
  get: (url, props) => instance.get(url, props),
  post: (url, props) => instance.post(url, props),
  put: (url, props) => instance.put(url, props),
  delete: (url, props) => instance.delete(url, props)
};
