import React from "react";
import "./intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am </span>
          <span>Melik Bağrıyanık</span>
          <span>I am Frontend Developer</span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
      </div>
    </div>
  );
}

export default Intro;
