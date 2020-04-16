import React from "react"
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
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


export default function Recipe(props) {
  const location = useLocation();
  const { savedRecipes, deleteRecipe, handleAdd } = props;
  // console.log("PROPS INSIDE RECIPE", props)
  const classes = useStyles(); 
  // console.log("LOCATION", location)
  // console.log("LOCALSTORAGE", localStorage)
  // let { userid } = useParams();
  // console.log("PARAMS", userid)
  return(
        <div>
          <SaveRecipeButton handleAdd={handleAdd} recipe={location.state.recipe} savedRecipes={savedRecipes} deleteRecipe={deleteRecipe}/>
          <Typography variant="h5" align="center">{location.state.recipe.label}</Typography>
          <Box className={classes.root} >
            <CardMedia component="img" src={location.state.recipe.img_url} alt={location.state.recipe.label} className={classes.style}/>
            <Container className={classes.container}>
              <div className={classes.info}>
                <span className={classes.typography}>{location.state.recipe.ingredients.length}</span>
                <span>Ingredients</span>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className={classes.info}>
                <span className={classes.typography}>{location.state.recipe.energies}</span>
                <span>Calories</span>
              </div>
            </Container>
          </Box>
          <Labels labels={location.state.recipe.health_labels} className={classes.container}/>
        <IngredientsList ingredients={location.state.recipe.ingredients}/>
        <Nutrients recipe={location.state.recipe}/>
        </div>
      );
}