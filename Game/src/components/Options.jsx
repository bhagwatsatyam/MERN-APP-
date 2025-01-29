import React from "react";
import "../styles/Options.css";

const Options = ({ options, correctAnswer, onAnswer, styles }) => {
  return (
    <div className="options-container" style={styles.container}>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option === correctAnswer)} style={styles.button}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;