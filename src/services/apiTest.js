import axios from 'axios';

const apiTest = axios.create({
  baseURL: 'http://127.0.0.1:80',
});

export default apiTest;
