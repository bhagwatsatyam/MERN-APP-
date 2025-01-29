// src/components/Question.jsx
import React from "react";
import Options from "./Options";
import "../styles/Question.css";

const Question = ({ question, onAnswer, styles }) => {
  return (
    <div className="question-container" style={styles.container}>
      <h3 style={styles.text}>{question.text}</h3>
      <Options options={question.options} correctAnswer={question.answer} onAnswer={onAnswer} styles={styles.options} />
    </div>
  );
};

export default Question;