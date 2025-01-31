import React, { useState } from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import Question from "../components/Question";
import Score from "../components/Score";
import "../styles/Container.css";

const Container = ({ styles }) => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerSelected = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => ({
        ...prevScore,
        correct: prevScore.correct + 1,
      }));
    } else {
      setScore((prevScore) => ({
        ...prevScore,
        incorrect: prevScore.incorrect + 1,
      }));
    }
  };

  const handleQuizCompletion = () => {
    setQuizCompleted(true);
  };

  return (
    <div className="container">
      {!quizStarted ? (
        <WelcomeMessage onStartQuiz={handleStartQuiz} styles={styles} />
      ) : quizCompleted ? (
        <Score
          correct={score.correct}
          incorrect={score.incorrect}
          styles={styles}
        />
      ) : (
        <Question
          onAnswerSelected={handleAnswerSelected}
          onQuizCompletion={handleQuizCompletion}
          styles={styles}
        />
      )}
    </div>
  );
};

export default Container;
