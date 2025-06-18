import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { blogs } from "../../data";
 


const BlogDetailsArea = () => {
	const { search } = useLocation();
	const queryParams = new URLSearchParams(search);
	const id = queryParams.get("id");
	const title = queryParams.get("title");

	const blog = blogs.find(item => item.id == id);

	
	console.log("id:", id);
	console.log("title:",title);
	console.log(blog);

	return (
		<>
			<div className="section-space-y">
				<div className="container">
					<div className="row g-4">
						<div className="col-lg-8">
							<img
								src={blog?.blogImage}
								alt="image"
								className="img-fluid"
							/>
							<div className="d-flex align-items-center row-gap-2 column-gap-6 flex-wrap mt-8 mb-4">
								<div className="d-flex row-gap-2 column-gap-3 align-items-center">
									<span className="d-inline-block flex-shrink-0">
										<i className="bi bi-calendar2-minus"></i>
									</span>
									<p className="mb-0 flex-shrink-0 fs-14">{blog?.date}</p>
								</div>
								<div className="d-flex row-gap-2 column-gap-3 align-items-center">
									<span className="d-inline-block flex-shrink-0">
										<i className="bi bi-people"></i>
									</span>
									<p className="mb-0 flex-shrink-0 fs-14">By Admin</p>
								</div>
								{/* <div className="d-flex row-gap-2 column-gap-3 align-items-center">
									<span className="d-inline-block flex-shrink-0">
										<i className="bi bi-chat-square-dots"></i>
									</span>
									<p className="mb-0 flex-shrink-0 fs-14">Comment</p>
								</div> */}
							</div>
							<h3 className="d-inline-block text-light">
								{blog?.title}
							</h3>
							<p className="mb-8">
								{blog?.content}
							</p>
							
							
							<div className="section-space-sm-y border-top border-bottom">
								<div className="row g-4 align-items-center">
									<div className="col-md-6">
										<ul className="list list-row align-items-center flex-wrap gap-3">
											<li>
												<span className="d-inline-block fw-bold text-light">
													Category:
												</span>
											</li>
											<li>
												<Link to="/blog" className="btn btn-light btn-sm">
													{blog?.category}
												</Link>
											</li>
										</ul>
									</div>
									<div className="col-md-6">
										<ul className="list list-row align-items-center justify-content-md-end flex-wrap gap-3">
											<li>
												<span className="d-inline-block fw-bold text-light">
													Share:
												</span>
											</li>
											<li>
												<a
													href="#"
													className="link d-grid place-content-center w-8 h-8 rounded-circle text-light border hover:text-primary hover:border-primary"
												>
													<i className="bi bi-facebook"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="link d-grid place-content-center w-8 h-8 rounded-circle text-light border hover:text-primary hover:border-primary"
												>
													<i className="bi bi-twitter"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="link d-grid place-content-center w-8 h-8 rounded-circle text-light border hover:text-primary hover:border-primary"
												>
													<i className="bi bi-linkedin"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* <div className="section-space-sm-y border-bottom">
								<h4 className="mb-8 text-light">Comments</h4>
								<ul className="list list-flush list-review">
									<li>
										<div className="d-flex flex-wrap flex-lg-nowrap gap-4 align-items-start pb-4">
											<div className="w-12 h-12 rounded-circle d-grid place-content-center flex-shrink-0">
												<img
													src="assets/img/user-img-8.png"
													alt="image"
													className="w-100 h-100 object-fit-cover"
												/>
											</div>
											<div className="flex-grow-1">
												<div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
													<h6 className="mb-0 fw-semibold text-light">
														Ronald Richards
													</h6>
													<div className="d-flex align-items-center gap-2">
														<span className="d-block fs-12 text-body-secondary">
															13 June, 2018, 7:30pm{" "}
														</span>
														<button
															type="button"
															className="btn btn-sm btn-dark"
														>
															Reply
														</button>
													</div>
												</div>
												<p className="mb-0 fs-14">
													In this challenge, we invite you to unleash your
													imagination and create and imagination incredible
													webpages, website sections, with the Scroll Speed
													Effect
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex flex-wrap flex-lg-nowrap gap-4 align-items-start py-4">
											<div className="w-12 h-12 rounded-circle d-grid place-content-center flex-shrink-0">
												<img
													src="assets/img/user-img-9.png"
													alt="image"
													className="w-100 h-100 object-fit-cover"
												/>
											</div>
											<div className="flex-grow-1">
												<div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
													<h6 className="mb-0 fw-semibold text-light">
														Leslie Alexander
													</h6>
													<div className="d-flex align-items-center gap-2">
														<span className="d-block fs-12 text-body-secondary">
															13 June, 2018, 7:30pm{" "}
														</span>
														<button
															type="button"
															className="btn btn-sm btn-dark"
														>
															Reply
														</button>
													</div>
												</div>
												<p className="mb-0 fs-14">
													In this challenge, we invite you to unleash your
													imagination and create and imagination incredible
													webpages, website sections, with the Scroll Speed
													Effect
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className="d-flex flex-wrap flex-lg-nowrap gap-4 align-items-start pt-4">
											<div className="w-12 h-12 rounded-circle d-grid place-content-center flex-shrink-0">
												<img
													src="assets/img/user-img-6.png"
													alt="image"
													className="w-100 h-100 object-fit-cover"
												/>
											</div>
											<div className="flex-grow-1">
												<div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
													<h6 className="mb-0 fw-semibold text-light">
														Annette Black
													</h6>
													<div className="d-flex align-items-center gap-2">
														<span className="d-block fs-12 text-body-secondary">
															13 June, 2018, 7:30pm{" "}
														</span>
														<button
															type="button"
															className="btn btn-sm btn-dark"
														>
															Reply
														</button>
													</div>
												</div>
												<p className="mb-0 fs-14">
													In this challenge, we invite you to unleash your
													imagination and create and imagination incredible
													webpages, website sections, with the Scroll Speed
													Effect
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="section-space-sm-top">
								<div className="bg-dark-gradient p-4 p-md-6 p-xl-8 rounded-4">
									<h4 className="text-light">Leave a Reply</h4>
									<p className="fs-14">
										Your email Address Not Be Published. Requied Fields are
										Marked
									</p>
									<div className="row g-4">
										<div className="col-12">
											<label className="form-label fs-14">Your Name</label>
											<div className="form-control--gradient rounded-1">
												<input
													type="text"
													className="form-control border-0 bg-transparent"
												/>
											</div>
										</div>
										<div className="col-12">
											<label className="form-label fs-14">Email Address</label>
											<div className="form-control--gradient rounded-1">
												<input
													type="email"
													className="form-control border-0 bg-transparent"
												/>
											</div>
										</div>
										<div className="col-12">
											<label className="form-label fs-14">
												How can help you?
											</label>
											<div className="form-control--gradient rounded-1">
												<textarea
													className="form-control border-0 bg-transparent"
													rows={4}
												></textarea>
											</div>
										</div>
										<div className="col-12">
											<button className="btn btn-primary-gradient text-white fs-14 border-0 rounded-1 w-100 justify-content-center">
												<span className="d-inline-block">Submit Now </span>
												<span className="d-inline-block">
													<i className="bi bi-arrow-right"></i>
												</span>
											</button>
										</div>
									</div>
								</div>
							</div> */}
						</div>
						<div className="col-lg-4">
							<div className="row g-4">
								<div className="col-12">
									<div className="p-4 p-md-6 p-xxl-8 bg-dark-gradient rounded-4">
										<h3 className="mb-0 text-gradient-primary">Recent Post</h3>
										<hr className="my-5" />
										<ul className="list gap-4">
											
											{blogs.slice(0,4).map(item => (
												<li>
												<div className="d-flex gap-4 align-items-center">
													<div className="d-grid place-content-center w-12 h-12 flex-shrink-0">
														<img
															src={item.blogImage}
															alt="image"
															className="img-fluid"
														/>
													</div>
													<div className="flex-grow-1">
														<div className="d-flex align-items-center gap-2 mb-1">
															<span className="d-inline-block fs-12">
																<i className="bi bi-calendar2-check"></i>{" "}
															</span>
															<span className="d-inline-block fs-12">
																{item.date}
															</span>
														</div>
														<Link
															to={`/blog-details?id=${item?.id}&title=${encodeURIComponent(item.title)}`}
															className="link d-inline-block fs-14 fw-medium text-light text-opacity-70 hover:text-opacity-100"
														>
															{item.title}
														</Link>
													</div>
												</div>
											</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogDetailsArea;
