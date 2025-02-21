import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const RecipeFilter = ({
	categories,
	handleCategoryFilter,
	selectedCategory,
}) => {
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
						<div className="accordion-body">
							<div
								className="accordion-body"
								onClick={() => handleCategoryFilter(null)}
								style={{
									backgroundColor:
										selectedCategory === null ? "#CFE2FF" : "transparent",
								}}
							>
								All Recipes
							</div>
							{categories.map((category) => (
								<div
									key={category.id}
									className="accordion-body"
									onClick={() => handleCategoryFilter(category.id)}
									style={{
										backgroundColor:
											selectedCategory === category.id
												? "#CFE2FF"
												: "transparent",
									}}
								>
									{category.title}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Col>
	);
};

export default RecipeFilter;
