import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Melik</div>
        <div className="n-toggle">toggle</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          {" "}
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <button className="button">contact us</button>
      </div>
    </div>
  );
};

export default Navbar;
