import axios from 'axios';

const Config = { timeout: 5000 };
const BASE_URL = '';
const TOKEN = '';

// 创建axios实例
const service = axios.create({
  baseURL: BASE_URL,
  timeout: Config.timeout, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = TOKEN;
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    // Do something with request error
    console.log('in requrest error', error); // for debug

    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  // 200范围内的返回
  (response) => {
    if (response.config.url === 'users/login') {
      return response;
    }

    return response.data;
  },
  (error) => {
    // 200范围外的返回

    return Promise.reject(error);
  }
);

export default service;
