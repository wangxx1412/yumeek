import React from "react";
import UserInfo from "./homepage/UserInfo";
import { Link } from "react-router-dom";
import SavedRecipes2 from "./homepage/SavedRecipes2";

import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  logo: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginLeft: theme.spacing(10),
    marginBottom: theme.spacing(2),
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
    <div>
      {/* change to our app logo later */}
      <Link to="/">
        <Avatar
          alt="logo"
          src="https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg"
          className={classes.logo}
        />
      </Link>
      <Divider variant="middle" />
      <UserInfo
        user={sessionUser}
        handleLogin={userLogin}
        handleSignup={userSignup}
        handleLogout={userLogout}
      />
      <Divider variant="middle" />
      <SavedRecipes2 savedRecipes={savedRecipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}
