import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Sign Up",
      text: "Click the get started button and start your journey towards a future in programming.",
    },
    {
      image: ChooseMeals,
      title: "Choose A Course",
      text: "Choose from our many courses that engage individual's minds.",
    },
    {
      image: DeliveryMeals,
      title: "Start Learning",
      text: "Learn using our instructor taught and supported system.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        {/* <p className="primary-subheading">Work</p> */}
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Sign up today and unlock a whole nother level of learning and innovation that is programming.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
