import React from "react";
import { useHistory } from "react-router-dom";
import SearchBar from "./homepage/SearchBar";
import RecipesCardsLists from "./homepage/RecipesCardsLists";
import useSearchResult from "../hooks/useSearchResult";

// SearchBar, RecipesCardsLists
export default function Home(props) {
  const { handleAdd } = props;
  const { searchResult, handleSearch } = useSearchResult();

  let history = useHistory();

  const handleRedirect = (recipe) => {
    history.push("/login", { recipe });
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
