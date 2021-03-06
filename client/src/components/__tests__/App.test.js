import React from "react";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
} from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

describe("App", () => {
  describe("Home", () => {
    describe("RecipesCardsLists", () => {
      it("renders random recipes in homepage", async () => {
        // load search result
        const { getByText } = render(<App />);

        await waitForElement(() => getByText("Chicken Vesuvio"));

        // to detail page
        const label = getByText("Learn More");

        fireEvent.click(label);

        expect(getByText("Back To Search")).toBeInTheDocument();
        expect(getByText("Add To Saved Recipes")).toBeInTheDocument();

        // add recipe to saved list
        expect(getByText("Empty")).toBeInTheDocument();

        const addButton = getByText("Add To Saved Recipes");

        fireEvent.click(addButton);

        await waitForElement(() => getByText("Chicken Vesuvio"));

        expect(getByText("1")).toBeInTheDocument();

        // back to home page and keep the search result
        const backToSearch = getByText("Back To Search");

        fireEvent.click(backToSearch);

        expect(getByText("Chicken Vesuvio")).toBeInTheDocument();
      });
    });

    describe("SideBar", () => {
      it("renders user email,dashboard button and the amount of recipe in the saved recipes", async () => {
        // load home page
        const { getByText } = render(<App />);

        await waitForElement(() => getByText("Chicken Vesuvio"));

        expect(getByText("Empty")).toBeInTheDocument();

        // log in user
        const loginButton = getByText("Sign Up / Log In");

        fireEvent.click(loginButton);

        const login = getByText("Log in");

        fireEvent.click(login);

        await waitForElement(() => getByText("fake@gmail.com"));

        // show my dashboard button

        expect(getByText("My Dashboard")).toBeInTheDocument();

        // get saved recipes list
        expect(getByText("1")).toBeInTheDocument();

        const savedRecipes = getByText("Saved Recipes");

        // list detail
        fireEvent.click(savedRecipes);

        expect(getByText("Add recipes to your yumeek!")).toBeInTheDocument();
        expect(getByText("Bagel Bruschetta")).toBeInTheDocument();

        // add recipe to saved list
        const addButton = getByText("Add");

        fireEvent.click(addButton);

        await waitForElement(() => getByText("New Added Recipe"));

        expect(getByText("2")).toBeInTheDocument();

        // list detail
        fireEvent.click(savedRecipes);

        const singleRecipe = getByText("Bagel Bruschetta");

        fireEvent.click(singleRecipe);

        expect(getByText("Back To Search")).toBeInTheDocument();
        expect(getByText("Delete From List")).toBeInTheDocument();

        // delete recipe
        const deleteButton = getByText("Delete From List");

        fireEvent.click(deleteButton);

        await waitForElement(() => getByText("Add To Saved Recipes"));

        // logout user
        const logout = getByText("logout");

        fireEvent.click(logout);

        await waitForElement(() => getByText("Sign Up / Log In"));

        expect(getByText("Empty")).toBeInTheDocument();
      });

      it("can sign up new user", async () => {
        // load page
        const { getByText } = render(<App />);

        await waitForElement(() => getByText("Empty"));

        // sign up user
        const loginButton = getByText("Sign Up / Log In");

        fireEvent.click(loginButton);

        const signup = getByText("Sign up");

        fireEvent.click(signup);

        const secondSignup = getByText("Sign up");

        fireEvent.click(secondSignup);

        await waitForElement(() => getByText("fake@gmail.com"));

        expect(getByText("logout")).toBeInTheDocument();
      });
    });
  });
});
