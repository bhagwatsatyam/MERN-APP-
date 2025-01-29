// src/components/WelcomeMessage.jsx
import React from "react";
import "../styles/WelcomeMessage.css";

const WelcomeMessage = ({ onStart, styles }) => {
  return (
    <div className="welcome-container" style={styles.container}>
      <h1 style={styles.text}>QUIZ GAME</h1>
      <button onClick={onStart} style={styles.button}>
        Start
      </button>
    </div>
  );
};

export default WelcomeMessage;