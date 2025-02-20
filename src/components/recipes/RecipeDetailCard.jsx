import { Col, Row } from "react-bootstrap";
import RecipeInfo from "./RecipeInfo";
import Ingridients from "./Ingridients";

function RecipeDetailCard({ recipe }) {
	return (
		<Row>
			<RecipeInfo recipe={recipe} />
			<Col lg={6} sm={12} className="mb-4 mb-lg-0">
				<div className="recipe-image d-flex align-items-center justify-content-center">
					<img
						src={recipe.image}
						className="card-img-top rounded-5 mb-5"
						alt="recipe-image"
					/>
				</div>
			</Col>
			<Ingridients recipe={recipe} />
		</Row>
	);
}

export default RecipeDetailCard;
