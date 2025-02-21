import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const RecipeFilter = ({ categories }) => {
	return (
		<Col lg={3}>
			<h5 className="mb-4">Filter</h5>
			<div className="accordion mb-5 " id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
						>
							Categories
						</button>
					</h2>
					<div id="collapseOne" className="accordion-collapse collapse show">
						{categories.map((category) => (
							<div key={category.id} className="accordion-body">
								<Link to={`/categories/${category.id}`}>{category.title}</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</Col>
	);
};

export default RecipeFilter;
