import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  saveButton: {
        width: "4 em"
  },
  // search: {
  //   fontSize: "large",
  //   float: "right",
  //   position: "absolute",
  //   right: "106px",
  //   top: "45px",
  //   color: "grey.300"
  // },
  style: { fontSize: 40 }
})
);

const checkIfRecipeInTheList = function(savedRecipes, src) {
  const recipe = savedRecipes.filter(item => item.src_url === src);
  return recipe;
}

export default function SaveRecipeButton(props) {
  const {recipe, savedRecipes, handleAdd, deleteRecipe } = props;
  const classes = useStyles();
  const savedRecipe = checkIfRecipeInTheList(savedRecipes, recipe.recipe.src_url);

  return(
      <div className={classes.root}>
      { savedRecipe.length > 0 ? (
          <Button variant="contained" size="medium" color="primary" onClick={() => deleteRecipe(recipe)}>
            Delete From List
          </Button>
        ) : ( 
          <Button color="secondary" component="div" className={classes.saveButton} onClick={() => handleAdd(recipe)}> 
            <CalendarTodayOutlinedIcon className={classes.style}/>
              Save to My List
          </Button>
        ) 
     } 
        <Button size="medium" color="secondary">
          Search Recipe
        </Button>
      </div>
  );
}

