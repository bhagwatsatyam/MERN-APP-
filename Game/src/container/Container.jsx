import React, { useState } from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import Question from "../components/Question";
import Score from "../components/Score";
import "../styles/Container.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "J.K. Rowling", "Ernest Hemingway"],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Silver", "Iron"],
    correctAnswer: "Oxygen",
  },
];

const Container = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleAnswerSelected = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
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

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="container">
      {!quizStarted ? (
        <WelcomeMessage onStartQuiz={handleStartQuiz} />
      ) : quizCompleted ? (
        <Score correct={score.correct} incorrect={score.incorrect} />
      ) : (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onAnswerSelected={handleAnswerSelected}
        />
      )}
    </div>
  );
};

export default Container;
