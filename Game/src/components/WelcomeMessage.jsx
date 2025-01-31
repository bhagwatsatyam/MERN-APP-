import React from "react";
import "../styles/WelcomeMessage.css";

const WelcomeMessage = ({ onStartQuiz, styles }) => {
  const welcomeStyles = styles?.questions?.[0]?.landscape?.divs?.find(
    (div) => div.id === "text-1"
  )?.styles;

  const buttonStyles = styles?.questions?.[0]?.landscape?.divs?.find(
    (div) => div.id === "btn-0"
  )?.styles;

  return (
    <div className="welcome-message" style={welcomeStyles}>
      <h1>Welcome to the Quiz!</h1>
      <button onClick={onStartQuiz} style={buttonStyles}>
        Start Quiz
      </button>
    </div>
  );
};

export default WelcomeMessage;
