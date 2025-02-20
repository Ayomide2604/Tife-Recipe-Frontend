import { create } from "zustand";
import axios from "axios";

//  Create Zustand Store
const useAuthStore = create((set) => ({
	user: null,
	token: localStorage.getItem("token") || null,

	login: async ({ username, password }) => {
		try {
			const response = await axios.post(
				"http://localhost:8000/api/auth/jwt/create/",
				{ username, password }
			);
			const authToken = response.data.access;
			localStorage.setItem("token", authToken);
			axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
			set({ token: authToken });
			await useAuthStore.getState().fetchUserProfile();
		} catch (error) {
			console.error("Login failed:", error);
			throw error.response?.data || "An error occurred during login";
		}
	},

	logout: () => {
		localStorage.removeItem("token");
		delete axios.defaults.headers.common["Authorization"];
		window.location.href = "/login";
		set({ user: null, token: null });
	},

	fetchUserProfile: async () => {
		try {
			const response = await axios.get(
				"http://localhost:8000/api/auth/users/me/"
			);
			set({ user: response.data });
		} catch (error) {
			console.error("Failed to fetch user profile:", error);
			useAuthStore.getState().logout();
		}
	},

	initializeAuth: async () => {
		const token = localStorage.getItem("token");
		if (token) {
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await useAuthStore.getState().fetchUserProfile();
		}
	},
}));

useAuthStore.getState().initializeAuth();

export default useAuthStore;
