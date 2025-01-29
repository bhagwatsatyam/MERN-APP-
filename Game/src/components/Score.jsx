// src/components/Score.jsx
import React from "react";
import "../styles/Score.css";

const Score = ({ score, styles }) => {
  return (
    <div className="score-container" style={styles.container}>
      <h2>Your Score: {score}</h2>
    </div>
  );
};

export default Score;
