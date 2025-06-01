import axios from 'axios';
import { store } from '../state/store';
import { setUnauthorizedFound } from '../state/session/userLogin';

const axiosClient = axios.create({
	baseURL: 'http://localhost:3001', // Replace with your API base URL
});

// Request interceptor
axiosClient.interceptors.request.use(
	(config) => {
		const token: string = store.getState().session.user?.accessToken || "";
		if (config.headers && token) {
			config.headers.set('Authorization', token);
		}
		return config;
	},
	(error) => {		
		return Promise.reject(error);
	}
);

// Response interceptor
axiosClient.interceptors.response.use(
	(response) => {		
		return response;
	},
	(error) => {
		
		if(error.status === 401) {
			store.dispatch(setUnauthorizedFound())
		}

		return Promise.reject(error);
	}
);

export default axiosClient;
