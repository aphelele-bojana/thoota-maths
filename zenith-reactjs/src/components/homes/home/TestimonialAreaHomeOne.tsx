import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import { Navigation } from "swiper/modules";

const TestimonialAreaHomeOne = () => {
  return (
    <>
      <div className="section-space-md-top section-space-bottom">
        <div className="section-space-sm-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="d-flex justify-content-center align-items-center flex-wrap row-gap-2 column-gap-4"
                  data-cue="fadeIn">
                  <div className="flex-shrink-0 d-inline-block w-10 h-2px bg-primary-gradient"></div><span
                    className="d-block fw-medium text-light fs-20">Testimonials</span>
                </div>
                <h2 className="text-light text-center mb-0" data-cue="fadeIn">What Our Clients are Saying</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <Swiper
                slidesPerView={1}
                spaceBetween={8}
                loop={true}
                thumbs={{ swiper: null }}
                className="swiper testimonial-body">
                <SwiperSlide className="swiper-slide">
                  <p className="mb-6 text-center">‘’ Thoota made learning algebra so easy with its voice-powered lessons! I finally understand equations thanks to this amazing app. ’’</p>
                  <h6 className="text-light text-center mb-2">Sarah Johnson</h6><span
                    className="d-block text-light text-center mb-2">Happy Student</span>
                  <ul className="list list-row justify-content-center gap-1">
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <p className="mb-6 text-center">‘’ As a parent, I love how Thoota helps my child with geometry problems. The interactive lessons are a game-changer! ’’</p>
                  <h6 className="text-light text-center mb-2">Michael Chen</h6><span
                    className="d-block text-light text-center mb-2">Satisfied Parent</span>
                  <ul className="list list-row justify-content-center gap-1">
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <p className="mb-6 text-center">‘’ Thoota’s voice tutorials simplified calculus for me. Highly recommend it to all students! ’’</p>
                  <h6 className="text-light text-center mb-2">Emily Rodriguez</h6><span
                    className="d-block text-light text-center mb-2">Happy Student</span>
                  <ul className="list list-row justify-content-center gap-1">
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <p className="mb-6 text-center">‘’ Teaching math is easier with Thoota. My students love the engaging lessons! ’’</p>
                  <h6 className="text-light text-center mb-2">Dr. Alan Smith</h6><span
                    className="d-block text-light text-center mb-2">Educator</span>
                  <ul className="list list-row justify-content-center gap-1">
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <p className="mb-6 text-center">‘’ Thoota turned my fear of math into confidence. The voice feature is brilliant! ’’</p>
                  <h6 className="text-light text-center mb-2">Liam Patel</h6><span
                    className="d-block text-light text-center mb-2">Happy Student</span>
                  <ul className="list list-row justify-content-center gap-1">
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <p className="mb-6 text-center">‘’ Amazing app for practicing fractions. Thoota’s explanations are clear and concise. ’’</p>
                  <h6 className="text-light text-center mb-2">Aisha Khan</h6><span
                    className="d-block text-light text-center mb-2">Happy Student</span>
                  <ul className="list list-row justify-content-center gap-1">
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <p className="mb-6 text-center">‘’ Thoota helped my students master trigonometry with its interactive voice lessons. ’’</p>
                  <h6 className="text-light text-center mb-2">Mrs. Laura Evans</h6><span
                    className="d-block text-light text-center mb-2">Educator</span>
                  <ul className="list list-row justify-content-center gap-1">
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <p className="mb-6 text-center">‘’ The best math tutor app! Thoota’s voice lessons made statistics fun and easy to learn. ’’</p>
                  <h6 className="text-light text-center mb-2">James Lee</h6><span
                    className="d-block text-light text-center mb-2">Happy Student</span>
                  <ul className="list list-row justify-content-center gap-1">
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                    <li><span className="d-inline-block text-warning"><i className="bi bi-star-fill"></i></span></li>
                  </ul>
                </SwiperSlide>
              </Swiper>
              <div className="section-space-md-top">
                <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-7">
                    <div className="position-relative">
                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={8}
                        slidesPerView={3}
                        centeredSlides={true}
                        centeredSlidesBounds={true}
                        centerInsufficientSlides={true}
                        watchSlidesProgress={true}
                        loop={true}
                        navigation={{
                          nextEl: '.testimonial-nav__next',
                          prevEl: '.testimonial-nav__prev',
                        }}
                        breakpoints={{
                          0: { slidesPerView: 5 },
                          576: { slidesPerView: 5 },
                          1200: { slidesPerView: 6 },
                        }}
                        className="swiper testimonial-nav ">
                        {/* <div className="swiper-wrapper justify-content-center">
                        <SwiperSlide className="swiper-slide text-center">
                          <img src="assets/img/user-img-2.png" alt="image" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide text-center">
                          <img src="assets/img/user-img-3.png" alt="image" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide text-center">
                          <img src="assets/img/user-img-4.png" alt="image" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide text-center">
                          <img src="assets/img/user-img-5.png" alt="image" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide text-center">
                          <img src="assets/img/user-img-6.png" alt="image" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide text-center">
                          <img src="assets/img/user-img-3.png" alt="image" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide text-center">
                          <img src="assets/img/user-img-2.png" alt="image" className="img-fluid" />
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide text-center">
                          <img src="assets/img/user-img-3.png" alt="image" className="img-fluid" />
                        </SwiperSlide>
                        </div> */}
                      <div className="swiper-button-next testimonial-nav__next"><i className="bi bi-arrow-right"></i></div>
                      <div className="swiper-button-prev testimonial-nav__prev"><i className="bi bi-arrow-left"></i></div>
                      </Swiper>
                    </div>
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

export default TestimonialAreaHomeOne;