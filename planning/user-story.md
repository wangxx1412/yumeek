Project: Recipe share app

Description:

1.user can search certain recipe and follow the step to cook
2.user can save, like recipes in different categories
3.user can create and share recipe with picture or video
4.user can create recipes for a day,or a week
5.automaticlly create shopping list for recipes of the day or week

6. When creating recipes, there is an option says how many people you have

User story:

User can signup and login
User can search for new recipe by ‘keyword’ to API (search input or search form)
User can filter recipes by fats, calories/energy, time, nutrients, products
User can see details of the recipe and adjust time, quantity
User can add recipe for a day https://www.epicurious.com/
On a home page user can search and login/register
User can see dashboard
User can CRUD own recipe by using template (steps, products, time, upload pictures)
(stretch) User can save recipes into different categories
User can make a diet calendar
User can see daily/weekly stats (nutrients)
(stretch) User can create a shopping list based on chosen recipes
(stretch) User can see share recipe

REST API Routes:

GET ‘/’, Visit home
POST ‘/signup’, signup new user
POST ‘/login’, login to account
GET ‘/logout’, logout account
GET ‘/user/${id}’’, show user related info
GET ‘/recipe/${id}’,show recipe detail
POST ‘/recipe/new’, create new recipe
PUT DELETE ‘/recipe/\${id}’, change recipe related info

Stack:

React + Rails + Postgresql

Material UI , AntD, Style component
