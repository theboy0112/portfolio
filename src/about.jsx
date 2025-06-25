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
            <h1 className="abt-h1">My Social</h1>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button style={{ backgroundColor: "transparent" }}>
            <img src={nf}></img>
          </button>
          <button style={{ backgroundColor: "transparent" }}>
            <img src={fb}></img>
          </button>
          <button style={{ backgroundColor: "transparent" }}>
            <img src={x}></img>
          </button>
          <button style={{ backgroundColor: "transparent" }}>
            <img src={ig}></img>
          </button>
          <h2 style={{ backgroundColor: "black" }} className="abt-h1">
            ----------------------------------------------------------------------
          </h2>
          <h2 style={{ backgroundColor: "white" }} className="abt-h1">
            Things I Like
          </h2>
          <h2 style={{ backgroundColor: "black" }} className="abt-h1">
            ----------------------------------------------------------------------
          </h2>
          <h2 style={{ backgroundColor: "white" }} className="abt-h1">
            Things I Like
          </h2>
          <h1 className="abt-h1">Things I Like</h1>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <button style={{ backgroundColor: "transparent" }}>
            <img src={eat}></img>
          </button>
          <button style={{ backgroundColor: "transparent" }}>
            <img src={yt}></img>
          </button>
          <button style={{ backgroundColor: "transparent" }}>
            <img src={laptop}></img>
          </button>
          <button style={{ backgroundColor: "transparent" }}>
            <img src={nt}></img>
          </button>
        </div>

        <div className="right-column-about"></div>
      </div>
    </div>
  );
};

export default App;
