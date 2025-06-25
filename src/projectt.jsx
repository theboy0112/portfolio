import React from "react";
import projectbg from "./assets/projectbg.jpg";
import android from "./assets/android.png";
import login from "./assets/login.png";
import kc from "./assets/kc.png";
import kingdes from "./assets/kingdes.png";
import hermit from "./assets/hermit.png";
import hermitdes from "./assets/hermitdes.png";
import "./index.css";
function Project() {
  return (
    <div class="main-container">
      <h1 className="ad-h">Android Studio</h1>
      <h2 className="ad-h"></h2>
      <div class="slider-wrapper">
        <div class="slider">
          <img id="slide-1" src={login} />
          <img id="slide-2" src={kc} />
          <img id="slide-3" src={kingdes} />
          <img id="slide-4" src={hermit} />
          <img id="slide-5" src={hermitdes} />
          <div class="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
            <a href="#slide-4"></a>
            <a href="#slide-5"></a>
            
          </div>
        </div>
        
      </div>
    </div>
  
 
  );
}

export default Project;
