import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/at-your-service-eee7d/us-central1/api'
});

export default instance;