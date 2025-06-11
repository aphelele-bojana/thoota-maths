import { Link } from "react-router-dom";

const FooterOne = ({ style_2 }: any) => {
  return (
    <>
      <footer className={`${style_2 ? "footer-2" : "footer-1"} text-center`}>
        <div className="section-space-md-y">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-xl-4 mx-auto">
<Link to="/" className="logo d-inline-flex align-items-center gap-2 mb-6 text-light text-decoration-none">
<img src="assets/img/logo.main.png" alt="logo" className="logo__img" />
  <span className="fs-4 fw-bold">Thoota</span>
</Link>

                <p className="mb-6">
                  Many desktop publishing packages and web page editors now use
                  as their default
                </p>
                <h6 className="text-light">Join On Our Newsletter</h6>
                <div className="d-flex align-items-center border-bottom border-light border-opacity-50 justify-content-center">
                  <input
                    className="form-control bg-transparent border-0 flex-grow-1 text-center"
                    type="email"
                    placeholder="Email Address"
                  />
                  <button
                    type="submit"
                    className="border-0 bg-transparent d-inline-block flex-shrink-0 text-light"
                  >
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>

              <div className="col-xl-8 mx-auto">
                <div className="row g-4 justify-content-center text-center">
                  <div className="col-sm-6 col-md-3">
                    <h5 className="text-light mb-8">Company</h5>
                    <ul className="list gap-2">
                      <li>
                        <Link to="/about" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">About Us</Link>
                      </li>
                      <li>
                        <Link to="/service" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">Our Mission</Link>
                      </li>
                      <li>
                        <Link to="/about" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">Company History</Link>
                      </li>
                      <li>
                        <Link to="/about" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/contact" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">Careers</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-sm-6 col-md-3">
                    <h5 className="text-light mb-8">Support</h5>
                    <ul className="list gap-2">
                      <li>
                        <Link to="/contact" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/about" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/about" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">Terms & Conditions</Link>
                      </li>
                      <li>
                        <Link to="/about" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">Cookies</Link>
                      </li>
                      <li>
                        <Link to="/faq" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">FAQ</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="col-sm-6 col-md-3 d-flex justify-content-center align-items-center">
                    <img
                      src="assets/img/owl_logo.PNG"
                      alt="Owl Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-space-xsm-y">
          <div className="container">
            <div className="row g-4 justify-content-center text-center">
              <div className="col-md-12">
                <p className="mb-0 fs-14">
                  {new Date().getFullYear()} &copy; All CopyCopyright Reserved
                </p>
              </div>
              <div className="col-md-12">
                <ul className="list list-row justify-content-center row-gap-2 column-gap-4">
                  <li>
                    <a href="#" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">Teams Of Services</a>
                  </li>
                  <li>
                    <a href="#" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="link text-light text-opacity-70 hover:text-opacity-100 fs-14">Cooke Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {style_2 && (
          <>
            <img
              src="assets/img/hero-2-shape-1.png"
              alt="image"
              className="img-fluid footer-2__shape-2"
            />
            <img
              src="assets/img/hero-2-shape-2.png"
              alt="image"
              className="img-fluid footer-2__shape-1"
            />
          </>
        )}
      </footer>
    </>
  );
};

export default FooterOne;
