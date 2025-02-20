import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

const apiClient = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getRecipes = async (pageNumber) => {
	const response = await apiClient.get(`/recipes?page=${pageNumber}`);
	return response.data;
};

export const getRecipeById = async (id) => {
	const response = await apiClient.get(`/recipes/${id}`);
	return response.data;
};

export const addRecipe = async (formData) => {
	try {
		const response = await apiClient.post("/recipes/", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const updateRecipe = async (id, formData) => {
	try {
		const response = await apiClient.patch(`/recipes/${id}/`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const deleteRecipe = async (id) => {
	try {
		await apiClient.delete(`/recipes/${id}/`);
	} catch (error) {
		console.error("Error deleting recipe:", error);
		throw error;
	}
};

export const getCategories = async (pageNumber) => {
	const response = await apiClient.get(`/categories?page=${pageNumber}`);
	return response.data;
};

export const getCategoryById = async (id) => {
	const response = await apiClient.get(`/categories/${id}`);
	return response.data;
};

// export const getRecipesByCategory = async (id, pageNumber) => {
// 	const response = await apiClient.get(
// 		`/categories/${id}/recipes?page=${pageNumber}`
// 	);
// 	return response.data;
// };
