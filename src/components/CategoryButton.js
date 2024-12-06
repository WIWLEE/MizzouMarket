import React from 'react';
import "../pages/registerItem.css";

function CategoryButton({ category, onClick, isSelected }) {
  return (
    <button
      className={`category-button ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      {category}
    </button>
  );
}

export default CategoryButton;
