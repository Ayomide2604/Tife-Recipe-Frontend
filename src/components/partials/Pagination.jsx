import React from "react";
import { Col } from "react-bootstrap";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	// Generate an array of pages [1, 2, 3, ..., totalPages]
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<>
			{pages.length <= 1 ? (
				""
			) : (
				<Col lg={12}>
					<div className="pagination-container text-center m-5 p-5">
						<nav aria-label="Page navigation example" className="mt-4">
							<ul className="pagination justify-content-center">
								{/* Previous Button */}
								<li
									className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
								>
									<button
										className="page-link btn-primary"
										onClick={() => onPageChange(currentPage - 1)}
										disabled={currentPage === 1}
									>
										Previous
									</button>
								</li>

								{/* Page Numbers */}

								{pages.map((page) => (
									<li
										key={page}
										className={`page-item ${
											currentPage === page ? "active" : ""
										}`}
									>
										<button
											className="page-link"
											onClick={() => onPageChange(page)}
										>
											{page}
										</button>
									</li>
								))}

								{/* Next Button */}
								<li
									className={`page-item ${
										currentPage === totalPages ? "disabled" : ""
									}`}
								>
									<button
										className="page-link"
										onClick={() => onPageChange(currentPage + 1)}
										disabled={currentPage === totalPages}
									>
										Next
									</button>
								</li>
							</ul>
						</nav>
					</div>
				</Col>
			)}
		</>
	);
};

export default Pagination;
