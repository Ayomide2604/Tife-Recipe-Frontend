import React from "react";
import { Row, Col } from "react-bootstrap";
import { RiMapPin2Fill, RiSendPlaneFill, RiPhoneFill } from "react-icons/ri";

const Info = () => {
	return (
		<Col lg={6} sm={12} md={6}>
			<Col
				lg={12}
				sm={12}
				md={12}
				className="contact-info-item border rounded shadow p-3 mb-3"
			>
				<RiMapPin2Fill className="contact-info-icon" />
				<h3 className="contact-info-title">Physical Address</h3>
				<p className="contact-info-text">34 Iyalla Street, Lagos</p>
			</Col>
			<Col
				lg={12}
				sm={12}
				md={12}
				className="contact-info-item border rounded shadow p-3 mb-3"
			>
				<RiSendPlaneFill className="contact-info-icon" />
				<h3 className="contact-info-title">Email Address</h3>
				<p className="contact-info-text">info@tiferecipes.com</p>
			</Col>
			<Col
				lg={12}
				sm={12}
				md={12}
				className="contact-info-item border rounded shadow p-3 mb-3"
			>
				<RiPhoneFill className="contact-info-icon" />
				<h3 className="contact-info-title">Phone Numbers</h3>
				<p className="contact-info-text">+(234) 812-666-0484</p>
			</Col>
		</Col>
	);
};

export default Info;
