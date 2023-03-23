import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://35.244.0.129:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosInstance;
