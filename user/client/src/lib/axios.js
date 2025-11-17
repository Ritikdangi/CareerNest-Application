import axios from "axios";

// Prefer a Vite-provided backend URL (VITE_BACKEND_URL). If not set,
// fall back to the previous defaults. This lets you run the backend on 5000
// (or any other port) by setting VITE_BACKEND_URL in client/.env.local.
const viteBackend = import.meta.env.VITE_BACKEND_URL;
const baseUrl = viteBackend
	? `${viteBackend.replace(/\/$/, '')}/api/v1`
	: (import.meta.env.MODE === "development"
			? "http://localhost:5000/api/v1"
			: "https://api.alumnlink.com/api/v1");

export const axiosInstance = axios.create({
	baseURL: baseUrl,
	withCredentials: true,
});

// Optional setup hook to attach interceptors that need app context
export const setupAxiosInterceptors = (queryClient) => {
	// Avoid attaching multiple times in HMR
	if (axiosInstance.__interceptorsAdded) return;
	axiosInstance.__interceptorsAdded = true;

	axiosInstance.interceptors.response.use(
		(response) => response,
		(error) => {
			const status = error?.response?.status;
			if (status === 401) {
				try { queryClient?.clear?.(); } catch {}
				// Redirect to login if not already there
				if (typeof window !== 'undefined') {
					const path = window.location.pathname;
					if (path !== '/login' && path !== '/signup') {
						window.location.replace('/login');
					}
				}
			}
			return Promise.reject(error);
		}
	);
};