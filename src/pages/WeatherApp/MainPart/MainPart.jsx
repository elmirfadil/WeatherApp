import React from "react";
import img from "../../../images/img.png";
import img1 from "../../../images/img.png";
import "./MainPart.css";

const MainPart = () => {
  return (
    <div id="mainPart">
      <div className="container">
        <div className="mainPart">
          <div className="mainPart-block">
            <img
              src={img}
              alt=""
              style={{
                width: "300px",
              }}
            />
          </div>

          <div className="mainPart_mini">
            <img
              src={img1}
              alt=""
              style={{
                width: "50px",
              }}
            />
            <h1>Breeze</h1>
            <h4>Weather App</h4>
            <button>Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPart;
