import React from "react";
import icon from "../Assets/icon-music.svg";

function Plan() {
  return (
    <div className="order-plan flex">
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div className="plan-details">
        <h3>Annual Plan</h3>
        <p>$59.99/year</p>
      </div>
      <div className="change-plan">
        <a href="#">Change</a>
      </div>
    </div>
  );
}

export default Plan;
