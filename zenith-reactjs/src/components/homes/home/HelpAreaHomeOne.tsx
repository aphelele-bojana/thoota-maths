import { Link } from "react-router-dom";

const HelpAreaHomeOne = () => {
  return (
    <>
      <div className="section-space-md-y">
        <div className="section-space-sm-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4" data-cues="fadeIn">
            <div className="col-md-4">
              <div className="process-card rounded-5 p-6 p-xl-10">
                <h5 className="text-light process-card__title">Get Thoota</h5>
                <p className="mb-8">Find our app in your favorite store.</p>
                <Link to="/contact" className="text-white fs-14">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-card rounded-5 p-6 p-xl-10">
                <h5 className="text-light process-card__title">Install Fast</h5>
                <p className="mb-8">One tap and it’s ready to go.</p>
                <Link to="/contact" className="text-white fs-14">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-card rounded-5 p-6 p-xl-10">
                <h5 className="text-light process-card__title">Learn Instantly</h5>
                <p className="mb-8">Speak, solve, and level up your maths.</p>
                <Link to="/contact" className="text-white fs-14">
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section-space-sm-top" data-cue="fadeIn">
          <div className="container">
            <div className="row">
              {/* <div className="col-12">
                <h6 className="text-center mb-0 text-light">
                  What Is Zenith Ai Chatbot Used For? For More Details. <span className="text-gradient-primary">Explore More Service !</span>
                </h6>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpAreaHomeOne;
