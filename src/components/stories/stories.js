import React from "react";
import "./stories.css";
// icons
import {
  GiSoccerBall,
  GiTennisBall,
  GiBasketballBall,
  GiCricketBat,
  GiHorseHead,
} from "react-icons/gi";

const stories = () => {
  return (
    <div className="stories-container">
      <div>
        <div className="stories-icon">
          <GiHorseHead />
        </div>
        <div className="stories-item">Horse Racing</div>
      </div>
      <div className="active-stories">
        <div className="stories-icon active-icon">
          <GiSoccerBall />
        </div>
        <div className="stories-item">Soccer</div>
      </div>
      <div>
        <div className="stories-icon">
          <GiTennisBall />
        </div>
        <div className="stories-item">Tennis</div>
      </div>
      <div>
        <div className="stories-icon">
          <GiBasketballBall />
        </div>
        <div className="stories-item">Basketball</div>
      </div>
      <div>
        <div className="stories-icon">
          <GiCricketBat />
        </div>
        <div className="stories-item">Cricket</div>
      </div>
      <div>
        <div className="stories-icon">
          <GiSoccerBall />
        </div>
        <div className="stories-item">Whatever</div>
      </div>
    </div>
  );
};

export default stories;
