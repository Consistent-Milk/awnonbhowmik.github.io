import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="row align-items-center gx-3">
          <div className="col-md-7 order-md-0 order-1">
            <div className="hero_content">
              <h1>
                Hi I'm <span className="name_char">A</span>wnon{" "}
                <span className="name_char">B</span>howmik
                <br />
                <span
                  className="typed"
                  data-typed-items="Researcher, Cryptographer, Developer, Educator"
                ></span>
              </h1>
              <p>
                An individual with a wide interest in topics of both mathematics and computer science.
              </p>

              <button type="button" className="button-resume" href="https://github.com/awnonbhowmik/Awnon-CV/blob/main/Awnon_CV.pdf">Download CV</button>
              <button className="button-resume scroll-to">Get in Touch</button>
            </div>
          </div>
          <div className="col-md-5  order-md-1 order-0">
            <div className="hero_img">
              <img
                src="/assets/img/banner.png"
                alt="Awnon Bhowmik"
                className="img-fluid rounded w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
