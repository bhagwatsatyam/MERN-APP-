import React from "react";
import "../styles/WelcomeMessage.css";

const WelcomeMessage = ({ onStartQuiz }) => {
  return (
    <div className="welcome-message">
      <h1>Welcome to the Quiz!</h1>
      <button onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default WelcomeMessage;
