import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ListCard from "../partials/ListCard";
import "./recipes.css";
import Pagination from "../partials/Pagination";
import Hero from "./Hero";
import RecipeFilter from "../partials/RecipeFilter";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllCategories } from "../../api/apiServices";

const RecipeList = ({
	recipes,
	currentRecipesPage,
	totalRecipesPages,
	handleRecipesPageChange,
	error,
}) => {
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [categories, setCategories] = useState([]);

	const handleCategoryFilter = (categoryId) => {
		setSelectedCategory(categoryId);
	};

	const filteredRecipes = recipes.filter((recipe) => {
		if (selectedCategory === null) {
			return true;
		}
		return recipe.categories.some(
			(category) => category.id === selectedCategory
		);
	});

	useEffect(() => {
		const fetchCategories = async () => {
			const categories = await getAllCategories();
			setCategories(categories);
		};
		fetchCategories();
	}, []);
	if (error) return <h1>There was an error fetching the recipes</h1>;

	return (
		<>
			<Container className="recipes-container my-3">
				<Hero />

				<Row>
					<RecipeFilter
						categories={categories}
						handleCategoryFilter={handleCategoryFilter}
						selectedCategory={selectedCategory}
					/>

					<Col lg={9}>
						<Row>
							{filteredRecipes.map((recipe) => (
								<ListCard key={recipe.id} items={recipe}>
									<Button
										as={Link}
										to={`/recipes/${recipe.id}`}
										variant="primary"
									>
										View Recipe
									</Button>
								</ListCard>
							))}
						</Row>
					</Col>
				</Row>

				<Row>
					<Pagination
						currentPage={currentRecipesPage}
						totalPages={totalRecipesPages}
						onPageChange={handleRecipesPageChange}
					/>
				</Row>
			</Container>
		</>
	);
};

export default RecipeList;
