// src/container/Container.jsx
import React, { useState, useEffect } from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import Game from "../components/Game";
import Score from "../components/Score";
import CategorySelection from "../components/CategorySelection";
import "../styles/Container.css";

const Container = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [score, setScore] = useState(0);
  const [styles, setStyles] = useState({});
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/data/quiz-game.json")
      .then((res) => res.json())
      .then((data) => {
        setStyles(data.styles);
        setQuestions(data.questions);
      });
  }, []);

  return (
    <div className="container" style={styles.container}>
      {!gameStarted ? (
        <WelcomeMessage
          onStart={() => setGameStarted(true)}
          styles={styles.welcome}
        />
      ) : selectedCategory ? (
        <Game
          category={selectedCategory}
          questions={questions.filter((q) => q.category === selectedCategory)}
          onEndGame={(finalScore) => {
            setScore(finalScore);
            setGameStarted(false);
            setSelectedCategory(null);
          }}
          styles={styles.game}
        />
      ) : (
        <CategorySelection
          onSelectCategory={setSelectedCategory}
          styles={styles.categorySelection}
        />
      )}
      <Score score={score} styles={styles.score} />
    </div>
  );
};

export default Container;
