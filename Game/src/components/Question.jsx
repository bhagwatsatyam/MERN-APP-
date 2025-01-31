import React, { useEffect, useState } from "react";
import "../styles/Question.css";

const Question = ({ onAnswerSelected, onQuizCompletion, styles }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    fetch("/mcq.json")
      .then((response) => response.json())
      .then((data) => {
        if (data.success && data.data && data.data.questions) {
          setQuestions(data.data.questions);
          shuffleOptions(data.data.questions[0]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
        setLoading(false);
      });
  }, []);

  const shuffleOptions = (question) => {
    if (!question) return;
    const options = [...question.options];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    setShuffledOptions(options);
  };

  useEffect(() => {
    if (questions.length > 0) {
      shuffleOptions(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex, questions]);

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (questions.length === 0) {
    return <div>No questions available.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (selectedOption) => {
    const isCorrect =
      selectedOption ===
      currentQuestion.options[currentQuestion.correctOptionsIndex];
    onAnswerSelected(isCorrect);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onQuizCompletion();
    }
  };

  const questionStyles = styles?.questions?.[1]?.landscape?.divs?.find(
    (div) => div.id === "question-title-1"
  )?.styles;

  const optionStyles = styles?.questions?.[1]?.landscape?.divs?.find(
    (div) => div.id === "option-1"
  )?.styles;

  return (
    <div className="question-container" style={questionStyles}>
      <h2>{currentQuestion.question}</h2>
      <div className="options-grid">
        {shuffledOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            style={optionStyles}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
