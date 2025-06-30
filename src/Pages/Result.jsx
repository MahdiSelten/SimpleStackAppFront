import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Background images (replace with your own image paths or URLs)
import oceanCalm from "../images/ocean-calm.jpg";       // hopeful calm ocean
import oceanStorm from "../images/ocean-storm.jpg";     // stormy ocean sinking ship

const Result = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const prediction = location.state?.prediction;

  // Determine theme based on prediction
  const survived = prediction === 0;

  // Styles for survived vs not survived themes
  const pageStyle = {
    height: "100vh",
    backgroundImage: `url(${survived ? oceanCalm : oceanStorm})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: survived ? "#003366" : "#f5f5f5", // deep blue or light for contrast
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textShadow: survived
      ? "2px 2px 6px #a0d8ef"
      : "3px 3px 8px rgba(0,0,0,0.8)", // light shadow for survived, dark for not survived
    fontFamily: "'Georgia', serif",
    padding: "0 20px",
    transition: "background 0.5s ease"
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "30px",
    fontWeight: "bold",
  };

  const subTextStyle = {
    fontSize: "1.3rem",
    marginBottom: "50px",
    fontStyle: "italic",
    maxWidth: "600px",
    textAlign: "center",
    lineHeight: 1.5,
  };

  const buttonStyle = {
    backgroundColor: isHovered
      ? survived
        ? "linear-gradient(90deg, #007acc, #00aaff)"
        : "linear-gradient(90deg, #800000, #b22222)"
      : survived
      ? "#005f99"
      : "#660000",
    color: "white",
    padding: "14px 32px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: "1.2rem",
    fontWeight: "600",
    boxShadow: survived
      ? "0 4px 12px rgba(0, 122, 204, 0.6)"
      : "0 4px 12px rgba(139, 0, 0, 0.8)",
    transition: "background 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>
        You will likely <span style={{ color: survived ? "#009933" : "#ff4d4d" }}>
          {survived ? "Survive" : "Not Survive"}
        </span>
      </h1>
      <p style={subTextStyle}>
        {survived
          ? "The odds are in your favor — stay hopeful and strong just like those who made it through."
          : "The tides may be against you, but every story matters — may the memories sail on forever."}
      </p>
      <button
        type="button"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigate("/main")}
      >
        Try Again?
      </button>
    </div>
  );
};

export default Result;
