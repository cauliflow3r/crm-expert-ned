import axios from "axios";
import {getToken} from "./token";
import {updateAccessToken} from "../services/token";


const axiosInstance = axios.create({
  baseURL: 'https://realty-ggcv.onrender.com/',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getToken()
    const auth = accessToken ? `Bearer ${accessToken}` : '';
    config.headers['Authorization'] = auth;
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config;
  if (error.response && error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const access_token = await updateAccessToken();
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
    return axiosInstance(originalRequest);
  }
  return Promise.reject(error);
});

export {axiosInstance}  