import React, { useEffect, useState } from "react";
import Container from "./container/Container";
import "./App.css";

const App = () => {
  const [styles, setStyles] = useState(null);

  useEffect(() => {
    // Fetch the quiz-game.json file
    fetch("/quiz-game.json")
      .then((response) => {
        console.log("Response status:", response.status); // Debugging
        if (!response.ok) {
          throw new Error("Failed to fetch styles");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data); // Debugging
        setStyles(data.data);
      })
      .catch((error) => {
        console.error("Error loading styles:", error); // Debugging
      });
  }, []);

  if (!styles) {
    return <div>Loading styles...</div>;
  }

  return (
    <div className="App">
      <Container styles={styles} />
    </div>
  );
};

export default App;
