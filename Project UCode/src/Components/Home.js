import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">It's Time to Learn to Code!</h1>
          <p className="primary-text">
            Get started with you coding jouney today with free live classes and
            integrated assignments, you will have all the resources you need to
            succeed.
          </p>
          <button className="secondary-button">
            Get Started Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
          {/* <a href="https://www.vecteezy.com/free-png/coding">Coding PNGs by Vecteezy</a> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
