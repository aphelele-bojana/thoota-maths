 

if (typeof window !== "undefined") {
  // require("bootstrap/dist/js/bootstrap");  
  import('bootstrap/dist/js/bootstrap.bundle.min.js');

}

const FaqHomeOne = () => {
  return (
    <>
      <div className="section-space-md-y">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div
                className="d-inline-flex align-items-center flex-wrap row-gap-2 column-gap-4"
                data-cue="fadeIn"
              >
                <div className="flex-shrink-0 d-inline-block w-20 h-2px bg-primary-gradient"></div>
                <span className="d-block fw-medium text-light fs-20">FAQ</span>
              </div>
              <h2 className="text-light" data-cue="fadeIn">
                Frequently Asked Questions
              </h2>
              <p data-cue="fadeIn">
                Thoota is a Maths tutor app designed for South African Grade 10–12 learners, offering ethical, step-by-step guidance to build real understanding, not just answers. With only 16% of matriculants scoring 60% or higher in Maths, Thoota helps learners master concepts, boost confidence, and maintain integrity in their studies.
              </p>
              <p className="mb-0" data-cue="fadeIn">
                Worried about cheating or ineffective learning tools? Thoota’s personalized, process-focused approach ensures students learn authentically, preparing them for exams and beyond.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="bg-dark-gradient p-6 p-xl-8 rounded-5">
                <div
                  className="accordion accordion--dark accordion-separate-body accordion--faq"
                  id="faqAccordion"
                  data-cues="fadeIn"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccordion1"
                        aria-expanded="true"
                        aria-controls="faqAccordion1"
                      >
                        How Does Thoota Prevent Cheating?
                      </button>
                    </h2>
                    <div
                      id="faqAccordion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body bg-dark">
                        Thoota is designed to promote learning, not cheating. Instead of providing full answers, it guides learners through each step of a problem, explaining the reasoning behind calculations. This process-focused approach ensures students develop their own understanding, ready for exams.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccordion2"
                        aria-expanded="false"
                        aria-controls="faqAccordion2"
                      >
                        How Does Thoota Support Personalized Learning?
                      </button>
                    </h2>
                    <div
                      id="faqAccordion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body bg-dark">
                        Thoota adapts to each learner’s needs, offering remedial drills for foundational skills or advanced challenges when ready. Whether you’re struggling with algebra in Grade 10 or trigonometry in Grade 12, Thoota tailors its guidance based on your quiz performance.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccordion3"
                        aria-expanded="false"
                        aria-controls="faqAccordion3"
                      >
                        Why Is Thoota Suitable for South African Learners?
                      </button>
                    </h2>
                    <div
                      id="faqAccordion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body bg-dark">
                        With only 50% of Grade 1 learners reaching matric and just 16% scoring 60% or higher in Maths, Thoota addresses South Africa’s unique challenges. It provides clear, step-by-step explanations to build understanding, helping learners in township schools and beyond succeed.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccordion4"
                        aria-expanded="false"
                        aria-controls="faqAccordion4"
                      >
                        What Makes Thoota Different from Other Maths Apps?
                      </button>
                    </h2>
                    <div
                      id="faqAccordion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body bg-dark">
                        Unlike standard calculators or answer engines, Thoota focuses on the learning process. It breaks problems into manageable steps, like identifying operations or choosing formulas, ensuring learners build reasoning skills, not just copy answers.
                      </div>
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

export default FaqHomeOne;
