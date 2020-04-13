import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

import RecipesCard from "./RecipesCard";

const useStyles = makeStyles((theme) => ({
  gridList: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function RecipesCardsLists(props) {
  const { searchResultRecipes } = props;
  const classes = useStyles();

  const handleAdd = (recipe) => {
    console.log("add to saved list", recipe); //! need to be moved to parent, where pass saved recipes arr
  };

  return (
    <div>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">
            {searchResultRecipes.length} Recipes For You!
          </ListSubheader>
        </GridListTile>
        {searchResultRecipes.map((recipe, index) => (
          <RecipesCard
            key={index}
            recipe={recipe}
            handleAdd={() => handleAdd(recipe)}
          />
        ))}
      </GridList>
    </div>
  );
}
