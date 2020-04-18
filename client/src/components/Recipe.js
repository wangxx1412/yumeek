import React from "react"
import { useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Labels from './recipe_details_page/Labels';
import IngredientsList from './recipe_details_page/IngredientsList';
import SaveRecipeButton from './recipe_details_page/SaveRecipeButton';
import Nutrients from './recipe_details_page/Nutrients';
import RecipeInfo from './recipe_details_page/RecipeInfo';

const useStyles = makeStyles(theme => ({
    labels: {
      [theme.breakpoints.down("md")]: {
        display: "flex",
        margin: "5%"    
      }, 
    },
    background: {
      width: "100 wh",
      height: "100 vh",
      backgroundImage: "url(" + "" + ")", //image
    },
    style: { width: "25em", margin: "3%" }
  })
);


export default function Recipe(props) {
  const location = useLocation();
  const { savedRecipes, deleteRecipe, handleAdd } = props;
  const classes = useStyles(); 

  return(
        <Container className={classes.background}>
          <SaveRecipeButton handleAdd={handleAdd} recipe={location.state.recipe} savedRecipes={savedRecipes} deleteRecipe={deleteRecipe}/>
          <RecipeInfo recipe={location.state.recipe}/>
          <div className={classes.labels}>
            <Labels labels={location.state.recipe.health_labels} className={classes.container}/>
            <IngredientsList ingredients={location.state.recipe.ingredients}/>
          </div>
          <Nutrients recipe={location.state.recipe}/>
        </Container>
      );
}