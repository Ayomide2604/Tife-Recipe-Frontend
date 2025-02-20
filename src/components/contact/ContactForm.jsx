import React from "react";
import { Col, Form, Button } from "react-bootstrap";

const ContactForm = () => {
	return (
		<Col
			lg={6}
			sm={12}
			md={6}
			className="contact-card-item border shadow-lg p-5 mb-3"
		>
			<h4 className="contact-card-title mb-3">Get In Touch</h4>
			<p className="contact-card-text mb-5">
				Fill out the form below to get in touch with us.
			</p>
			<Form className="contact-form">
				<Form.Group controlId="name" className="mb-3">
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Enter your name" />
				</Form.Group>
				<Form.Group controlId="email" className="mb-3">
					<Form.Label>Email</Form.Label>
					<Form.Control type="email" placeholder="Enter your email" />
				</Form.Group>
				<Form.Group controlId="subject" className="mb-3">
					<Form.Label>Subject</Form.Label>
					<Form.Control type="text" placeholder="Enter your subject" />
				</Form.Group>
				<Form.Group controlId="message" className="mb-3">
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						placeholder="Enter your message"
					/>
					<Button type="submit" className="submit-btn btn mt-3 col-12">
						Submit
					</Button>
				</Form.Group>
			</Form>
		</Col>
	);
};

export default ContactForm;
