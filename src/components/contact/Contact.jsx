import React from "react";
import Info from "./Info";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import "./Contact.css";
import ContactForm from "./ContactForm";
const Contact = () => {
	return (
		<Container className="contact-container">
			<Row className="contact-header m-5 text-center">
				<Col lg={12}>
					<h1 className="contact-title">Contact</h1>
					<p className="contact-subtitle">
						Feel free to contact us for any questions or concerns.
					</p>
				</Col>
			</Row>

			<Row className="contact-card ">
				<ContactForm />
				<Info />
			</Row>
		</Container>
	);
};

export default Contact;
