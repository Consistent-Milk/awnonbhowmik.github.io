import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About </h2>
        </div>
        <div className="row about-row align-items-center">
          <div className="col-lg-4 text-center" data-aos="fade-right">
            <img src="/assets/img/about-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4  content" data-aos="fade-left">
            <h3>Mathematics Instructor &amp; Cryptography Enthusiast.</h3>
            <div className="row">
              <p align="justify">
                {" "}
                I am a former Ph.D. student at the University of Central Florida (UCF). Number theory and cryptography are two subjects that fascinate me. Despite the fact that mathematics is my core area, my interest in computers has grown over time, and striving to integrate the two has been a key part of my life in recent years. Beginning with QBasic, Pascal, and FORTRAN and on to modern languages like C++ and Python, I taught myself to program in a variety of languages utilizing books and other accessible resources. As a result, I've been able to work on a wide range of mathematical modeling and scientific computing projects. My interests also include computational mathematics and scientific computing. The majority of my work entails Python and C++ programming. I am also proficient in the typesetting language LaTeX.{" "}
              </p>
              <p align="justify">
                In addition to my scholarly pursuits, I am dedicated to mathematics outreach. In my opinion, it is vital that both undergraduate students and the general public have a greater understanding of what mathematics and mathematical research entail. In my opinion, there appears to be a significant lot of misunderstanding and misinformation concerning mathematics, particularly pure mathematics. My profession designates me as a Substiute Teacher at the New York City Department of Education. My current research focuses on building entirely new as well as hybrid cryptography protocols that are heavily based on concepts of number theory. I am also interested in computational mathematics related to various topics such as numerical analysis and simulation techniques. Apart from this, I am highly interested in exploring Mathematical Modeling and Fractal geometry.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
