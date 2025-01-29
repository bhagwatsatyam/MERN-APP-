// src/components/CategorySelection.jsx
import React from "react";
import "../styles/CategorySelection.css";

const CategorySelection = ({ onSelectCategory, styles }) => {
  const categories = ["MUSIC", "HISTORY", "MOVIES", "TECHNOLOGY"];

  return (
    <div className="category-container" style={styles.container}>
      <h2>Select Category</h2>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          style={styles.button}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
