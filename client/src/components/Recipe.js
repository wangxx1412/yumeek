import React from "react"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Typography, CardMedia, Container, Divider, Button } from '@material-ui/core';

import Labels from './recipe_details_page/Labels';
import IngredientsList from './recipe_details_page/IngredientsList';
import SaveRecipeButton from './recipe_details_page/SaveRecipeButton';
import Nutrients from './recipe_details_page/Nutrients';

const useStyles = makeStyles(theme => ({
    root: {
          display: "flex" ,
          flexDirection: "row-reverse",
          width: "85%",
          justifyContent: "space-around",
          alignItems: "center", 
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            margin: "auto"
          },    
    },
    container: {
      display: "flex",
      justifyContent: "space-around",
      width: "33%",
      [theme.breakpoints.down("sm")]: {
        width: "45%"
      }, 
    },
    info: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    typography: {
      fontSize: 40
    },
    style: { width: "25em", margin: "3%" }
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


export default function Recipe(props) {
  // const { recipe } = props;
  console.log("PROPS INSIDE RECIPE", props)
  const classes = useStyles(); 

  return(
        <div>
          <SaveRecipeButton handleAdd={props.handleAdd} recipe={recipe} savedRecipes={props.savedRecipes} deleteRecipe={props.deleteRecipe}/>
          <Typography variant="h5" align="center">{recipe.recipe.label}</Typography>
          <Box className={classes.root} >
            <CardMedia component="img" src={recipe.recipe.img_url} alt={recipe.recipe.label} className={classes.style}/>
            <Container className={classes.container}>
              <div className={classes.info}>
                <span className={classes.typography}>{recipe.recipe.ingredients.length}</span>
                <span>Ingredients</span>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className={classes.info}>
                <span className={classes.typography}>{recipe.nutrients.energies}</span>
                <span>Calories</span>
              </div>
            </Container>
          </Box>
          {/* <Labels labels={recipe.recipe.health_labels} className={classes.container}/> */}
        <IngredientsList ingredients={recipe.recipe.ingredients}/>
        <Nutrients nutrients={recipe.nutrients}/>
        </div>
      );
}