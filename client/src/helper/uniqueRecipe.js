export default (savedRecipes, newRecipe) => {
  const uniqueURL = newRecipe.recipe.src_url;
  const res = savedRecipes.filter(
    (recipe) => recipe.recipe.src_url !== uniqueURL
  );
  return res;
};
