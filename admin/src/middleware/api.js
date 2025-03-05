import axios from 'axios';

const server = axios.create({
    method:"GET",
    baseURL: 'http://localhost:4000',
    withCredentials: true
});

export default server;
