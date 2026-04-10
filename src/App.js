import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeCard from "./components/recipecard/RecipeCard";

function App() {
  //loading state to show text while fetching data
  const [isLoading, setIsLoading] = useState(false);

  //controlled input value for the search bar
  const [searchQuery, setSearchQuery] = useState("");

  //stores the list of recipes returned from the API
  const [recipes, setRecipes] = useState([]);

  //function to search recipes from API
  const searchRecipes = async () => {
    try {
      setIsLoading(true); //start loading
      const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);

      //if API return null fallback to empty error
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]); //reset recipes on error
    } finally {
      setIsLoading(false); //stop loading
    }
  };

  //fetch default recipes on first load
  useEffect(() => {
    searchRecipes();
  }, []);

  return (
    <div className="App">
      <h1>Recipe App</h1>
      <RecipeCard />
    </div>
  );
}

export default App;
