import { Link } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
const ErrorPage = () => {
	return (
		<Container fluid className="error-page-container  p-5 ">
			<Row>
				<Col
					lg={12}
					md={12}
					sm={12}
					className="error-text  text-center p-2 d-flex flex-column justify-content-center p-5 "
				>
					<span className="badge badge-pill col-2 align-self-center">
						We are Sorry :(
					</span>
					<h1>404 Not Found</h1>
					<p>Sorry, the page you are looking for does not exist.</p>
					<div>
						<Link to={"/contact"}>
							<button
								className=" btn  m-2"
								style={{ color: "white", backgroundColor: "#8b3dff" }}
							>
								Contact Us
							</button>
						</Link>
						<Link to={"/"}>
							<button
								className=" btn  m-2"
								style={{ color: "#8b3dff", border: "1px solid #8b3dff" }}
							>
								Go to Home
							</button>
						</Link>
					</div>
				</Col>
				{/* <Col lg={6} md={6} className="p-2">
					<img
						src="/error2.png"
						alt="error"
						className="error-image rounded-circle shadow-4-strong"
					/>
				</Col> */}
			</Row>
		</Container>
	);
};

export default ErrorPage;
