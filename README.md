# Yummeek

Yummeek is a meal planner app that allows you to search recipes with keyword and health labels, and add recipes to your weekly meal plan dashboard with nutrients stats.

## Screenshots

Home page

!["Home Page"]()

Detail page

!["Detail page"]()

Dashboard

!["Dashboard"]()

## Setup

1. In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development by default). Run `bin/rails s` to run the server.
2. In the other terminal, `cd` into `client`. Run `npm install`. Rename the `.env.example` file to be called `.env` and add your API info. Then run `npm start` and go to `localhost:3000` in your browser.

## Running Webpack Development Server

```sh
cd client
npm start
```

## Running Jest Test Framework

```sh
cd client
npm test
```

## Stack

- React
- React Router
- Material-UI
- Ruby on Rails
- PostgreSQL
- EmailJS
- Axios
- Jest
