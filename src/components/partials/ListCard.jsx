import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./partials.css";

function ListCard({ items, children }) {
	return (
		<Col lg={4} md={6} sm={12} className="recipe-card mb-3">
			<Card className="overlay-card">
				<div className="imageoverlay">
					<Card.Img variant="top" src={items.image} className="recipe-image" />
					<div className="overlay-content">
						<Card.Title className="overlay-title">{items.title}</Card.Title>
					
						{children}
					</div>
				</div>
			</Card>
		</Col>
	);
}

export default ListCard;
