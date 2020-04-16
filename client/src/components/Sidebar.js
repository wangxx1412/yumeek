import React from "react";
import UserInfo from "./homepage/UserInfo";
import { Link } from "react-router-dom";
import SavedRecipes2 from "./homepage/SavedRecipes2";
import ShoppingCart from "./homepage/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/image/logo.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
  },
  logo: {
    width: theme.spacing(20),
  },
}));

// SavedRecipes, ShoppingList(Strech)
export default function Sidebar(props) {
  const {
    savedRecipes,
    sessionUser,
    userSignup,
    userLogin,
    userLogout,
    deleteRecipe,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link to="/">
        <img src={logo} alt="logo" className={classes.logo} />
      </Link>
      <UserInfo
        user={sessionUser}
        handleLogin={userLogin}
        handleSignup={userSignup}
        handleLogout={userLogout}
      />
      <SavedRecipes2 savedRecipes={savedRecipes} deleteRecipe={deleteRecipe} />
      <ShoppingCart />
    </div>
  );
}
