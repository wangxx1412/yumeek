import { useState, useEffect } from "react";
import axios from "axios";

import uniqueRecipe from "../helper/uniqueRecipe";
import duplcateRecipe from "../helper/duplicateRecipe";
import recipeFormatter from "../helper/recipeFormatter";

const useUserData = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [sessionUser, setSessionUser] = useState(
    JSON.parse(localStorage.getItem("sessionUser")) || null
  );

  useEffect(() => {
    if (sessionUser) {
      axios.get(`/api/users/${sessionUser.id}`).then((response) => {
        console.log(response.data);
        setSavedRecipes(response.data.data);
      });
    }
  }, [sessionUser]);

  const userSignup = (user) => {
    console.log("signup", user);
    axios.post("/api/users", { user }).then((response) => {
      console.log(response);
      setSessionUser(response.data.data);
      localStorage.setItem("sessionUser", JSON.stringify(response.data.data));
    });
  };

  const userLogin = (user) => {
    console.log("login", user);
    axios.post("/api/login", user).then((response) => {
      console.log(response);
      setSessionUser(response.data.data);
      localStorage.setItem("sessionUser", JSON.stringify(response.data.data));
    });
  };

  const userLogout = () => {
    console.log("logout");
    setSessionUser(null);
    setSavedRecipes([]);
    localStorage.removeItem("sessionUser");
    axios
      .get("/api/logout")
      .then((response) => console.log("logout", response));
  };

  const deleteRecipe = (recipe) => {
    console.log("delete recipe", recipe);
    setSavedRecipes((prev) => prev.filter((item) => item.id !== recipe.id));
    axios
      .delete(`/api/recipe/${recipe.id}`, recipe)
      .then((response) => console.log("deleted", response));
  };

  const handleAdd = (recipe) => {
    if (duplcateRecipe(savedRecipes, recipe)) {
      setSavedRecipes((prev) => [...uniqueRecipe(prev, recipe)]);
    } else {
      const formattedRecipe = recipeFormatter(recipe);

      console.log("saved formattedRecipe", formattedRecipe);

      axios.post("/api/recipe", formattedRecipe).then((response) => {
        setSavedRecipes((prev) => [response.data.data, ...prev]);
      });
    }
  };

  return {
    savedRecipes,
    setSavedRecipes,
    sessionUser,
    setSessionUser,
    userSignup,
    userLogin,
    userLogout,
    deleteRecipe,
    handleAdd,
  };
};

export default useUserData;
