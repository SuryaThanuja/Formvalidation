import React from 'react';


const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h2>{title}</h2>
      <ol>
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ol>
      {calories && <p>Calories: {calories}</p>}
      <img src={image} alt={title} />
    </div>
  );
};

export default Recipe;
