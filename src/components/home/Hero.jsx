import React from "react";
import { Col, Row } from "react-bootstrap";
const Hero = () => {
	return (
		<div className="hero">
			<Row>
				<Col lg={6}>
					<Col lg={12}>
						<h1 className="hero-title">Hero Title Content goes here</h1>
					</Col>
					<Col lg={12}>
						<p className=" my-3 ps-1  recipe-instructions">
							There are many variations of passages, but the majority have
							suffered alteration in some form, by injected humour, or
							randomised words which don't look even..
						</p>
					</Col>
				</Col>
				<Col lg={6}>
					<img src="homepage-hero.png" alt="" className="hero-image " />
				</Col>
			</Row>
		</div>
	);
};

export default Hero;
