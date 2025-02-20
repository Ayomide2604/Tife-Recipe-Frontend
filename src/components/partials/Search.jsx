import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Search = () => {
	return (
		<form>
			<Row className="d-flex justify-content-center align-items-center">
				<Col lg={11} md={11} sm={11} xs={11}>
					<input type="text" className="form-control" id="search-input" />
				</Col>
				<Col
					lg={1}
					md={1}
					sm={1}
					xs={1}
					className="d-flex justify-content-left"
				>
					<i className="search-icon bi bi-search text-black"></i>
				</Col>
			</Row>
		</form>
	);
};

export default Search;
