import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import Detail from './Detail';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        setRecipes(data.meals || []);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [query]);

  const handleViewDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
   <>
    <div className="App">
      {selectedRecipe ? (
        <Detail recipe={selectedRecipe} onBack={handleBack} />
      ) : (
        <RecipeList recipes={recipes} onRecipeClick={handleViewDetail} setQuery={setQuery} />
      )}
    </div>
    </>
  );
};

export default App;
