import React, { useEffect, useState } from "react";
import "../styles/Question.css";

// Importing images
import HAPPY_BABY_1 from "../assets/HAPPY_BABY_1.png";
import HAPPY_BABY_2 from "../assets/HAPPY_BABY_2.png";
import HAPPY_SHARK from "../assets/HAPPY_SHARK.png";
import HAPPY_SHARK_2 from "../assets/HAPPY_SHARK_2.png";
import SAD_BABY from "../assets/SAD_BABY.png";
import SAD_SHARK from "../assets/SAD_SHARK.png";
import SAD_SHARK_2 from "../assets/SAD_SHARK_2.png";
import SAD_SHARK_3 from "../assets/SAD_SHARK_3.png";
import SAD_SHARK_4 from "../assets/SAD_SHARK_4.png";

// Arrays of happy and sad images
const happyImages = [HAPPY_BABY_1, HAPPY_BABY_2, HAPPY_SHARK, HAPPY_SHARK_2];
const sadImages = [SAD_BABY, SAD_SHARK_2, SAD_SHARK_3, SAD_SHARK_4, SAD_SHARK];

const Question = ({ onAnswerSelected, onQuizCompletion, styles }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);

  // Fetch questions on component mount
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

  // Shuffle options for each question
  const shuffleOptions = (question) => {
    if (!question) return;
    const options = [...question.options];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    setShuffledOptions(options);
  };

  // Handle next question and image update
  useEffect(() => {
    if (questions.length > 0) {
      shuffleOptions(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex, questions]);

  const handleOptionClick = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect =
      selectedOption ===
      currentQuestion.options[currentQuestion.correctOptionsIndex];
    onAnswerSelected(isCorrect);

    // Set the image based on the correctness of the answer
    if (isCorrect) {
      const randomHappyImage =
        happyImages[Math.floor(Math.random() * happyImages.length)];
      setCurrentImage(randomHappyImage);
    } else {
      const randomSadImage =
        sadImages[Math.floor(Math.random() * sadImages.length)];
      setCurrentImage(randomSadImage);
    }

    // Go to next question
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentImage(null); // Reset the image for the next question
      }, 1000); // Delay before moving to the next question
    } else {
      onQuizCompletion();
    }
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (questions.length === 0) {
    return <div>No questions available.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

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
      {currentImage && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <img
            src={currentImage}
            alt="Feedback"
            style={{ opacity: 1, width: "150px", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default Question;
