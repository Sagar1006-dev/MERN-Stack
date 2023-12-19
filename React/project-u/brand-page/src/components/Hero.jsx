import React from "react";
import Flipcard from "../assets/images/flipkart.png";
import Amazon from "../assets/images/amazon.png";
import HeroImage from "../assets/images/hero-image.png";

const Hero = () => {
  return (
    <div>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            {" "}
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP OU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP OU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
          </div>
          <div className="shoping">
            <p>Also Available On</p>
            <div className="brand-icons">
              <img src={Flipcard} alt="flipcard" />
              <img src={Amazon} alt="amazon" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="hero-image" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
