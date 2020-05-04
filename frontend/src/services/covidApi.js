import axios from 'axios';

const covidApi = axios.create({
    baseURL: 'http://localhost:3000/dashboard'
})

export default covidApi;