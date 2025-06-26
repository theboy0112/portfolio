import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
function project() {
  const navigate = useNavigate();
  return (
    <div class="app-container">
      <div>
        {" "}
        <button
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
        </button>
      </div>
    </div>
  );
}

export default project;
