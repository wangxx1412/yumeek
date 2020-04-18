import React from "react";
import UserInfo from "./homepage/UserInfo";
import { Link, useHistory } from "react-router-dom";
import SavedRecipes from "./homepage/SavedRecipes";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/image/logo.png";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Button from "@material-ui/core/Button";

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

  let history = useHistory();

  const handleClickDashboard = () => {
    history.push(`/user/${sessionUser.id}/stats`); //changed the path to '/recipe'
  };

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
      <SavedRecipes savedRecipes={savedRecipes} deleteRecipe={deleteRecipe} />
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={handleClickDashboard}
        startIcon={<DashboardIcon />}
      >
        My Dashboard
      </Button>
    </div>
  );
}
