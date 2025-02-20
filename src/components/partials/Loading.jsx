import { Container, Spinner } from "react-bootstrap";
import "./partials.css";
const Loading = () => {
	return (
		<div className="loading-container">
			<Container
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100vh" }}
			>
				<Spinner animation="border" variant="scondary" />
			</Container>
		</div>
	);
};

export default Loading;
