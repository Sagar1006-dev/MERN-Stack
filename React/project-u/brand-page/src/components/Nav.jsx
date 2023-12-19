import React from "react";
import Brand from "../assets/images/brand_logo.png";
const Nav = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src={Brand} alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>login</button>
      </nav>
    </div>
  );
};

export default Nav;
