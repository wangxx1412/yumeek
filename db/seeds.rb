# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

puts 'Seeding Data ...'

# Users
puts 'Seeding Users ...'

user1 = User.create(
  first_name: 'Jane',
  last_name: 'Doe',
  email: 'janedoe@email.com',
  password: 'pw1234',
  img_url: open_asset('apparel1.jpg')
)

# Recipes
puts 'Seeding Recipes ...'

# health_labels and ingredients are comma separated string
recipe1 = Recipe.create(
  label: 'Chicken Vesuvio',
  steps: "Heat an oven to 325°F. In a roasting pan (or a large (14-inch) oven-proof skillet), heat the olive oil over medium until shimmering. Add the potatoes and garlic and cook until golden brown, about 12 minutes. Remove to a plate, leaving behind as much oil as possible.\n
          Add the chicken to the skillet, skin-side down. Cook until golden and crisp, then turn and cook the other side until golden as well. Add the wine and cook until it reduces by half.\n
          Return the garlic and potatoes to the pan, along with the chicken stock, parsley, oregano, and a pinch of salt and pepper. Transfer to the oven and cook, uncovered, until the chicken is cooked through, about 45 minutes. Add the peas to the pan with 5 minutes left in the cooking time. Serve with the roasting juices in the pan.\n",
  img_url: 'https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg',
  src_url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
  health_labels: ['Sugar-Conscious','Peanut-Free','Tree-Nut-Free'],
  ingredients: ['1/2 cup olive oil','5 cloves garlic, peeled','2 large russet potatoes, peeled and cut into chunks','1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)','3/4 cup white wine','3/4 cup chicken stock','3 tablespoons chopped parsley','1 tablespoon dried oregano','Salt and pepper','1 cup frozen peas, thawed']
)

recipe2 = Recipe.create(
  label: 'Chicken Paprikash',
  steps: "Heat an oven to 325°F. In a roasting pan (or a large (14-inch) oven-proof skillet), heat the olive oil over medium until shimmering. Add the potatoes and garlic and cook until golden brown, about 12 minutes. Remove to a plate, leaving behind as much oil as possible.\n
          Add the chicken to the skillet, skin-side down. Cook until golden and crisp, then turn and cook the other side until golden as well. Add the wine and cook until it reduces by half.\n
          Return the garlic and potatoes to the pan, along with the chicken stock, parsley, oregano, and a pinch of salt and pepper. Transfer to the oven and cook, uncovered, until the chicken is cooked through, about 45 minutes. Add the peas to the pan with 5 minutes left in the cooking time. Serve with the roasting juices in the pan.\n",
  img_url: 'https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg',
  src_url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
  health_labels: ['Sugar-Conscious','Peanut-Free','Tree-Nut-Free'],
  ingredients: ['1/2 cup olive oil','5 cloves garlic, peeled','2 large russet potatoes, peeled and cut into chunks','1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)','3/4 cup white wine','3/4 cup chicken stock','3 tablespoons chopped parsley','1 tablespoon dried oregano','Salt and pepper','1 cup frozen peas, thawed']
)

recipe3 = Recipe.create(
  label: 'Chicken Gravy',
  steps: "Heat an oven to 325°F. In a roasting pan (or a large (14-inch) oven-proof skillet), heat the olive oil over medium until shimmering. Add the potatoes and garlic and cook until golden brown, about 12 minutes. Remove to a plate, leaving behind as much oil as possible.\n
          Add the chicken to the skillet, skin-side down. Cook until golden and crisp, then turn and cook the other side until golden as well. Add the wine and cook until it reduces by half.\n
          Return the garlic and potatoes to the pan, along with the chicken stock, parsley, oregano, and a pinch of salt and pepper. Transfer to the oven and cook, uncovered, until the chicken is cooked through, about 45 minutes. Add the peas to the pan with 5 minutes left in the cooking time. Serve with the roasting juices in the pan.\n",
  img_url: 'https://www.edamam.com/web-img/fd1/fd1afed1849c44f5185720394e363b4e.jpg',
  src_url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
  health_labels: ['Sugar-Conscious','Peanut-Free','Tree-Nut-Free'],
  ingredients: ['1/2 cup olive oil','5 cloves garlic, peeled','2 large russet potatoes, peeled and cut into chunks','1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)','3/4 cup white wine','3/4 cup chicken stock','3 tablespoons chopped parsley','1 tablespoon dried oregano','Salt and pepper','1 cup frozen peas, thawed']
)

recipe4 = Recipe.create(
  label: 'Catalan Chicken',
  steps: "Heat an oven to 325°F. In a roasting pan (or a large (14-inch) oven-proof skillet), heat the olive oil over medium until shimmering. Add the potatoes and garlic and cook until golden brown, about 12 minutes. Remove to a plate, leaving behind as much oil as possible.\n
          Add the chicken to the skillet, skin-side down. Cook until golden and crisp, then turn and cook the other side until golden as well. Add the wine and cook until it reduces by half.\n
          Return the garlic and potatoes to the pan, along with the chicken stock, parsley, oregano, and a pinch of salt and pepper. Transfer to the oven and cook, uncovered, until the chicken is cooked through, about 45 minutes. Add the peas to the pan with 5 minutes left in the cooking time. Serve with the roasting juices in the pan.\n",
  img_url: 'https://www.edamam.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg',
  src_url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
  health_labels: ['Sugar-Conscious','Peanut-Free','Tree-Nut-Free'],
  ingredients: ['1/2 cup olive oil','5 cloves garlic, peeled','2 large russet potatoes, peeled and cut into chunks','1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)','3/4 cup white wine','3/4 cup chicken stock','3 tablespoons chopped parsley','1 tablespoon dried oregano','Salt and pepper','1 cup frozen peas, thawed']
)

recipe5 = Recipe.create(
  label: 'Persian Chicken',
  steps: "Heat an oven to 325°F. In a roasting pan (or a large (14-inch) oven-proof skillet), heat the olive oil over medium until shimmering. Add the potatoes and garlic and cook until golden brown, about 12 minutes. Remove to a plate, leaving behind as much oil as possible.\n
          Add the chicken to the skillet, skin-side down. Cook until golden and crisp, then turn and cook the other side until golden as well. Add the wine and cook until it reduces by half.\n
          Return the garlic and potatoes to the pan, along with the chicken stock, parsley, oregano, and a pinch of salt and pepper. Transfer to the oven and cook, uncovered, until the chicken is cooked through, about 45 minutes. Add the peas to the pan with 5 minutes left in the cooking time. Serve with the roasting juices in the pan.\n",
  img_url: 'https://www.edamam.com/web-img/8f8/8f810dfe198fa3e520d291f3fcf62bbf.jpg',
  src_url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
  health_labels: ['Sugar-Conscious','Peanut-Free','Tree-Nut-Free'],
  ingredients: ['1/2 cup olive oil','5 cloves garlic, peeled','2 large russet potatoes, peeled and cut into chunks','1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)','3/4 cup white wine','3/4 cup chicken stock','3 tablespoons chopped parsley','1 tablespoon dried oregano','Salt and pepper','1 cup frozen peas, thawed']
)

recipe6 = Recipe.create(
  label: 'Kreplach (Chicken Dumplings)',
  steps: "Heat an oven to 325°F. In a roasting pan (or a large (14-inch) oven-proof skillet), heat the olive oil over medium until shimmering. Add the potatoes and garlic and cook until golden brown, about 12 minutes. Remove to a plate, leaving behind as much oil as possible.\n
          Add the chicken to the skillet, skin-side down. Cook until golden and crisp, then turn and cook the other side until golden as well. Add the wine and cook until it reduces by half.\n
          Return the garlic and potatoes to the pan, along with the chicken stock, parsley, oregano, and a pinch of salt and pepper. Transfer to the oven and cook, uncovered, until the chicken is cooked through, about 45 minutes. Add the peas to the pan with 5 minutes left in the cooking time. Serve with the roasting juices in the pan.\n",
  img_url: 'https://www.edamam.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2.jpg',
  src_url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
  health_labels: ['Sugar-Conscious','Peanut-Free','Tree-Nut-Free'],
  ingredients: ['1/2 cup olive oil','5 cloves garlic, peeled','2 large russet potatoes, peeled and cut into chunks','1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)','3/4 cup white wine','3/4 cup chicken stock','3 tablespoons chopped parsley','1 tablespoon dried oregano','Salt and pepper','1 cup frozen peas, thawed']
)

recipe7 = Recipe.create(
  label: 'Dijon Chicken',
  steps: "Heat an oven to 325°F. In a roasting pan (or a large (14-inch) oven-proof skillet), heat the olive oil over medium until shimmering. Add the potatoes and garlic and cook until golden brown, about 12 minutes. Remove to a plate, leaving behind as much oil as possible.\n
          Add the chicken to the skillet, skin-side down. Cook until golden and crisp, then turn and cook the other side until golden as well. Add the wine and cook until it reduces by half.\n
          Return the garlic and potatoes to the pan, along with the chicken stock, parsley, oregano, and a pinch of salt and pepper. Transfer to the oven and cook, uncovered, until the chicken is cooked through, about 45 minutes. Add the peas to the pan with 5 minutes left in the cooking time. Serve with the roasting juices in the pan.\n",
  img_url: 'https://www.edamam.com/web-img/448/448099f608ac1c4975d20867334da8ec.jpg',
  src_url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
  health_labels: ['Sugar-Conscious','Peanut-Free','Tree-Nut-Free'],
  ingredients: ['1/2 cup olive oil','5 cloves garlic, peeled','2 large russet potatoes, peeled and cut into chunks','1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)','3/4 cup white wine','3/4 cup chicken stock','3 tablespoons chopped parsley','1 tablespoon dried oregano','Salt and pepper','1 cup frozen peas, thawed']
)

recipe8 = Recipe.create(
  label: 'Roast Chicken',
  steps: "Heat an oven to 325°F. In a roasting pan (or a large (14-inch) oven-proof skillet), heat the olive oil over medium until shimmering. Add the potatoes and garlic and cook until golden brown, about 12 minutes. Remove to a plate, leaving behind as much oil as possible.\n
          Add the chicken to the skillet, skin-side down. Cook until golden and crisp, then turn and cook the other side until golden as well. Add the wine and cook until it reduces by half.\n
          Return the garlic and potatoes to the pan, along with the chicken stock, parsley, oregano, and a pinch of salt and pepper. Transfer to the oven and cook, uncovered, until the chicken is cooked through, about 45 minutes. Add the peas to the pan with 5 minutes left in the cooking time. Serve with the roasting juices in the pan.\n",
  img_url: 'https://www.edamam.com/web-img/25f/25feccd2eed4722604be4a9ffa1ac768.jpg',
  src_url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
  health_labels: ['Sugar-Conscious','Peanut-Free','Tree-Nut-Free'],
  ingredients: ['1/2 cup olive oil','5 cloves garlic, peeled','2 large russet potatoes, peeled and cut into chunks','1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)','3/4 cup white wine','3/4 cup chicken stock','3 tablespoons chopped parsley','1 tablespoon dried oregano','Salt and pepper','1 cup frozen peas, thawed']
)

recipe9 = Recipe.create(
  label: 'Chicken cacciatore',
  steps: "Heat an oven to 325°F. In a roasting pan (or a large (14-inch) oven-proof skillet), heat the olive oil over medium until shimmering. Add the potatoes and garlic and cook until golden brown, about 12 minutes. Remove to a plate, leaving behind as much oil as possible.\n
          Add the chicken to the skillet, skin-side down. Cook until golden and crisp, then turn and cook the other side until golden as well. Add the wine and cook until it reduces by half.\n
          Return the garlic and potatoes to the pan, along with the chicken stock, parsley, oregano, and a pinch of salt and pepper. Transfer to the oven and cook, uncovered, until the chicken is cooked through, about 45 minutes. Add the peas to the pan with 5 minutes left in the cooking time. Serve with the roasting juices in the pan.\n",
  img_url: 'https://www.edamam.com/web-img/2ca/2ca946a40338e9b93c1d14dec518e1b8.jpg',
  src_url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
  health_labels: ['Sugar-Conscious','Peanut-Free','Tree-Nut-Free'],
  ingredients: ['1/2 cup olive oil','5 cloves garlic, peeled','2 large russet potatoes, peeled and cut into chunks','1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)','3/4 cup white wine','3/4 cup chicken stock','3 tablespoons chopped parsley','1 tablespoon dried oregano','Salt and pepper','1 cup frozen peas, thawed']
)

recipe10 = Recipe.create(
  label: 'Tarragon Chicken',
  steps: "Heat an oven to 325°F. In a roasting pan (or a large (14-inch) oven-proof skillet), heat the olive oil over medium until shimmering. Add the potatoes and garlic and cook until golden brown, about 12 minutes. Remove to a plate, leaving behind as much oil as possible.\n
          Add the chicken to the skillet, skin-side down. Cook until golden and crisp, then turn and cook the other side until golden as well. Add the wine and cook until it reduces by half.\n
          Return the garlic and potatoes to the pan, along with the chicken stock, parsley, oregano, and a pinch of salt and pepper. Transfer to the oven and cook, uncovered, until the chicken is cooked through, about 45 minutes. Add the peas to the pan with 5 minutes left in the cooking time. Serve with the roasting juices in the pan.\n",
  img_url: 'https://www.edamam.com/web-img/b28/b28acc0eed7e65de535d36954006f358.jpg',
  src_url: 'http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html',
  health_labels: ['Sugar-Conscious','Peanut-Free','Tree-Nut-Free'],
  ingredients: ['1/2 cup olive oil','5 cloves garlic, peeled','2 large russet potatoes, peeled and cut into chunks','1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)','3/4 cup white wine','3/4 cup chicken stock','3 tablespoons chopped parsley','1 tablespoon dried oregano','Salt and pepper','1 cup frozen peas, thawed']
)

# Nutrients
puts 'Seeding Nutrients ...'

recipe1.create_nutrient(
  protein: 225_890, # unit is 'mg'
  fiber: 23_068, # unit is 'mg'
  carbs: 137_119, # unit is 'mg'
  fat: 274_445, # unit is 'mg'
  energies: 4055 # unit is 'kcal'
)

recipe2.create_nutrient(
  protein: 225_890, # unit is 'mg'
  fiber: 23_068, # unit is 'mg'
  carbs: 137_119, # unit is 'mg'
  fat: 274_445, # unit is 'mg'
  energies: 4055 # unit is 'kcal'
)

recipe3.create_nutrient(
  protein: 225_890, # unit is 'mg'
  fiber: 23_068, # unit is 'mg'
  carbs: 137_119, # unit is 'mg'
  fat: 274_445, # unit is 'mg'
  energies: 4055 # unit is 'kcal'
)

recipe4.create_nutrient(
  protein: 225_890, # unit is 'mg'
  fiber: 23_068, # unit is 'mg'
  carbs: 137_119, # unit is 'mg'
  fat: 274_445, # unit is 'mg'
  energies: 4055 # unit is 'kcal'
)

recipe5.create_nutrient(
  protein: 225_890, # unit is 'mg'
  fiber: 23_068, # unit is 'mg'
  carbs: 137_119, # unit is 'mg'
  fat: 274_445, # unit is 'mg'
  energies: 4055 # unit is 'kcal'
)

recipe6.create_nutrient(
  protein: 225_890, # unit is 'mg'
  fiber: 23_068, # unit is 'mg'
  carbs: 137_119, # unit is 'mg'
  fat: 274_445, # unit is 'mg'
  energies: 4055 # unit is 'kcal'
)

recipe7.create_nutrient(
  protein: 225_890, # unit is 'mg'
  fiber: 23_068, # unit is 'mg'
  carbs: 137_119, # unit is 'mg'
  fat: 274_445, # unit is 'mg'
  energies: 4055 # unit is 'kcal'
)

recipe8.create_nutrient(
  protein: 225_890, # unit is 'mg'
  fiber: 23_068, # unit is 'mg'
  carbs: 137_119, # unit is 'mg'
  fat: 274_445, # unit is 'mg'
  energies: 4055 # unit is 'kcal'
)

recipe9.create_nutrient(
  protein: 225_890, # unit is 'mg'
  fiber: 23_068, # unit is 'mg'
  carbs: 137_119, # unit is 'mg'
  fat: 274_445, # unit is 'mg'
  energies: 4055 # unit is 'kcal'
)

recipe10.create_nutrient(
  protein: 225_890, # unit is 'mg'
  fiber: 23_068, # unit is 'mg'
  carbs: 137_119, # unit is 'mg'
  fat: 274_445, # unit is 'mg'
  energies: 4055 # unit is 'kcal'
)

# User_recipes
puts 'Seeding User_recipes ...'

user1.user_recipes.create(recipe: recipe1, weekday: nil)
user1.user_recipes.create(recipe: recipe2, weekday: nil)
user1.user_recipes.create(recipe: recipe3, weekday: nil)
user1.user_recipes.create(recipe: recipe4, weekday: nil)
user1.user_recipes.create(recipe: recipe5, weekday: nil)
user1.user_recipes.create(recipe: recipe6, weekday: nil)
user1.user_recipes.create(recipe: recipe7, weekday: nil)
user1.user_recipes.create(recipe: recipe8, weekday: nil)
user1.user_recipes.create(recipe: recipe9, weekday: nil)
user1.user_recipes.create(recipe: recipe10, weekday: nil)

puts 'Done'
