const InfoAreaHomeOne = () => {
  return (
    <>
      <div className="section-space-md-y info-section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="pe-xl-12" data-cue="slideInUp">
                <img src="assets/img/info_section_img.PNG" alt="image" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7">
              {/* <h2 className="h4 text-light mb-6" data-cue="fadeIn">
                "Thoota's AI Isn't Just Data; It's Maths Expertise Guiding Your Unique Learning Path"
              </h2> */}
              <div className="d-flex align-items-center gap-5" data-cue="fadeIn">
                <div className="d-grid place-content-center w-15 h-15 rounded-circle overflow-hidden flex-shrink-0">
                  <img src="assets/img/user_img_1.png" alt="image" className="w-100 h-100 object-fit-cover" />
                </div>
                <div className="flex-grow-1">
                  <h6 className="mb-0 text-light">Pauline Mokoena</h6>
                  <span className="d-block fs-14 text-light text-opacity-50">Education Expert</span>
                </div>
              </div>
              <div className="bg-dark-gradient p-4 p-sm-6 p-md-10 p-lg-6 p-xl-8 p-xxl-10 rounded-5" data-cue="fadeIn">
                <div className="row">
                  <div className="col-6 mb-4">
                    <h3 className="mb-2 text-light">100%</h3>
                    <p className="mb-0 text-opacity-50">Success: Trusted for real maths results.</p>
                  </div>
                  <div className="col-6 mb-4">
                    <h3 className="mb-2 text-light">75%</h3>
                    <p className="mb-0 text-opacity-50">Engagement: Voice and instant responses boost focus.</p>
                  </div>
                  <div className="col-6">
                    <h3 className="mb-2 text-light">60%</h3>
                    <p className="mb-0 text-opacity-50">Growth: Regular use improves maths performance.</p>
                  </div>
                  <div className="col-6">
                    <h3 className="mb-2 text-light">80%</h3>
                    <p className="mb-0 text-opacity-50">Improvement: Quick results with Thoota tutoring.</p>
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

export default InfoAreaHomeOne;
