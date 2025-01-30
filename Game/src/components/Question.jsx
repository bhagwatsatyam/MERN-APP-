import React from "react";
import "../styles/Question.css";

const Question = ({ question, options, onAnswerSelected }) => {
  return (
    <div className="question">
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswerSelected(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
