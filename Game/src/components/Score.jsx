import React from "react";
import "../styles/Score.css";

const Score = ({ correct, incorrect }) => {
  return (
    <div className="score">
      <h1>Quiz Completed!</h1>
      <p>Correct Answers: {correct}</p>
      <p>Incorrect Answers: {incorrect}</p>
    </div>
  );
};

export default Score;
