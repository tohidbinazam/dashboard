import axios from 'axios';

const baseURL = import.meta.env.VITE_API_VERSION;
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
