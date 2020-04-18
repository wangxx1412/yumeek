import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import RecipesCard from "../RecipesCard";

afterEach(cleanup);

const recipe = {
  carbs: 54211,
  energies: 353,
  fat: 10800,
  fiber: 5778,
  health_labels: [
    "Vegan",
    "Vegetarian",
    "Peanut-Free",
    "Tree-Nut-Free",
    "Alcohol-Free",
  ],
  id: 111,
  img_url:
    "https://www.edamam.com/web-img/ba8/ba8a5811573897526b861b452b30e48a.jpg",
  ingredients: [
    "2 tsp olive oil",
    "1 bagel Pepperidge Farm® 100% Whole Wheat Bagels, split",
    "1 clove garlic, cut in half",
    "1 tomato, diced",
    "1 Tbsp chopped fresh basil leaves",
    "freshly ground black pepper",
  ],
  label: "Bagel Bruschetta",
  protein: 11426,
  src_url: "http://www.kitchendaily.com/recipe/bagel-bruschetta",
  weekday: null,
};

describe("RecipeCard", () => {
  it("renders without crashing", () => {
    render(<RecipesCard recipe={recipe} />);
  });

  it("renders clickable label", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <RecipesCard recipe={recipe} clickRecipe={handleClick} />
    );

    const label = getByText("Bagel Bruschetta");

    fireEvent.click(label);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(recipe);
  });

  it("renders clickable 'Learn More' button", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <RecipesCard recipe={recipe} clickRecipe={handleClick} />
    );

    const label = getByText("Learn More");

    fireEvent.click(label);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(recipe);
  });

  it("renders clickable image", () => {
    const handleClick = jest.fn();
    const { getByTitle } = render(
      <RecipesCard recipe={recipe} clickRecipe={handleClick} />
    );

    const image = getByTitle("Bagel Bruschetta");

    fireEvent.click(image);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(recipe);
  });

  it("calls handleAdd function when click 'add' button", () => {
    const handleAdd = jest.fn();

    const { getByText } = render(
      <RecipesCard recipe={recipe} handleAdd={handleAdd} />
    );

    const button = getByText("Add");

    fireEvent.click(button);

    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd).toHaveBeenCalledWith(recipe);
  });
});
