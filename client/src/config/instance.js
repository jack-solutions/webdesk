// axiosInstance.js
import axios from 'axios';

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your API's base URL
});

// Export the Axios instance
export default axiosInstance;
