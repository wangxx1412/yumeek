import React, { useState } from "react";
import SearchBar from "./homepage/SearchBar";
import RecipesCardsLists from "./homepage/RecipesCardsLists";

import sampleRecipes from "./homepage/example-recipes"; //! sample

// SearchBar, RecipesCardsLists
export default function Home() {
  const handleSearch = (value) => {
    //! search recipe to API
    console.log("search", value);
  };

  return (
    <div>
      <SearchBar handleSearch={(value) => handleSearch(value)} />
      <RecipesCardsLists searchResultRecipes={sampleRecipes} />
    </div>
  );
}
