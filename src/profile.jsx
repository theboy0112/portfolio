import React from "react";
import { useNavigate } from "react-router-dom";
import luffy from "./assets/luffy.jpg";
import gh from "./assets/gh.png";
import dc from "./assets/dc.png";


function Profile() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="app-container">
        <img src={luffy} alt="Profile" className="profile-pic" />
        <div className="center-profile">
          <h4>Software Developer | Pirate King</h4>
          <h1 className="try">Monkey D. Luffy</h1>
          <h3>Student Intern</h3>

          <h4>Github & Discord </h4>

          <button
            className="btm-btn"
            style={{ backgroundColor: "transparent" }}
            onClick={() =>
              window.open("https://github.com/theboy0112", "_blank")
            }
          >
            <img src={gh}></img>
          </button>

          <button
            className="btm-btn"
            style={{ backgroundColor: "transparent" }}
            onClick={() => window.open("https://discord.gg/Rg4uhYMN", "_blank")}
          >
            <img src={dc}></img>
          </button>
        </div>

        <div>
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
    </div>
  );
}
export default Profile;
