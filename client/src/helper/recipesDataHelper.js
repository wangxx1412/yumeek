export default (response) => {
  const recipesArr = response.data.hits;
  const res = [];
  for (let item of recipesArr) {
    const recipeObj = {};
    recipeObj.label = item.recipe.label;
    recipeObj.steps = null; //! we don't have steps
    recipeObj.img_url = item.recipe.image;
    recipeObj.src_url = item.recipe.url;
    recipeObj.health_labels = item.recipe.healthLabels;
    recipeObj.ingredients = item.recipe.ingredientLines;
    recipeObj.nutrients = {
      protein: parseInt(item.recipe.totalNutrients.PROCNT.quantity * 1000), // unit mg
      fiber: parseInt(item.recipe.totalNutrients.FIBTG.quantity * 1000), // unit mg
      carbs: parseInt(item.recipe.totalNutrients.CHOCDF.quantity * 1000), // unit mg
      fat: parseInt(item.recipe.totalNutrients.FAT.quantity * 1000), // unit mg
      energies: parseInt(item.recipe.totalNutrients.ENERC_KCAL.quantity), // unit kcal
    };
    res.push(recipeObj);
  }
  return res;
};
