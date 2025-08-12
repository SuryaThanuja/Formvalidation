import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
      }
    } catch (err) {
      console.error('Failed to fetch recipes', err);
    }
  };

  const updateSearch = e => setSearch(e.target.value);

  const getSearch = e => {
    e.preventDefault();
    if (!search.trim()) return;
    setQuery(search.trim());
    setSearch('');
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', color: 'white', marginTop: '1rem' }}>Food Recipe App</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search recipes (eg: pasta, chicken, paneer)"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.length === 0 ? (
          <p style={{ color: 'white', textAlign: 'center', width: '100%' }}>
            No recipes found. Try another search.
          </p>
        ) : (
          recipes.map((r, idx) => (
            <Recipe
              key={r.idMeal}
              title={r.strMeal}
              calories={null} // TheMealDB doesn’t provide calories
              image={r.strMealThumb}
              ingredients={Array.from({ length: 20 }, (_, i) => r[`strIngredient${i + 1}`])
  .filter(Boolean)
  .map(ing => ing.trim())}

            
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
