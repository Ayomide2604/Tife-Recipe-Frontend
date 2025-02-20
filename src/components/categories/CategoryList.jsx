import React from "react";
import Pagination from "../partials/Pagination";
import { Container, Row, Col, Button } from "react-bootstrap";
import ListCard from "../partials/ListCard";
import { Link } from "react-router-dom";
import Loading from "../partials/Loading";
import ErrorPage from "../partials/ErrorPage";

const CategoryList = ({
	categories,
	loading,
	error,
	currentCategoriesPage,
	totalCategoriesPages,
	handleCategoriesPageChange,
}) => {
	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <h1>There was an error fetching the categories</h1>;
	}

	return (
		<div>
			<Container>
				<Row>
					<Col lg={12} className="text-center">
						<h1 className="text-center display-1">Categories</h1>
					</Col>
				</Row>
				<Row>
					{categories.map((category) => (
						<ListCard key={category.id} items={category}>
							<Link to={`/categories/${category.id}`}>
								<Button>View Category</Button>
							</Link>
						</ListCard>
					))}

					<Pagination
						currentPage={currentCategoriesPage}
						totalPages={totalCategoriesPages}
						onPageChange={handleCategoriesPageChange}
						error={error}
					/>
				</Row>
			</Container>
		</div>
	);
};

export default CategoryList;
