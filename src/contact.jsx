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
      
    </div>
  );
};

export default FlipCard;
