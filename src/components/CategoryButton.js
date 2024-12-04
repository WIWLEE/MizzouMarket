import React from 'react';
import "../pages/registerItem.css";

function CategoryButton({ category, onClick, isSelected }) {
  return (
    <button
      className={`category-button ${isSelected ? 'selected' : ''}`} // isSelected에 따라 'selected' 클래스를 추가
      onClick={onClick}
    >
      {category}
    </button>
  );
}

export default CategoryButton;
