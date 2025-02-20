const Newsletter = () => {
	return (
		<div className="newsletter-container py-5 ">
			<div className="row justify-content-center">
				<div className="col-xl-9 col-lg-10 col-md-11 col-12">
					<div
						data-aos="flip-down"
						data-aos-duration={1300}
						className="aos-init aos-animate"
					>
						<div className="row justify-content-center">
							<div className="col-xl-8 col-lg-9 col-md-10 col-12">
								<div className="text-center mb-5">
									<h3 className="fw-bold text-black">Newsletter Updates</h3>
									<p className="text-muted lead">
										Enter your email address below to subscribe to our tasty
										newsletter
									</p>
								</div>
								<div className="input-group gap-3">
									<input
										type="email"
										className="form-control rounded-pill py-3 px-3"
										placeholder="Your email address"
										aria-label="Your email address"
										aria-describedby="Email"
									/>
									<button
										className="btn  rounded-pill py-2 px-4"
										type="button"
										id="Email"
										style={{ backgroundColor: "#5243c2", color: "#fff" }}
									>
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
