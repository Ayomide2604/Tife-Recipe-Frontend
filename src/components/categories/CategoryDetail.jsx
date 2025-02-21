import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getCategoryById } from "../../api/apiServices";
import { useState, useEffect } from "react";
import Loading from "../partials/Loading";
import ErrorPage from "../partials/ErrorPage";
import ListCard from "../partials/ListCard";
import { Link } from "react-router-dom";

const CategoryDetail = () => {
	const { id } = useParams();
	const [category, setCategory] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	console.log(
		"category:",
		category.recipes.map((recipe) => recipe.image)
	);
	useEffect(() => {
		const fetchCategory = async () => {
			try {
				const data = await getCategoryById(id);
				setCategory(data);
			} catch (error) {
				console.error("Error fetching category:", error);
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchCategory();
	}, [id]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <ErrorPage />;
	}

	return (
		<div>
			<Container>
				<Row className="p-5 ">
					<Col lg={12} md={12} sm={12} className="text-center">
						<h1>{category.title}</h1>
					</Col>
				</Row>
				{category.recipes.length > 0 ? (
					<Row>
						{category.recipes.map((recipe) => (
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
				) : (
					<h1>No recipes found</h1>
				)}
			</Container>
		</div>
	);
};

export default CategoryDetail;
