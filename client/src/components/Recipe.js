import React, { useState , useEffect } from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, CardMedia } from '@material-ui/core';

import Labels from './recipe_details_page/Labels';
import IngredientsList from './recipe_details_page/IngredientsList';
import SaveRecipeButton from './recipe_details_page/SaveRecipeButton';
import Nutrients from './recipe_details_page/Nutrients';

const useStyles = makeStyles(theme => ({
    root: {
          display: "flex" ,
          flexDirection: "column",
          alignItems: "center",      
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    style: { width: "25em" }
  })
);

const recipe ={
  recipe: {
  label: "Basic Beef",
  steps: null,
  img_url: "https://www.edamam.com/web-img/c68/c6815d01c110e5fd03c8c6f5c4824db8.jpg",
  src_url: "http://www.cookstr.com/recipes/basic-beef",
  health_labels: ["Sugar-Conscious", "Peanut-Free", "Tree-Nut-Free", "Alcohol-Free"],   
  ingredients:["2 pounds ground beef",
                "2 large onions (for about 2 cups chopped)",
                "3 cloves fresh garlic, minced, or 1 tablespoon bottled minced garlic"]
},

nutrients: {
  protein: 31719,
  fiber: 3060,
  carbs: 61998,
  fat: 59297,
  energies: 898
}
}

// IngredientsList, Steps, NutrientsList
export default function Recipe(props) {
  // const { recipe } = props;
  console.log("PROPS INSIDE RECIPE", props)
  const classes = useStyles(); 

  return(
        <div>
          <SaveRecipeButton handleAdd={props.handleAdd} recipe={recipe}/>
          <Box className={classes.root} >
            <Typography variant="h5">{recipe.recipe.label}</Typography>
            <CardMedia component="img" src={recipe.recipe.img_url} alt={recipe.recipe.label} className={classes.style}/>
            <div>
              <p>{recipe.recipe.ingredients.length} Ingredients</p>
              <p>{recipe.nutrients.energies} Energies</p>
            </div>
            <Labels labels={recipe.recipe.health_labels} className={classes.container}/>
          </Box>
          <IngredientsList ingredients={recipe.recipe.ingredients}/>
          <Nutrients nutrients={recipe.nutrients}/>
        </div>
      );
}