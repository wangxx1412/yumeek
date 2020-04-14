import React, { useState , useEffect } from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, CardMedia } from '@material-ui/core';

import Labels from './recipe_details_page/Labels';
import IngredientsList from './recipe_details_page/IngredientsList';
import SaveRecipeButton from './recipe_details_page/SaveRecipeButton';

const useStyles = makeStyles(theme => ({
    root: {
          display: "flex" ,
          flexDirection: "column",
          alignItems: "center",      
    },
    // container: {
    //   paddingTop: theme.spacing(4),
    //   paddingBottom: theme.spacing(4),
    //   },
    style: { width: "25em" }
  })
);

// IngredientsList, Steps, NutrientsList
export default function Recipe(props) {
  // const { recipe } = props;
  console.log("PROPS INSIDE RECIPE", props)
  const classes = useStyles();
  console.log(props)
  const recipeId = 3;

  const [ recipe, setRecipe ] = useState({
    label: "",
    steps: "",
    ingredients: [],
    img: "",
    health_labels: [],
    src_url: ""
  });
 
  useEffect(() => {
    axios.get(`/api/recipe/${recipeId}`)
      .then(res => 
        setRecipe(recipe => ({...recipe, label: res.data.recipe.label, 
                                          steps: res.data.recipe.steps, 
                                          ingredients: res.data.recipe.ingredients,
                                          img: res.data.recipe.img_url,
                                          health_labels: res.data.recipe.health_labels,
                                          src_url: res.data.recipe.src_url
                                          }))
      )
      .catch(err => console.log('Error: ', err))
  }, []);

  return(
        <div>
          <SaveRecipeButton handleAdd={props.handleAdd}/>
          <Box className={classes.root} >
            <Typography variant="h5">{recipe.label}</Typography>
            <CardMedia component="img" src={recipe.img} alt={recipe.label} className={classes.style}/>
            <Labels labels={recipe.health_labels} className={classes.container}/>
          </Box>
          <IngredientsList ingredients={recipe.ingredients}/>
        </div>
      );
}