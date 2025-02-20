import React from "react";
import useAuthStore from "../../api/authStore";
import { Container, Row, Col, Button } from "react-bootstrap";
import Pagination from "../partials/Pagination";
import { Link } from "react-router-dom";
import { deleteRecipe } from "../../api/apiServices";
import { useNavigate, useLocation } from "react-router-dom";
import RecipeFilter from "../partials/RecipeFilter";

const Dashboard = ({
	recipes,
	currentPage,
	totalPages,
	error,
	handlePageChange,
}) => {
	const { user } = useAuthStore();
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/dashboard";

	const handleDelete = async (id) => {
		if (!window.confirm("Are you sure you want to delete this recipe?")) return;

		try {
			await deleteRecipe(id);
			alert("Recipe deleted successfully!");
			navigate(from, { replace: true });
			window.location.reload();
		} catch (error) {
			console.error("Error deleting recipe:", error);
			alert(error.response?.data);
		}
	};

	return (
		<Container>
			<Row className="mt-3">
				<Col lg={6}>
					<h1>Dashboard Page</h1>
				</Col>
				<Col lg={6} className="text-end p-3">
					<Button as={Link} to="/recipes/add" className="btn btn-primary">
						Add Recipe
					</Button>
				</Col>
			</Row>
			<Row>
				<RecipeFilter />

				<Col lg={9} className="mt-3 mb-3">
					<table className="table table-striped ">
						<thead>
							<tr>
								<th>
									<h5>Title</h5>
								</th>
								<th>
									<h5>Image</h5>
								</th>
							</tr>
						</thead>
						<tbody className="table-group-divider border">
							{recipes.map((recipe) => (
								<tr key={recipe.id}>
									<td className="align-middle">
										<span className="fw-bold">{recipe.title}</span>
									</td>
									<td className="align-middle">
										<img
											src={recipe.image}
											alt={recipe.title}
											className="img-fluid border rounded-circle"
											style={{
												width: "100px",
												height: "100px",
												objectFit: "cover",
											}}
										/>
									</td>
									<td className="text-center align-middle ">
										<Button
											as={Link}
											to={`/recipes/${recipe.id}/edit`}
											className="btn btn-primary mx-3 "
										>
											Edit
										</Button>
										<button
											onClick={() => handleDelete(recipe.id)}
											className="btn btn-danger "
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						error={error}
						onPageChange={handlePageChange}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
