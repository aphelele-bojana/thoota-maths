
const HowItWorksAreaHomeOne = ({style_2} : any) => {
	return (
		<>
			<div className={`${style_2 ? "section-space-md-bottom section-space-top" : "section-space-md-y"}`}>
				<div className="section-space-sm-bottom">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-md-10 col-lg-8 col-xl-6">
								<div
									className="d-flex justify-content-center align-items-center flex-wrap row-gap-2 column-gap-4"
									data-cue="fadeIn"
								>
									<span className="d-block fw-medium text-light fs-20">		
										Your Maths Journey, Simplified
									</span>
									<h3 className="text-light text-center">Thoota simplifies Maths with smart, personalized AI support.
									</h3>
									<span className="d-block fw-medium text-light fs-20">
										Real Maths Help is Here
									</span>
									<h3 className="text-light text-center">
										Get unstuck. Get Thoota helping.
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row g-4" data-cues="fadeIn">
						<div className="col-md-6 col-lg-4">
							<div className="process-card rounded-5 p-6 p-xl-10">
								<h5 className="text-light process-card__title">
									{/* Human Like Intelligence */}
								</h5>
								<p className="mb-0">
									Talk-through lessons make maths clear and engaging.
								</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="process-card rounded-5 p-6 p-xl-10">
								<h5 className="text-light process-card__title">
									{/* Natural Language */}
								</h5>
								<p className="mb-0">
									Smart practice adapts to every level and topic.
								</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="process-card rounded-5 p-6 p-xl-10">
								<h5 className="text-light process-card__title">
									{/* Customizable Interface */}
								</h5>
								<p className="mb-0">
									Thoughtfully designed for real classrooms and real results.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HowItWorksAreaHomeOne;
