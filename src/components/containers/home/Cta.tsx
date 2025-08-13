import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-two section pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xxl-11">
            <div
              className="cta-two-wrapper bg-img"
              style={{ backgroundImage: "url('/images/cta-two-bg.png')" }}
            >
              <div className="row gaper align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="cta-two__content">
                    <span>Hello !</span>
                    <h2 className="title-anim">Have a project? <br /> Let’s talk.</h2>
                    <h5>
                      <Link href="https://calendly.com/williamsmith-isbtechs/30min?month=2024-07" className="btn btn--tertiary">
                      Schedule Call
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="text-start text-lg-end">
                    <Link href="contact-us" className="btn btn--tertiary">
                      start a project
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
