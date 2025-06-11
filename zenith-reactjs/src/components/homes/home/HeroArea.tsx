import { Link } from "react-router-dom";

const HeroArea = () => {
	return (
		<>
			<div className="hero-1--container">
				<div className="hero-1">
					<div className="section-space-y">
						<div className="container">
							<div className="row g-4 align-items-center">
								<div className="col-lg-7 col-xl-6">
									<div
										className="d-inline-flex align-items-center flex-wrap row-gap-2 column-gap-4"
										data-cue="fadeIn"
									>
										<div className="flex-shrink-0 d-inline-block w-20 h-2px bg-primary-gradient"></div>
										<span className="d-block fw-medium text-light fs-20">
											Meet Thoota:
										</span>
									</div>
									<h1 className="text-light" data-cue="fadeIn">
										The AI <span className="text-gradient-primary">Maths Tutor</span>
									</h1>
									<p className="text-light mb-8 max-text-11" data-cue="fadeIn">
										Learn maths anytime with voice-powered lessons that make complex concepts simple, engaging, and easier to master.
									</p>
									<div
										className="d-inline-flex align-items-center flex-wrap row-gap-2 column-gap-6"
										data-cue="fadeIn"
									>
										<Link
											to="/contact"
											className="btn btn-primary-gradient text-white fs-14 border-0 rounded-pill"
										>
											<span className="d-inline-block">
												Try Thoota AI Tutor for free
											</span>
											<span className="d-inline-block">
												<i className="bi bi-arrow-right"></i>
											</span>
										</Link>
										<span className="d-inline-block text-light">
											No credit card required
										</span>
									</div>
								</div>
								<div className="col-lg-5 col-xl-6">
									<img
										src="assets/img/hero.png"
										alt="image"
										className="img-fluid"
										data-cue="fadeIn"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroArea;

