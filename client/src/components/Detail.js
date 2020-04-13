import React, { useState , useEffect } from "react";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import Steps from './Steps';
import IngredientsList from './IngredientsList';

const useStyles = makeStyles(theme => ({
    root: {
          display: "flex" ,
          flexDirection: "column",
          alignItems: "center"       
    }
  })
);

// IngredientsList, Steps, NutrientsList
export default function Detail() {
  const recipeId = 2;

  const [ recipe, setRecipe ] = useState({
    label: "",
    steps: "",
    ingredients: "",
    img: "",
    health_labels: "",
    src_url: ""
  });
 
  useEffect(() => {
    axios.get(`/api/details/${recipeId}`)
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

  const classes = useStyles()
  return(
        <div>
          <Box className={classes.root}>
          <h2>{recipe.label}</h2>
          <img src={recipe.img} alt={recipe.img} />
          <p>{recipe.health_labels}</p>
          </Box>
          <IngredientsList ingredients={recipe.ingredients}/>
          <Steps steps={recipe.steps}/>
        </div>
      );
}

 // const API_ID = '856f1e70';
  // const API_KEY = '5ffd7f76ad176cbdbfdbc8c268013dc1';
  // const query = 'chicken';
  
  
  // const getRecipe = () => {
  //   axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
  //   .then(res => console.log(res.data.hits))
  // }

  // useEffect(() => {
  //   getRecipe()
  // }, [])