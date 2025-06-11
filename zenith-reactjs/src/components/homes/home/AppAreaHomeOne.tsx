import { Link } from "react-router-dom";

const AppAreaHomeOne = () => {
  return (
    <>
      <div className="section-space-md-y">
        <div className="section-space-sm-bottom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8 text-center">
                <div
                  className="d-inline-flex align-items-center flex-wrap row-gap-2 column-gap-4 justify-content-center"
                  data-cue="fadeIn"
                >
                  <div className="flex-shrink-0 d-inline-block w-40 h-3px bg-primary-gradient"></div>
                  <span className="d-block fw-medium text-light fs-24">
                    Join the Thoota Learning Circle
                  </span>
                </div>
                <h2 className="mb-4 text-light fs-3" data-cue="fadeIn">
                  Speak to Learn, Practice That Clicks, Support that Sticks
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row g-5 justify-content-center" data-cues="fadeIn">
            <div className="col-md-4">
              <div className="process-card rounded-5 p-8 p-xl-10 text-center">
                <h5 className="text-light mb-16 fs-4">Speak to Learn</h5>
                <Link
                  to="/service-details"
                  className="btn process-card__btn text-white fs-16 border-0 rounded-pill px-5 py-3"
                >
                  <span className="d-inline-block">
                    Chat with our tutor and get answers instantly.
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-card rounded-5 p-8 p-xl-10 text-center">
                <h5 className="text-light mb-16 fs-4">Practice That Clicks</h5>
                <Link
                  to="/service-details"
                  className="btn process-card__btn text-white fs-16 border-0 rounded-pill px-5 py-3"
                >
                  <span className="d-inline-block">
                    Engaging, bite-sized questions for school or self-study.
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="process-card rounded-5 p-8 p-xl-10 text-center">
                <h5 className="text-light mb-16 fs-4">Support that Sticks</h5>
                <Link
                  to="/service-details"
                  className="btn process-card__btn text-white fs-16 border-0 rounded-pill px-5 py-3"
                >
                  <span className="d-inline-block">
                    Empowering teachers and learners to reach their goals together.
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="section-space-sm-top" data-cue="fadeIn">
          <div className="container">
            <div className="row">
              {/* <div className="col-12 text-center">
                <Link
                  to="/service"
                  className="btn btn-primary-gradient text-white fs-16 border-0 rounded-pill px-5 py-3"
                >
                  <span className="d-inline-block">AI Powered Apps</span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppAreaHomeOne;
