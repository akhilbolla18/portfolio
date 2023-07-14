import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      <a
        rel="noreferrer"
        href="https://github.com/akhilbolla18"
        className="home__social-icon"
        target="_blank"
      >
        <FiGithub />
      </a>
      <a
        rel="noreferrer"
        className="home__social-icon"
        href="https://www.linkedin.com/in/akhilbolla"
        target="_blank"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
