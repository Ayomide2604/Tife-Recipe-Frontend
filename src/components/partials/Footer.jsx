import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./partials.css";

const Footer = () => {
	return (
		<>
			<nav className="footer ">
				<Container fluid className="p-0">
					<Row>
						<Col
							lg={4}
							className=" p-5"
							style={{ borderRight: "1px solid #6c757d" }}
						>
							<h5 className="text-white">Contact Us</h5>
							<Col lg={12} className="gap-4 d-grid justify-content-between ">
								<Col>
									<i class="bi bi-geo-alt"></i>

									<span>Address 234, Lagos, Nigeria</span>
								</Col>
								<Col>
									<i class="bi bi-telephone"></i>

									<span>(123) 456-7890</span>
								</Col>
								<Col>
									<i class="bi bi-envelope"></i>

									<span>email@gmail.com</span>
								</Col>
							</Col>
						</Col>
						<Col
							lg={4}
							className=" p-5"
							style={{ borderRight: "1px solid #6c757d" }}
						>
							<h5 className="text-white">Meet Tife</h5>
							<span>Introduction</span>
							<span>Recipes</span>
							<span>Our Chefs</span>
							<span>Pricing Plans</span>
							<span>Roadmap</span>
						</Col>
						<Col lg={4} className=" p-5">
							<h5 className="text-white">Useful Links</h5>
							<span>About Us</span>
							<span>App Features</span>
							<span>Cookies Policy</span>
							<span>Privacy Policy</span>
							<span>Terms & Conditions</span>
						</Col>

						<Col
							lg={12}
							className="d-flex justify-content-between align-items-center   p-5"
							style={{ borderTop: "1px solid #6c757d" }}
						>
							<Col lg={8}>
								<div className="d-flex gap-2 justify-content-left">
									<p>
										Copyright &copy; <strong>Tife</strong>. All Rights Reserved
									</p>
								</div>
							</Col>
							<Col lg={4}>
								<div className="d-flex gap-2 justify-content-end">
									<i class="bi bi-instagram p-3"></i>
									<i class="bi bi-facebook p-3"></i>
									<i class="bi bi-twitter p-3"></i>
									<i class="bi bi-youtube p-3"></i>
								</div>
							</Col>
						</Col>
					</Row>
				</Container>
			</nav>
		</>
	);
};

export default Footer;
