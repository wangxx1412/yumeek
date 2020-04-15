import React from "react";
import clsx from "clsx";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Calendar from "./Calendar";
import Sidebar from "./Sidebar";
import Home from "./Home";
import Dashboard from "./dashboard";
import Recipe from "./Recipe";
import Auth from "./Auth";

import axios from "axios";
import uniqueRecipe from "../helper/uniqueRecipe";
import duplcateRecipe from "../helper/duplicateRecipe";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(1),
    background: "#535454",
    color: "#fff",
    [theme.breakpoints.up("md")]: {
      width: 240,
    },
  },
  appBar: {
    [theme.breakpoints.down("sm")]: {
      background: "#535454",
      color: "#fff",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(4),
    },
  },
}));

export default function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [savedRecipes, setSavedRecipes] = React.useState([]);
  const [sessionUser, setSessionUser] = React.useState(null);

  React.useEffect(() => {
    if (sessionUser) {
      axios.get(`/api/users/${sessionUser.user_id}`).then((response) => {
        console.log(response.data);
        setSavedRecipes(response.data.data);
      });
    }
  }, [sessionUser]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAdd = (recipe) => {
    console.log("add to saved list", recipe); //! pass to Home

    if (duplcateRecipe(savedRecipes, recipe)) {
      setSavedRecipes((prev) => [...uniqueRecipe(prev, recipe)]);
    } else {
      setSavedRecipes((prev) => [
        { ...recipe.recipe, ...recipe.nutrients, weekday: null },
        ...prev,
      ]);

      axios
        .post("api/recipe", recipe)
        .then((response) => console.log("saved", response));
    }
  };

  const userSignup = (user) => {
    //! user signup, some session logic, db logic
    console.log("signup", user);
    axios.post("api/users", { user }).then((response) => {
      console.log(response);
      const user_id = response.data.data.id;
      setSessionUser({ user_id, ...user });
    });
  };

  const userLogin = (user) => {
    //! user login, some session logic, db validation logic
    console.log("login", user);
    axios.post("api/login", user).then((response) => {
      console.log(response);
      const user_id = response.data.data.id;
      setSessionUser({ user_id, ...user });
    });
  };

  const userLogout = () => {
    console.log("logout");
    setSessionUser(null);
    setSavedRecipes([]);
    axios.get("api/logout").then((response) => console.log("logout", response));
  };

  const clickRecipe = (recipe) => {
    //! need to go to recipe detail page

    console.log("to detail", recipe);
  };

  const deleteRecipe = (recipe) => {
    //! delete saved recipe in db
    console.log("delete recipe", recipe);
    setSavedRecipes((prev) => prev.filter((item) => item.id !== recipe.id));
    axios
      .delete(`api/recipe/${recipe.id}`, recipe)
      .then((response) => console.log("deleted", response));
  };

  return (
    <BrowserRouter>
      <div className={clsx("App", classes.root)}>
        <CssBaseline />
        <Hidden smUp>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Yumeek
              </Typography>
            </Toolbar>
          </AppBar>
        </Hidden>
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <Sidebar
              savedRecipes={savedRecipes}
              sessionUser={sessionUser}
              userSignup={(user) => {
                userSignup(user);
              }}
              userLogin={(user) => {
                userLogin(user);
              }}
              userLogout={userLogout}
            />
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Drawer
            variant="permanent"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Sidebar
              savedRecipes={savedRecipes}
              sessionUser={sessionUser}
              userSignup={(user) => userSignup(user)}
              userLogin={(user) => userLogin(user)}
              userLogout={userLogout}
              clickRecipe={(recipe) => clickRecipe(recipe)}
              deleteRecipe={(recipe) => deleteRecipe(recipe)}
            />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route exact path="/user/:userid/calendar" component={Calendar} />
              <Route exact path="/user/:userid/stats" component={Dashboard} />
              <Route
                exact
                path="/"
                render={() => (
                  <Home
                    handleAdd={(recipe) => handleAdd(recipe)}
                    clickRecipe={(recipe) => clickRecipe(recipe)}
                  />
                )}
              />
              <Route exact path="/recipe/:recipeid" component={Recipe} />
              <Route exact path="/login" component={Auth} />
            </Switch>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}
