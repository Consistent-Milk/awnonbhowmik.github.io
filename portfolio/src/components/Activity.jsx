import React from "react";

const Activity = () => {
  return (
    <section className="activities" id="Activity">
      <div className="container">
        <div className="section-title">
          <h2>What I Do</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bx bx-atom" style={{ color: "cyan" }}></i>
              <h3>Research</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bx bx-chalkboard" style={{ color: "yellow" }}></i>
              <h3>Teaching</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bx bx-chart" style={{ color: "green" }}></i>
              <h3>Tutoring</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4">
            <div className="icon-box">
              <i className="bx bx-code-block" style={{ color: "orange" }}></i>
              <h3>Coding</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4">
            <div className="icon-box">
              <i className="bx bx-code-alt" style={{ color: "blueviolet" }}></i>
              <h3>Web Development</h3>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4">
            <div className="icon-box">
              <i className="bx bx-game" style={{ color: "red" }}></i>
              <h3>Gaming</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
