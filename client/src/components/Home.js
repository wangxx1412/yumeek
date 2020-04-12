import React, { useState } from "react";
import SearchBar from "./homepage/SearchBar";
import RecipesCardsLists from "./homepage/RecipesCardsLists";

import sampleRecipes from "./homepage/example-recipes";

// SearchBar, RecipesCardsLists
export default function Home() {
  return (
    <div>
      <SearchBar />
      <RecipesCardsLists searchResultRecipes={sampleRecipes} />
    </div>
  );
}
