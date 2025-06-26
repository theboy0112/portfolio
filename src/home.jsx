import React from "react";
import bg from "./assets/bg.jpg"; //
import { useNavigate } from "react-router-dom";
import "./index.css";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 2rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
          }}
        >
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
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "1.5rem",
              margin: 0,
            }}
          >
            <li>
              <a href="#home" style={linkStyle}>
                Home
              </a>
            </li>
            <li onClick={() => navigate(`/project`)}>
              <a href="#project" style={linkStyle}>
                Project
              </a>
            </li>
            <li onClick={() => navigate(`/contact`)}>
              <a href="#contact" style={linkStyle}>
                Contact
              </a>
            </li>
            <li onClick={() => navigate(`/about`)}>
              <a href="#about" style={linkStyle}>
                About
              </a>
            </li>
            <li onClick={() => navigate(`/profile`)}>
              <a href="#contact" style={linkStyle}>
                Profile
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "500",
};

export default App;
