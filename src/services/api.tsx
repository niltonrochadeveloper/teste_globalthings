import axios, { AxiosHeaders, AxiosInstance } from "axios";

const myHeaders = new AxiosHeaders({
  setAccept: "application/json",
  'accessKey': '6af33c8acec4472ca69a5c91fe1b9e6b'
});

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: myHeaders,
  timeout: 15000,
});

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
