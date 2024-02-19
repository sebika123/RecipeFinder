import React from 'react';

const Detail = ({ recipe, onBack }) => {
  return (
    <div>
      <h2>{recipe.strMeal}</h2>
      <p>Category: {recipe.strCategory}</p>
      <p>Area: {recipe.strArea}</p>
      <p>Ingredients: {recipe.strIngredient1}, {recipe.strIngredient2}, ...</p>
      <p>Instructions: {recipe.strInstructions}</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default Detail;
