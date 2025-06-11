const InstagramHomeOne = () => {
  return (
    <>
      <div className="section-space-md-top section-space-bottom">
        <div className="section-space-sm-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center text-light mb-0" data-cue="fadeIn">
                  Number of Active Students
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div
            className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 align-items-center justify-content-center"
            data-cues="fadeIn"
          >
            <div className="col text-center">
              <div
                className="card p-4 shadow-sm"
                style={{ backgroundColor: '#202424', color: '#fff' }}
              >
                <h3 className="fw-bold mb-2" style={{ color: '#fff' }}>1200</h3>
                <p className="mb-0">Active Learners</p>
              </div>
            </div>
            <div className="col text-center">
              <div
                className="card p-4 shadow-sm"
                style={{ backgroundColor: '#202424', color: '#fff' }}
              >
                <h3 className="fw-bold mb-2" style={{ color: '#fff' }}>100K+</h3>
                <p className="mb-0">Questions Solved</p>
              </div>
            </div>
            <div className="col text-center">
              <div
                className="card p-4 shadow-sm"
                style={{ backgroundColor: '#202424', color: '#fff' }}
              >
                <h3 className="fw-bold mb-2" style={{ color: '#fff' }}>47</h3>
                <p className="mb-0">Topics Mastered</p>
              </div>
            </div>
            <div className="col text-center">
              <div
                className="card p-4 shadow-sm"
                style={{ backgroundColor: '#202424', color: '#fff' }}
              >
                <h3 className="fw-bold mb-2" style={{ color: '#fff' }}>90K+</h3>
                <p className="mb-0">Voice Interactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstagramHomeOne;