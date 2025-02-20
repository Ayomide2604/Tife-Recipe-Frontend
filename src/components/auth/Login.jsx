import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./auth.css";

import useAuthStore from "../../api/authStore";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Login = () => {
	const login = useAuthStore((state) => state.login);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || "/dashboard";

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		try {
			await login({ username, password });
			navigate(from, { replace: true });
		} catch (err) {
			setError(err?.non_field_errors || "Invalid credentials");
		}
	};

	return (
		<div className="auth-container">
			<Row>
				<Col lg={6}>
					<div className="m-3">
						<h2> Login Page</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							quos.
						</p>
					</div>

					<div className="login-image">
						<img src="" alt="login" />
					</div>
				</Col>

				<Col lg={6} className="login-container p-3">
					<Form className="login-form m-5 px-5 py-4" onSubmit={handleSubmit}>
						{error && <p className="error">{error}</p>}
						<h1 className="text-center mb-4">Login to continue</h1>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Username</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter Username"
								className="mb-3"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								className="mb-3"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
						<p className="text-end mt-3">Forget Password?</p>
						<Button
							variant="primary"
							type="submit"
							className=" button w-100 mb-3"
						>
							Login
						</Button>
						<p>or continue with others</p>

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
						<p>
							Don't have an account? <Link to="/signup">Sign up</Link>
						</p>
					</Form>
				</Col>
			</Row>
		</div>
	);
};

export default Login;
