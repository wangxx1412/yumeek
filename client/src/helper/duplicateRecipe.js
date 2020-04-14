export default (savedRecipes, newRecipe) => {
  const uniqueURL = newRecipe.recipe.src_url;
  for (let recipe of savedRecipes) {
    if (recipe.recipe.src_url === uniqueURL) {
      return true;
    }
  }
  return false;
};
