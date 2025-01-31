import React from "react";
import "../styles/Score.css";

const Score = ({ correct, incorrect, styles }) => {
  const scoreStyles = styles?.questions?.[2]?.landscape?.divs?.find(
    (div) => div.id === "text-10"
  )?.styles;

  return (
    <div className="score" style={scoreStyles}>
      <h1>Quiz Completed!</h1>
      <p>Correct Answers: {correct}</p>
      <p>Incorrect Answers: {incorrect}</p>
    </div>
  );
};

export default Score;
