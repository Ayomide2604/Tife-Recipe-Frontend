import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ListCard from "../partials/ListCard";
import "./recipes.css";
import Pagination from "../partials/Pagination";
import Hero from "./Hero";
import RecipeFilter from "../partials/RecipeFilter";
import { Link } from "react-router-dom";

const RecipeList = ({
	recipes,
	categories,
	currentRecipesPage,
	totalRecipesPages,
	handleRecipesPageChange,
	error,
}) => {
	if (error) return <h1>There was an error fetching the recipes</h1>;

	return (
		<>
			<Container className="recipes-container my-3">
				<Hero />

				<Row>
					<RecipeFilter categories={categories} />

					<Col lg={9}>
						<Row>
							{recipes.map((recipe) => (
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
