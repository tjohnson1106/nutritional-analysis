import React, { useEffect, useState } from "react";
import { Recipe } from "./components/Recipe";

export const Main: React.FC = () => {
  const APP_ID = "f5466f40";
  const APP_KEY = "585b1769b46056c2888b329f37bc0453";

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e: any) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe: any) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};
