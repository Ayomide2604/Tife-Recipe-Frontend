import { Col } from "react-bootstrap";
import { MdRestaurant } from "react-icons/md";
import { RiAlarmFill, RiCupFill, RiFireFill } from "react-icons/ri";

const RecipeInfo = ({ recipe }) => {
	return (
		<Col lg={12} sm={12} className="mt-5">
			<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-0 border mb-4 rounded-4 ">
				<div className="col border-end">
					<div className="text-center p-4">
						<MdRestaurant className="text-secondary" />
						<p className="fw-bold mb-0">Servings</p>
						<small className="text-muted">
							<span className="text-dark me-1">4</span>servings
						</small>
					</div>
				</div>
				<div className="col border">
					<div className="text-center p-4">
						<RiAlarmFill className="text-secondary" />
						<p className="fw-bold mb-0">Prep time</p>
						<small className="text-muted">
							<span className="text-dark me-1">30</span>minutes
						</small>
					</div>
				</div>
				<div className="col border">
					<div className="text-center p-4">
						<RiCupFill className="text-secondary" />
						<p className="fw-bold mb-0">Cooking time</p>
						<small className="text-muted">
							<span className="text-dark me-1">40</span>minutes
						</small>
					</div>
				</div>
				<div className="col">
					<div className="text-center p-4">
						<RiFireFill className="text-secondary" />
						<p className="fw-bold mb-0">Calories</p>
						<small className="text-muted">
							<span className="text-dark me-1">300</span>Kcal
						</small>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default RecipeInfo;
