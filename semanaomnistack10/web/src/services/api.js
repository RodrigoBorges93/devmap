import axios from 'axios';

const api = axios.create({
    baseURL: 'https://3333-dcb6407a-b86b-4535-9816-38a960291844.ws-us02.gitpod.io'
});

export default api