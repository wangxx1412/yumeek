export default (savedRecipes, newRecipe) => {
  const uniqueURL = newRecipe.src_url;
  const duplicateRecipe = savedRecipes.find(
    (recipe) => recipe.src_url === uniqueURL
  );
  let res = [];
  if (duplicateRecipe) {
    res = savedRecipes.filter((recipe) => recipe.src_url !== uniqueURL);
    res.unshift(duplicateRecipe);
  }
  return res;
};
