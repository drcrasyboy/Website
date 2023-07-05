import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Testimonial</p> */}
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Project UCode fosters innovation and education through a carefully curated curiculum aimed to allow students to gain a fudamental understanding of their choosen subject/field.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          The expert instructors at Project UCode helped me learn to program in Python from start to finish.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Hopper</h2>
      </div>
    </div>
    
  );
};

export default Testimonial;
