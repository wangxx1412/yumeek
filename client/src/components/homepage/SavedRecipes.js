import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    marginTop: "1rem",
    marginLeft: "3px",
    backgroundColor: "#3F51B5",
    borderRadius: "5px",
    maxHeight: "500px",
    overflow: "auto",
  },
  subheader: {
    width: "100%",
    marginTop: "1rem",
    backgroundColor: "#3F51B5",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SavedRecipes(props) {
  const { savedRecipes } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const expandList = () => {
    setOpen(!open);
  };

  const clickRecipe = (recipe) => {
    //! need to go to recipe detail page
    console.log("to detail", recipe);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      subheader={
        <ListSubheader onClick={expandList}>
          <ListItemText
            primary={`${savedRecipes.length || "No"} Saved Recipes`}
            className={classes.subheader}
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListSubheader>
      }
    >
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {savedRecipes &&
            savedRecipes.map((recipe, index) => (
              <ListItem
                button
                onClick={() => {
                  clickRecipe(recipe);
                }}
                className={classes.nested}
                key={index}
              >
                <ListItemText primary={recipe.recipe.label} />
              </ListItem>
            ))}
        </List>
      </Collapse>
    </List>
  );
}
