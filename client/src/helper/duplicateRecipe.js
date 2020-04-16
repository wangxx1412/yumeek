export default (savedRecipes, newRecipe) => {
  const uniqueURL = newRecipe.src_url;
  for (let recipe of savedRecipes) {
    if (recipe.src_url === uniqueURL) {
      return true;
    }
  }
  return false;
};
