export default (recipe) => { 
  const array = [
    {name: "Calories", value: recipe.energies, maxValue: 2000},
    {name: "Protein", value: recipe.protein, maxValue: 51.16},
    {name: "Fiber", value: recipe.fiber, maxValue: 25},
    {name: "Carbs", value: recipe.carbs, maxValue: 300},
    {name: "Fat", value: recipe.fat, maxValue: 64.44}
  ];
  return array;
}