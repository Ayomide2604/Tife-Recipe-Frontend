import { Container, Row, Col } from "react-bootstrap";
import Newsletter from "../partials/Newsletter";
import "./about.css";

const About = () => {
	return (
		<div className="about-container">
			<Container className="mt-5">
				<Row>
					<Col className="hero-text text-center mb-5">
						<h1>About us</h1>
						<p className="px-5 mx-5">
							Macaroon I love ice cream bear claw icing jelly beans jelly-o
							gingerbread cookie. Tootsie roll gummi bears liquorice brownie
							candy canes candy canes I love soufflé bear claw.
						</p>
					</Col>
				</Row>
				<Row fluid className="mb-3 p-3">
					<Col lg={6} className="our-story text-left ">
						<span className="mb-3 py-3">Our Story</span>
						<h2 className="my-5">Mauris Imperdiet Orci Dapibus Commodo Morbi in Faucibus.</h2>
						<p>
							Integer at faucibus urna. Nullam condimentum leo id elit sagittis
							auctor. Curabitur elementum nunc a leo imperdiet, nec elementum
							diam elementum. Etiam elementum euismod commodo.
						</p>
						<p>
							Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris.
							Phasellus egestas et risus sit amet hendrerit. Nulla facilisi.
							Cras urna sem, vulputate sed condimentum a, posuere vel enim.
						</p>
					</Col>
					<Col lg={6} className="our-story-img mb-3">
						<img src="our-story.jpg" alt="about" />
					</Col>
				</Row>
			</Container>
			<Newsletter />
		</div>
	);
};

export default About;
