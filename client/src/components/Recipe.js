import React from "react"
import { useLocation, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';

import Labels from './recipe_details_page/Labels';
import IngredientsList from './recipe_details_page/IngredientsList';
import SaveRecipeButton from './recipe_details_page/SaveRecipeButton';
import Nutrients from './recipe_details_page/Nutrients';
import RecipeInfo from './recipe_details_page/RecipeInfo';

const useStyles = makeStyles(theme => ({
    labels: {
      display: 'flex',
      [theme.breakpoints.down("md")]: {
        display: "flex",
        margin: "5%"    
      }, 
    },
    background: {
      width: "100 wh",
      height: "100 vh",
      background: "linear-gradient(0deg, rgba(115,190,119,1) 2%, rgba(254,254,246,1) 68%)",//"linear-gradient(0deg, rgba(115,190,119,1) 24%, rgba(248,238,221,1) 53%)",
      // backgroundImage: "url(" + "" + ")", //image?
    },
    style: { width: "25em", margin: "3%" }
  })
);


export default function Recipe(props) {
  const location = useLocation();
  const { savedRecipes, deleteRecipe, handleAdd, sessionUser } = props;
  const classes = useStyles(); 

  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  return(
        <Container className={classes.background}>
          <Button size="medium" color="primary" onClick={handleClick}>
            Back To Search
          </Button>
          <RecipeInfo recipe={location.state.recipe} sessionUser={sessionUser}/>
          <SaveRecipeButton handleAdd={handleAdd} 
                            recipe={location.state.recipe} 
                            savedRecipes={savedRecipes} 
                            deleteRecipe={deleteRecipe} 
                            sessionUser={sessionUser}/>
          <div className={classes.labels}>
            <Labels labels={location.state.recipe.health_labels} />
            <IngredientsList ingredients={location.state.recipe.ingredients}/>
          </div>
          <Nutrients recipe={location.state.recipe}/>
        </Container>
      );
}