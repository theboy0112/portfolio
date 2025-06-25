import React from "react";
import { useNavigate } from "react-router-dom";
import luffy from "./assets/luffy.jpg";
import as from "./assets/as.png";
import javaaa from "./assets/javaaa.png";
import mysqll from "./assets/mysqll.png";
import bs from "./assets/bs.png";
import node from "./assets/node.png";
import react from "./assets/react.png";
import nest from "./assets/nest.png";
import php from "./assets/php.png";
import tailwind from "./assets/tailwind.png";
import express from "./assets/express.png";

function Profile() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="contact-container">
        <div className="left-column">
          <img src={luffy} alt="Profile" className="profile-pic" />

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
          <p>Clifbelle Cabrera</p>
          <p>Future Pirate King | Web Developer | Adventurer</p>
        </div>

        <div className="right-column">
          <div className="grid-section">
            <div className="card">
              <img src={as} alt="Luffy" className="card-image" />
              Android Studio
            </div>
            <div className="card">
              <img src={mysqll} alt="Luffy" className="card-image" />
              Mysql
            </div>
            <div className="card">
              <img src={javaaa} alt="Luffy" className="card-image" />
              Java
            </div>
            <div className="card">
              <img src={node} alt="Luffy" className="card-image" />
              Node.js
            </div>
            <div className="card">
              <img src={react} alt="Luffy" className="card-image" />
              React
            </div>
            <div className="card">
              <img src={nest} alt="Luffy" className="card-image" />
              NestJS
            </div>
            <div className="card">
              <img src={bs} alt="Luffy" className="card-image" />
              Bootstrap
            </div>
            <div className="card">
              <img src={php} alt="Luffy" className="card-image" />
              Php
            </div>
            <div className="card">
              <img src={express} alt="Luffy" className="card-image" />
              Express
            </div>
            <div className="card">
              <img src={tailwind} alt="Luffy" className="card-image" />
              Tailwind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
