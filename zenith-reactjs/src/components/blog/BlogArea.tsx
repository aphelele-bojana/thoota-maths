import { Link } from "react-router-dom";
import { blogs } from "../../data";

 
const BlogArea = () => {
	return (
		<>
			<div className="section-space-y">
				<div className="section-space-sm-bottom">
					<div className="container">
						<div className="row g-4 align-items-center">
							<div className="col-md-6">
								<h2 className="text-light mb-0" data-cue="fadeIn">
									Our Blogs
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row g-4" data-cues="fadeIn">
						{blogs.map((item, index) => (
													<div className="col-md-Link col-xl-4" key={index}>
													<Link to="/blog-details" className="link d-block mb-6">
														<img
															src={item.blogImage}
															alt="image"
															className="img-fluid"
														/>
													</Link>
													<div className="d-flex align-items-center flex-wrap gap-4 mb-2">
														<Link
															to="/blog"
															className="link d-inline-block text-light hover:text-primary fs-14"
														>
															{item.category}
														</Link>
														<span className="d-inline-block fs-14 d-inline-block text-light text-opacity-50">
															{item.date}
														</span>
													</div>
													<h5>
														<Link
															to="/blog-details"
															className="blog-title"
														>
															{item.title}
														</Link>
													</h5>
													<p className="fs-14 mb-6">
														{item.description}...
													</p>
													<Link
														to="/blog-details"
														className="btn btn-sm btn-outline-danger fs-14 rounded-pill"
													>
														<span className="d-inline-block">Read More</span>
														<span className="d-inline-block">
															<i className="bi bi-arrow-right"></i>
														</span>
													</Link>
												</div>
												))}
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogArea;
