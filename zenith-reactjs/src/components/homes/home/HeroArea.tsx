// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';
import './home.scss'

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
										The AI <span style={{color: "rgb(175 109 255)"}}>Maths Tutor</span>
									</h1>
									<p className="text-light mb-8 max-text-11" data-cue="fadeIn">
										Learn maths anytime with voice-powered lessons that make complex concepts simple, engaging, and easier to master.
									</p>
									<div
										className="d-inline-flex align-items-center flex-wrap row-gap-2 column-gap-6"
										data-cue="fadeIn"
									>
										<div className="google-play-button">
											<i className="bi bi-google-play"></i>
											<Link to="https://play.google.com/store/apps/details?id=com.companyname.thootaui">
												<span>Get it on Google Play</span>
											</Link>
										</div>
										<div className="app-store-button" aria-disabled style={{cursor:"not-allowed"}}>
											<i className="bi bi-apple"></i>
											<span>Download on the App Store</span>
										</div>
										
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
				<div className="section-space-md-y">
					<div className="section-space-sm-bottom">
						<div className="container">
						<div className="row">
							<div className="col-12">
							<h3 className="mb-0 text-light text-center color-grey-200" data-cue="fadeIn">
								Trusted by <span style={{color:"rgb(175, 109, 255)"}}>2000+</span> students, parents, and educators worldwide
							</h3>
							</div>
						</div>
						</div>
					</div>
					<div className="container">
						<div className="row">
						<div className="col-12">
							<ul
							className="list list-row flex-wrap justify-content-center align-items-center row-gap-2 column-gap-8 column-gap-xl-12 column-gap-xxl-15"
							data-cues="fadeIn"
							data-group="images"
							>
							<li className="text-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-microsoft svg-icons" viewBox="0 0 16 16">
								<path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z"/>
								</svg>
							</li>
							<li className="text-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="currentColor" className="bi bi-amazon svg-icons" viewBox="0 0 16 16">
								<path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a90 90 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0 6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387.176-.857.896-1.271 1.703-1.271.435 0 .929.16 1.188.55.264.39.26.91.257 1.376v.432q-.3.033-.621.065c-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298 1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133-.336.595-.87.961-1.465.961-.812 0-1.286-.619-1.286-1.533M.435 12.174c2.629 1.603 6.698 4.084 13.183.997.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16 3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299z"/>
								<path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204.135.176-.004.966-.233 1.533-.23.563-.572.961-.762 1.115s-.333.094-.23-.137c.105-.23.684-1.663.455-1.963-.213-.278-1.177-.177-1.625-.13l-.09.009q-.142.013-.233.024c-.193.021-.245.027-.274-.032-.074-.209.779-.556 1.347-.623"/>
								</svg>
							</li>
							<li className="text-center">
								<img
								src="assets/img/paramlogo.svg"
								alt="image"
								className="img-fluid svg-icons"
								/>
							</li>
							<li className="text-center">
								<img
								src="assets/img/thoota.svg"
								alt="image"
								className="img-fluid svg-icons"
								/>
							</li>
							</ul>
						</div>
						</div>
					</div>
				</div>

			</div>
		</>
	);
};

export default HeroArea;

