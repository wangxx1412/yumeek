import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchBar from "./homepage/SearchBar";
import RecipesCardsLists from "./homepage/RecipesCardsLists";
import axios from "axios";
import recipesDataHelper from "../helper/recipesDataHelper";

// SearchBar, RecipesCardsLists
export default function Home(props) {
  const { handleAdd } = props;
  const appInfo = `&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&from=0&to=100`;
  const apiBaseURL = `https://api.edamam.com/search?q=`;
  const [searchResult, setSearchResult] = useState([]);

  let history = useHistory();

  const handleRedirect = (recipe) => {
    history.push("/login", { recipe });
  };

  useEffect(() => {
    //!use conditonal here, to check if the search result if passing back
    const recipeList = [
      "chicken",
      "beef",
      "fish",
      "pepper",
      "carrot",
      "paste",
      "french fries",
      "ice cream",
      "bread",
      "pancakes",
      "burger",
      "pizza",
      "appal pie",
      "bagel",
    ];
    const randomRecipe =
      recipeList[Math.floor(Math.random() * recipeList.length)];
    axios
      .get(apiBaseURL + randomRecipe + appInfo)
      .then((response) => setSearchResult(recipesDataHelper(response)));
  }, []);

  const handleSearch = (value) => {
    axios
      .get(apiBaseURL + value + appInfo)
      .then((response) => setSearchResult(recipesDataHelper(response)));
    console.log("search", value);
  };

  return (
    <div>
      <SearchBar handleSearch={(value) => handleSearch(value)} />
      <RecipesCardsLists
        searchResultRecipes={searchResult}
        handleAdd={handleAdd}
        clickRecipe={(recipe) => {
          handleRedirect(recipe);
        }}
      />
    </div>
  );
}
