 

const GetInTouchHomeThree = () => {
  return (
    <>
       <div className="section-space-y">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-xl-between">
          <div className="col-lg-6"><span className="d-inline-block fs-20 fw-medium" data-cue="fadeIn" style={{color:"rgb(175 109 255)"}}>Get
              In touch</span>
            <h2 className="text-light" data-cue="fadeIn">Have any Project Plan In your Mind?</h2>
            <p className="mb-8" data-cue="fadeIn">Every great project starts with a single idea. If you have something in mind—big or small—we’d love to hear about it. Our team is ready to explore your vision, offer expert guidance, and help you bring your concept to life with smart, tailored solutions.</p>
            <ul className="list gap-6" data-cues="fadeIn">
              <li className="d-flex align-items-center gap-4"><span
                  className="d-grid place-content-center w-13 h-13 rounded-circle bg-primary-gradient text-light fs-24 lh-1 flex-shrink-0"><i
                    className="bi bi-phone-vibrate"></i></span>
                <div className="d-block flex-grow-1">
                  <p className="mb-0 fs-14">Reach out anytime at</p><span className="d-block fw-medium text-light">+ 27 10 900 5173</span>
                </div>
              </li>
              <li className="d-flex align-items-center gap-4"><span
                  className="d-grid place-content-center w-13 h-13 rounded-circle bg-primary-gradient text-light fs-24 lh-1 flex-shrink-0"><i
                    className="bi bi-envelope-at"></i></span>
                <div className="d-block flex-grow-1">
                  <p className="mb-0 fs-14">Drop us a message at</p><span
                    className="d-block fw-medium text-light">team@thooto.org</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="row g-4" data-cues="fadeIn">
              <div className="col-12"><label className="form-label fs-14">Your Name</label>
                <div className="form-control--gradient rounded-1"><input type="text"
                    className="form-control border-0 bg-transparent" /></div>
              </div>
              <div className="col-12"><label className="form-label fs-14">Email Address</label>
                <div className="form-control--gradient rounded-1"><input type="email"
                    className="form-control border-0 bg-transparent" /></div>
              </div>
              <div className="col-12"><label className="form-label fs-14">How can help you?</label>
                <div className="form-control--gradient rounded-1"><textarea className="form-control border-0 bg-transparent"
                    rows={4}></textarea></div>
              </div>
              <div className="col-12"><button
                  className="btn btn-primary-gradient text-white fs-14 border-0 rounded-1 w-100 justify-content-center"><span
                    className="d-inline-block">Submit Now </span><span className="d-inline-block"><i
                      className="bi bi-arrow-right"></i></span></button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default GetInTouchHomeThree;