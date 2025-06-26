import React from "react";

import "./index.css";
import { useNavigate } from "react-router-dom";
import nf from "./assets/nf.png";
import fb from "./assets/fb.png";
import yt from "./assets/yt.png";
import ig from "./assets/ig.png";
import x from "./assets/x.png";
import eat from "./assets/eat.png";
import nt from "./assets/nt.png";
import laptop from "./assets/laptop.png";
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
import tg from "./assets/tg.png";
import loop from "./assets/loop.png";
import zzz from "./assets/zzz.png";
<link rel="stylesheet" href="animate.css"/>

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="app-container">
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
      <div className="container-about">
        <div className="left-column-about">
          <div>
             <h1> printf("Eat Sleep Code Repeat")</h1>
          <button className="animate__animated animate__bounce animate__infinite" style={{ backgroundColor: "transparent" }}>
            <img src={eat}></img>
          </button>
          <button className="animate__animated animate__bounce animate__infinite" style={{ backgroundColor: "transparent" }}>
            <img src={zzz}></img>
          </button>
          <button className="animate__animated animate__bounce animate__infinite"style={{ backgroundColor: "transparent" }}>
            <img src={laptop}></img>
          </button>
            <h1>Social Media Accounts</h1>
          </div>

          <button
            style={{ backgroundColor: "transparent" }}
            onClick={() =>
              window.open("https://www.facebook.com/yourprofile", "_blank")
            }
          >
            <img src={fb}></img>
          </button>
          <button style={{ backgroundColor: "transparent" }}>
            <img src={tg}></img>
          </button>
          <button style={{ backgroundColor: "transparent" }}>
            <img src={ig}></img>
          </button>
          <button style={{ backgroundColor: "transparent" }}>
            <img src={nf}></img>
          </button>
          <button style={{ backgroundColor: "transparent" }}>
            <img src={x}></img>
          </button>

         
        </div>

        <div className="right-column-about">
          
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
  );
};

export default App;
