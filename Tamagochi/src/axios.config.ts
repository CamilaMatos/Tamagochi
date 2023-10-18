import axios from 'axios';
import user from './stores/user';

const instance = axios.create({
  baseURL: 'https://tamagochiapi-clpsampedro.b4a.run',
});

instance.interceptors.request.use(request => {
  const {token} = user.getState();

  if (token) {
    request.headers['x-access-token'] = token;
    
  }
  return request;
});

export default instance;