const recipeFormatter = (recipe) => {
  const obj = { recipe: {}, nutrients: {} };
  obj.recipe.label = recipe.label;
  obj.recipe.label = recipe.label;
  obj.recipe.steps = recipe.steps;
  obj.recipe.img_url = recipe.img_url;
  obj.recipe.src_url = recipe.src_url;
  obj.recipe.health_labels = recipe.health_labels;
  obj.recipe.ingredients = recipe.ingredients;

  obj.nutrients.protein = recipe.protein;
  obj.nutrients.fiber = recipe.fiber;
  obj.nutrients.carbs = recipe.carbs;
  obj.nutrients.fat = recipe.fat;
  obj.nutrients.energies = recipe.energies;

  return obj;
};

export default recipeFormatter;
