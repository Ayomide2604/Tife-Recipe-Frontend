import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getRecipeById } from "../../api/apiServices";
import { useNavigate } from "react-router-dom";
import "./recipes.css";
import RecipeDetailCard from "./RecipeDetailCard";
import ErrorPage from "../partials/ErrorPage";
import Loading from "../partials/Loading";

const RecipeDetail = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [recipe, setRecipe] = useState(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		getRecipeById(parseInt(id, 10))
			.then((data) => {
				setRecipe(data);
				setError(false);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, [id]);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <ErrorPage />;
	}

	return (
		<Container className=" recipe-container my-3 p-0">
			<Row className="recipe-hero">
				<Col lg={12}>
					<h1 className="text-center">{recipe.title}</h1>
				</Col>
				<Col lg={12}>
					<p className="text-center">{recipe.description}</p>
					<h6 className="d-flex align-items-center justify-content-center gap-2">
						<a href="#">
							<img
								src="https://iamosahan.com/wrapbootstrap-pillarix/recepe/img/profile/2.jpeg"
								alt="by-profile"
								className="img-fluid rounded-circle by-profile"
							/>
						</a>
						<span href="#">Boluwatife</span> <span>/</span> DEC 16, 2024
					</h6>
				</Col>

				<Col lg={12}>
					<div className="p-5">
						<div className="container pb-5">
							<div
								data-aos="zoom-out"
								data-aos-duration="2000"
								className="row justify-content-center aos-init aos-animate"
							>
								<RecipeDetailCard recipe={recipe} />
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default RecipeDetail;
