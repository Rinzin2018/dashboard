import axios from 'axios';

export const apiUrl = 'https://cpms.rbp.gov.bt/api';
axios.defaults.baseURL = apiUrl;
axios.defaults.timeout = 0;

export const API = {axios: axios.create({baseURL: apiUrl, timeout: 0}), dispatch: null};

// Add a request interceptor
API.axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  if (!error.response) {
    return Promise.reject(error.message);
  }
  let message = error?.response?.data?.error || error?.response?.data?.errors.join(', ');
  // Do something with request error
  return Promise.reject(message);
});

// Add a response interceptor
API.axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (!error.response) {
    return Promise.reject(error.message);
  }
  let message = error?.response?.data?.error || error?.response?.data?.errors.join(', ');
  return Promise.reject(message);
});

export default (url, method, params, data, responseType) => API.axios.request({
  url,
  method,
  params,
  data,
  responseType
});
