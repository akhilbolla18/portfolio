import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">Bootstrap/Material UI</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">ReactJS (hooks)</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">CSS/Tailwind CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          <div className="skills__data">
            <HiCheckBadge />
            <div>
              <h3 className="skills__name">NextJS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
