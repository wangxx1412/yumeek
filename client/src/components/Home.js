import React, { useState } from "react";
import SearchBar from "./homepage/SearchBar";
import RecipesCardsLists from "./homepage/RecipesCardsLists";

// SearchBar, RecipesCardsLists
export default function Home() {
  return (
    <div>
      <SearchBar />
      <RecipesCardsLists />
    </div>
  );
}
