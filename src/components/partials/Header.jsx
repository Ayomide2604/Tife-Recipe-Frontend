import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import useAuthStore from "../../api/authStore";

const Header = () => {
	const { user, token, logout } = useAuthStore();

	return (
		<Navbar
			fixed="top"
			bg="dark"
			collapseOnSelect
			expand="lg"
			className="bg-body-tertiary"
		>
			<Container>
				<Navbar.Brand as={Link} to="/">
					Tife
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/about">
							About
						</Nav.Link>
						<Nav.Link as={Link} to="/recipes">
							Recipes
						</Nav.Link>
						<Nav.Link as={Link} to="/categories">
							Categories
						</Nav.Link>
						<Nav.Link as={Link} to="/contact">
							Contact Us
						</Nav.Link>
						{/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown> */}
					</Nav>
					<Nav>
						{token ? (
							<>
								<Nav.Link as={Link} to="/dashboard">
									Welcome, ({user?.username})
								</Nav.Link>
								<Nav.Link onClick={logout}>Logout</Nav.Link>
							</>
						) : (
							<>
								<Nav.Link as={Link} to="/login">
									Login
								</Nav.Link>
								{/* <Nav.Link as={Link} to="/signup">
									Signup
								</Nav.Link> */}
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
