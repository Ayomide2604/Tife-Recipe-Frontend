import React from "react";
import { Col, Row } from "react-bootstrap";
const Hero = () => {
	return (
		<div className="hero">
			<Row>
				<Col lg={6}>
					<Col lg={12}>
						<h1 className="hero-title">Tife's Recipes</h1>
					</Col>
					<Col lg={12}>
						<p className=" my-3 ps-1  recipe-instructions">
							Welcome to Tife's Recipes, your go-to source for delicious
							recipes. Here, you'll find a collection of recipes that are easy
							to make and sure to please your palate.
						</p>
					</Col>
				</Col>
				<Col lg={6}>
					<img src="/home/homepage-header.png" alt="" className="hero-image " />
				</Col>
			</Row>
		</div>
	);
};

export default Hero;
