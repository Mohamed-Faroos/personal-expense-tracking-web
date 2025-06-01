import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'http://localhost:3001', // Replace with your API base URL
});

// Request interceptor
axiosClient.interceptors.request.use(
	(config) => {

		return config;
	},
	(error) => {
		// Handle request error
		return Promise.reject(error);
	}
);

// Response interceptor
axiosClient.interceptors.response.use(
	(response) => {
		// Process response data
		return response;
	},
	(error) => {
		// Handle response error
		return Promise.reject(error);
	}
);

export default axiosClient;
