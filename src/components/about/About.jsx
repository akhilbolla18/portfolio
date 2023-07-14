import React from "react";
import "./about.css";
// import Info from "./Info";
// import CV from "../../assets/Example-Cv.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">A short introduction</span>
      <div className="about__container container grid">
        <p className="about__description">
          "Passionate Full Stack Developer dedicated to creating impactful and
          user-friendly web applications. With a strong foundation in both
          front-end and back-end development, I strive to deliver high-quality
          solutions that seamlessly blend functionality with aesthetic appeal.
          Constantly seeking opportunities to learn and grow, I stay up-to-date
          with the latest technologies and industry trends. My attention to
          detail, problem-solving skills, and ability to collaborate effectively
          make me a valuable asset in any development team. Let's connect and
          bring your ideas to life!"
        </p>
        <div className="buttons">
          <a href="#skills" className="button-outlline button--flex">
            Know More
          </a>
          <a
            download=""
            rel="noreferrer"
            target="_blank"
            href="https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/ccbp_prod/media/resume_generated/Bolla_2023-07-14-120418.pdf"
            className="button button--flex"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
