import axios from 'axios';
const AxiosInstance = axios.create({
  baseURL: `http://${process.env.REACT_APP_BASE_URL}:5000`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosInstance;
