export default (recipe) => { 
  const array = [
    {name: "Calories", value: recipe.energies, maxValue: 2400},
    {name: "Protein", value: recipe.protein, maxValue: 51},
    {name: "Fiber", value: recipe.fiber, maxValue: 25},
    {name: "Carbs", value: recipe.carbs, maxValue: 300},
    {name: "Fat", value: recipe.fat, maxValue: 65}
  ];
  return array;
}