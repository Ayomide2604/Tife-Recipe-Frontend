import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./auth.css";

const Signup = () => {
	return (
		<div className="auth-container">
			<Row>
				<Col lg={6}>
					<div className="m-3">
						<h2>Sign up Page</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							quos.
						</p>
					</div>

					<div className="sign-up-image">
						<img src="login.png" alt="signup" />
					</div>
				</Col>

				<Col lg={6} className="login-container p-3">
					<Form className="login-form m-5 px-5 py-4">
						<h1 className="text-center mb-4">Create an account, it's free</h1>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								className="mb-3"
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								className="mb-3"
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Confirm Password"
								className="mb-3"
							/>
						</Form.Group>
						<p className="text-end mt-3">Forget Password?</p>
						<Button
							variant="primary"
							type="submit"
							className=" button w-100 mb-3"
						>
							Signup
						</Button>
						<p className="text-center">or continue with others</p>

						<div className=" sign-in-icons d-flex justify-content-center gap-3">
							<div className="sign-in-icons-button">
								<Button
									variant="secondary"
									className=" p-2 border-0"
									style={{ backgroundColor: "transparent", color: "darkred" }}
								>
									<i className="bi bi-google"></i>
								</Button>
							</div>
							<div className="sign-in-icons-button">
								<Button
									variant="secondary"
									className="p-2 border-0"
									style={{ backgroundColor: "transparent", color: "blue" }}
								>
									<i className="bi bi-facebook "></i>
								</Button>
							</div>
						</div>
						<p className="text-center">
							Already have an account? <Link to="/login">Login</Link>
						</p>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default Signup;
