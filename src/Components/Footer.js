import React from "react";
// import { Outlet, Link } from "react-router-dom";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />

          <a href="https://www.linkedin.com/company/project-ucode/about/">
            <SiLinkedin />
          </a>

          <a href="https://www.youtube.com/@projectucode">
            <BsYoutube />
          </a>
    
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>About</span>
          <span>Help</span>
          <span>Share</span>
          <span>Testimonials</span>
          <a href="https://forms.gle/bYPoVRW6JondXuFh9"><span>Sign Up</span></a>
          {/* <span>Sign In</span> */}
        </div>
        <div className="footer-section-columns">
          {/* <span>244-5333-7783</span> */}
          <a href="mailto:info@projectucode.org"><span>info@projectucode.org</span></a>
          {/* <span>press@food.com</span>
          <span>contact@food.com</span> */}
        </div>
        <div className="footer-section-columns">
          <a href="https://drive.google.com/file/d/1__1xeszHEW3GdMBzNBrDQOD61SleHgkS/view?usp=sharing"><span>Terms & Conditions</span></a>
          <a href="https://drive.google.com/file/d/1mMSoepA8uy4SQNZyev5_NRNcS3eTLolC/view?usp=sharing"><span>Privacy Policy</span></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
