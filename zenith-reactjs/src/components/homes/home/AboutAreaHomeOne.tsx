const AboutAreaHomeOne = () => {
	return (
		<>
			<div className="section-space-md-y">
				<div className="container">
					<div className="row g-4 justify-content-xxl-between align-items-center">
						<div className="col-lg-6 col-xxl-5">
							<img
								src="assets/img/about_img_1.png"
								alt="image"
								className="img-fluid rounded-circle"
								data-cue="slideInUp"
							/>
						</div>
						<div className="col-lg-6">
							<div
								className="d-inline-flex align-items-center flex-wrap row-gap-2 column-gap-4"
								data-cue="fadeIn"
							>
								<div className="flex-shrink-0 d-inline-block w-20 h-2px bg-primary-gradient"></div>
								<span className="d-block fw-medium text-light fs-20">
									Explore Thoota:
								</span>
							</div>
							<h2 className="text-light" data-cue="fadeIn">
								AI Maths Learning Reimagined
							</h2>
							<p className="text-light mb-8 max-text-11" data-cue="fadeIn">
								Imagine maths help that actually gets you, hey? Our AI tutoring app is reimagined learning. It makes tough maths make sense, boosts your marks, and gives you proper confidence.
							</p>
							<ul className="list gap-6" data-cues="fadeIn">
								<li className="d-flex align-items-center gap-4">
									<span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary-gradient text-light fs-14">
										<i className="bi bi-arrow-up-right"></i>
									</span>
									<span className="d-block flex-grow-1 fw-medium text-light">
										Voice Lessons: Learn step-by-step with clear, conversational math tutoring.
									</span>
								</li>
								<li className="d-flex align-items-center gap-4">
									<span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary-gradient text-light fs-14">
										<i className="bi bi-arrow-up-right"></i>
									</span>
									<span className="d-block flex-grow-1 fw-medium text-light">
										Practice Anytime: Tackle problems with instant, helpful AI feedback.
									</span>
								</li>
								<li className="d-flex align-items-center gap-4">
									<span className="d-grid place-content-center flex-shrink-0 w-6 h-6 rounded-circle bg-primary-gradient text-light fs-14">
										<i className="bi bi-arrow-up-right"></i>
									</span>
									<span className="d-block flex-grow-1 fw-medium text-light">
										Results That Stick: Built for real progress in the classroom and beyond.
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutAreaHomeOne;
