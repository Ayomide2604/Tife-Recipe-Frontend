import { Row, Col } from "react-bootstrap";
const Hero = () => {
	return (
		<Row className="recipes-hero">
			<Col lg={12} className="d-flex justify-content-center align-items-center">
				<h1 className="">Recipes</h1>
			</Col>
			<Col lg={12}>
				<p className="text-center">
					Discover our collection of delicious recipes, from quick weeknight
					meals to gourmet dishes. Browse through our carefully curated
					selection and find your next culinary inspiration.
				</p>
			</Col>
		</Row>
	);
};

export default Hero;
