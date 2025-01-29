// src/components/Game.jsx
import React, { useState } from "react";
import Question from "./Question";
import "../styles/Game.css";

const Game = ({ category, questions, onEndGame, styles }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onEndGame(score);
    }
  };

  return (
    <div className="game-container" style={styles.container}>
      <Question
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        styles={styles.question}
      />
    </div>
  );
};

export default Game;
