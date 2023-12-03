import axios from 'axios';
import { getToken } from '../config/auth';

const api = axios.create({
  baseURL: 'http://localhost:3003',
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  const conf = config;
  const token = getToken();
  if (token) {
    conf.headers!.authorization = token;
  }

  return conf;
});

export default api;