const fixtures = {
  recipes: {
    data: [
      {
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
      },
    ],
  },
  singleRecipe: {
    data: {
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
      label: "New Added Recipe",
      protein: 11426,
      src_url: "http://www.kitchendaily.com/recipe/bagel-bruschetta",
      weekday: null,
    },
  },
  user: {
    data: {
      created_at: "2020-04-14T21:47:43.396Z",
      email: "fake@gmail.com",
      first_name: "ff",
      id: 3,
      img_url: null,
      last_name: "ff",
      password_digest:
        "$2a$12$3k7YqnjPAJr9eTAc2cP0d.1MbQPt.rIe8YYvBuq4EXGJcZjc5OnYi",
      updated_at: "2020-04-14T21:47:43.396Z",
    },
  },
  searchResult: {
    hits: [
      {
        recipe: {
          label: "Chicken Vesuvio",
          image:
            "https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg",
          url:
            "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
          healthLabels: ["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free"],
          ingredientLines: [
            "1/2 cup olive oil",
            "5 cloves garlic, peeled",
            "2 large russet potatoes, peeled and cut into chunks",
            "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
            "3/4 cup white wine",
            "3/4 cup chicken stock",
            "3 tablespoons chopped parsley",
            "1 tablespoon dried oregano",
            "Salt and pepper",
            "1 cup frozen peas, thawed",
          ],
          totalNutrients: {
            ENERC_KCAL: {
              label: "Energy",
              quantity: 4055.7632762010808,
              unit: "kcal",
            },
            FAT: {
              label: "Fat",
              quantity: 274.44567658260667,
              unit: "g",
            },
            CHOCDF: {
              label: "Carbs",
              quantity: 137.1196827663874,
              unit: "g",
            },
            FIBTG: {
              label: "Fiber",
              quantity: 23.068875730861816,
              unit: "g",
            },
            PROCNT: {
              label: "Protein",
              quantity: 225.89009682764237,
              unit: "g",
            },
          },
        },
      },
    ],
  },
};

export default {
  get: jest.fn((url) => {
    if (/^(https)/.test(url)) {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.searchResult,
      });
    }
    if (/^(\/api\/users)/.test(url)) {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.recipes,
      });
    }
    if (/^(\/api\/logout)/.test(url)) {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
      });
    }
  }),
  post: jest.fn((url) => {
    if (/^(\/api\/login)/.test(url)) {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.user,
      });
    }
    if (/^(\/api\/recipe)/.test(url)) {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.singleRecipe,
      });
    }
  }),
  put: jest.fn(() =>
    Promise.resolve({ status: 204, statusText: "No Content" })
  ),
  delete: jest.fn(() =>
    Promise.resolve({ status: 204, statusText: "No Content" })
  ),
};
