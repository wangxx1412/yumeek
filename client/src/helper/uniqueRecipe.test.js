import uniqueRecipe from "./uniqueRecipe";

describe("uniqueRecipe", () => {
  it("change the index of the duplicate recipe to the first 'index0'", () => {
    const savedRecipes = [
      { label: "first recipe", src_url: "testUrl1" },
      { label: "second recipe", src_url: "testUrl2" },
    ];
    const newRecipe = { label: "second recipe", src_url: "testUrl2" };
    const result = [...uniqueRecipe(savedRecipes, newRecipe)];
    expect(result).toEqual([
      { label: "second recipe", src_url: "testUrl2" },
      { label: "first recipe", src_url: "testUrl1" },
    ]);
  });
});
