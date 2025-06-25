import React from "react";
import "./flipcard.css";
import { useNavigate } from "react-router-dom";

const FlipCard = () => {
  const navigate= useNavigate();
  return (
    
    <div className="app-container">
      <div> <button
              onClick={() => navigate(`/#home`)}
              style={{
                position: "absolute",
                top: "0%",
                left: "0%",
                backgroundColor: "transparent",
                border: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              Portfolio
            </button></div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
             
            <h2>Clifbelle Cabrera</h2>
          </div>
          <div className="flip-card-back">
            <h3>
              Contact Us
              <ul>
                <li>8700</li>
                <li>099999123</li>
                <li>clifboy@email.com</li>
                <li>clifboycabrera12@gmail.com</li>
              </ul>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
