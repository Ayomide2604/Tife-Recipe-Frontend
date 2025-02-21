import { useState, useEffect } from "react";
import useAuthStore from "./api/authStore";
import { Routes, Route } from "react-router";
import "./App.css";

import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import RecipeList from "./components/recipes/RecipeList";
import AddRecipe from "./components/recipes/AddRecipe";
import UpdateRecipe from "./components/recipes/UpdateRecipe";
import RecipeDetail from "./components/recipes/RecipeDetail";
import { getRecipes, getCategories } from "./api/apiServices";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ErrorPage from "./components/partials/ErrorPage";
import Loading from "./components/partials/Loading";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import CategoryList from "./components/categories/CategoryList";
import CategoryDetail from "./components/categories/CategoryDetail";

function App() {
	const { token, fetchUserProfile } = useAuthStore();

	useEffect(() => {
		if (token) {
			fetchUserProfile();
		}
	}, [token]);

	const [categories, setCategories] = useState([]);
	const [recipes, setRecipes] = useState([]);
	const [error, setError] = useState(null);
	const [currentRecipesPage, setCurrentRecipesPage] = useState(1);
	const [currentCategoriesPage, setCurrentCategoriesPage] = useState(1);
	const [totalRecipesPages, setTotalRecipesPages] = useState(null);
	const [totalCategoriesPages, setTotalCategoriesPages] = useState(null);
	const [loading, setLoading] = useState(true);

	const PageSize = 12;

	const handleRecipesPageChange = (page) => {
		setCurrentRecipesPage(page);
	};

	const handleCategoriesPageChange = (page) => {
		setCurrentCategoriesPage(page);
	};

	// Fetch Recipes
	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				setLoading(true);
				const data = await getRecipes(currentRecipesPage);
				setRecipes(data.results);
				setTotalRecipesPages(Math.ceil(data.count / PageSize));
				setError(null);
			} catch (error) {
				setError(error);
				console.log("error", error);
			} finally {
				setLoading(false);
			}
		};
		fetchRecipes();
	}, [currentRecipesPage]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				setLoading(true);
				const data = await getCategories(currentCategoriesPage);
				setCategories(data.results);
				setTotalCategoriesPages(Math.ceil(data.count / PageSize));
				setError(null);
			} catch (error) {
				setError(error);
				console.log("error", error);
			} finally {
				setLoading(false);
			}
		};
		fetchCategories();
	}, [currentCategoriesPage]);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="app-container pt-5">
			<Header />
			<Routes>
				<Route
					index
					element={<Home recipes={recipes} categories={categories} />}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />

				<Route
					path="/recipes/"
					element={
						<RecipeList
							recipes={recipes}
							currentRecipesPage={currentRecipesPage}
							totalRecipesPages={totalRecipesPages}
							error={error}
							handleRecipesPageChange={handleRecipesPageChange}
						/>
					}
				/>

				<Route path="/recipes/:id" element={<RecipeDetail />} />
				<Route path="/login" element={<Login />} />

				{/* Protected Routes */}
				<Route element={<ProtectedRoute />}>
					<Route
						path="/dashboard"
						element={<Dashboard recipes={recipes} categories={categories} />}
					/>
					<Route path="/recipes/add" element={<AddRecipe />} />
					<Route path="/recipes/:id/edit" element={<UpdateRecipe />} />
				</Route>

				<Route
					path="/categories"
					element={
						<CategoryList
							categories={categories}
							error={error}
							currentCategoriesPage={currentCategoriesPage}
							totalCategoriesPages={totalCategoriesPages}
							handleCategoriesPageChange={handleCategoriesPageChange}
						/>
					}
				/>
				<Route path="/categories/:id" element={<CategoryDetail />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
