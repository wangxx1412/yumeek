export default (savedRecipes, src, label) => {
  const recipe = savedRecipes.filter(item => item.src_url === src && item.label === label);
  return recipe;
}