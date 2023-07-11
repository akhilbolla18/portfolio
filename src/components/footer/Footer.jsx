import React from "react";
import "./footer.css";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"> - DEV AKHIL - </h1>
        <div className="footer__social">
          <a
            href="https://wa.me/qr/WAQNAZ4SKIPJJ1"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineWhatsApp />
          </a>
          <a
            href="https://github.com/akhilbolla18"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/akhilbolla"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://instagram.com/hey_akhil1?igshid=YmMyMTA2M2Y="
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default Footer;
