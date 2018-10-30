import axios from 'axios';

const API_HOST_URL = process.env.REACT_APP_API_HOST_URL;

let settings = {
  baseURL: API_HOST_URL
};

if (localStorage.getItem('token')) {
  settings = {
    baseURL: API_HOST_URL,
    headers: { Authorization: localStorage.getItem('token') }
  };
}
export const axiosInstance = axios.create(settings);
