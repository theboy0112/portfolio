import React from "react";
import bg from "./assets/bg.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import Project from "./project.jsx";
import Profile from "./profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
