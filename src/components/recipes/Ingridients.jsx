import { Col } from "react-bootstrap";
const Ingridients = ({ recipe }) => {
	return (
		<Col lg={6} sm={12}>
			<div className="border-0">
				<h3 className="card-title fw-bold">{recipe.name}</h3>
			</div>
			<div className="bg-primary-subtle rounded-5 mb-4 p-4">
				<h5 className="fw-bold">INGREDIENTS</h5>
				<div className="form-check border-bottom border-dark border-opacity-10 py-3">
					<input
						className="form-check-input border-white rounded-circle"
						type="checkbox"
						value=""
						id="flexCheckDefault1"
					/>
					<label className="form-check-label ps-1" htmlFor="flexCheckDefault1">
						4 boneless, skinless chicken breasts
					</label>
				</div>
				<div className="form-check border-bottom border-dark border-opacity-10 py-3">
					<input
						className="form-check-input border-secondary-subtle rounded-circle"
						type="checkbox"
						value=""
						id="flexCheckDefault2"
					/>
					<label className="form-check-label ps-1" htmlFor="flexCheckDefault2">
						2 lemons, juiced and zested
					</label>
				</div>
				<div className="form-check border-bottom border-dark border-opacity-10 py-3">
					<input
						className="form-check-input border-secondary-subtle rounded-circle"
						type="checkbox"
						value=""
						id="flexCheckDefault3"
					/>
					<label className="form-check-label ps-1" htmlFor="flexCheckDefault3">
						2 tablespoons fresh parsley, chopped
					</label>
				</div>
				<div className="form-check pt-3">
					<input
						className="form-check-input border-secondary-subtle rounded-circle"
						type="checkbox"
						value=""
						id="flexCheckDefault4"
					/>
					<label className="form-check-label ps-1" htmlFor="flexCheckDefault4">
						1 tablespoon fresh thyme leaves
					</label>
				</div>
			</div>
		</Col>
	);
};

export default Ingridients;
