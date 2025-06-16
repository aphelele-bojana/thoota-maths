
const HowItWorksAreaHomeOne = ({style_2} : any) => {
	return (
		<>
			<div className={`${style_2 ? "section-space-md-bottom section-space-top" : "section-space-md-y"}`}>
			

				<div className="container">
				<div className="row g-4" data-cues="fadeIn">
					<div className="col-md-6 col-lg-4">
					<div className="process-card rounded-5 p-6 p-xl-10">
						<span className="d-inline-block h2 mb-8 text-light process-card__icon">
						<i className="bi bi-people" />
						</span>
						<h5 className="text-light process-card__title">
						Lesson
						</h5>
						<p className="mb-8">
							Talk-through lessons make maths clear and engaging.
						</p>
						<a
						className="btn process-card__btn text-white fs-14 border-0 rounded-pill"
						href="/about"
						>
						<span className="d-inline-block">Discover </span>
						<span className="d-inline-block">
							<i className="bi bi-arrow-right" />
						</span>
						</a>
					</div>
					</div>
					<div className="col-md-6 col-lg-4">
					<div className="process-card rounded-5 p-6 p-xl-10">
						<span className="d-inline-block h2 mb-8 text-light process-card__icon">
						<i className="bi bi-translate" />
						</span>
						<h5 className="text-light process-card__title">Practice</h5>
						<p className="mb-8">
							Smart practice adapts to every level and topic.
						</p>
						<a
						className="btn process-card__btn text-white fs-14 border-0 rounded-pill"
						href="/about"
						>
						<span className="d-inline-block">Discover </span>
						<span className="d-inline-block">
							<i className="bi bi-arrow-right" />
						</span>
						</a>
					</div>
					</div>
					<div className="col-md-6 col-lg-4">
					<div className="process-card rounded-5 p-6 p-xl-10">
						<span className="d-inline-block h2 mb-8 text-light process-card__icon">
						<i className="bi bi-gear-wide-connected" />
						</span>
						<h5 className="text-light process-card__title">
						Design
						</h5>
						<p className="mb-8">
						Thoughtfully designed for real classrooms and real results.
						</p>
						<a
						className="btn process-card__btn text-white fs-14 border-0 rounded-pill"
						href="/about"
						>
						<span className="d-inline-block">Discover </span>
						<span className="d-inline-block">
							<i className="bi bi-arrow-right" />
						</span>
						</a>
					</div>
					</div>
				</div>
				</div>
			</div>
		</>
	);
};

export default HowItWorksAreaHomeOne;
