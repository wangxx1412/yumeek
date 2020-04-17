import React from "react";
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  saveButton: {
        width: "4 em"
  },
  style: { fontSize: 40 }
})
);

const checkIfRecipeInTheList = function(savedRecipes, src, label) {
  const recipe = savedRecipes.filter(item => item.src_url === src && item.label === label);
  return recipe;
}

export default function SaveRecipeButton(props) {
  const {recipe, savedRecipes, handleAdd, deleteRecipe } = props;
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };
  const savedRecipe = checkIfRecipeInTheList(savedRecipes, recipe.src_url, recipe.label);

  return(
      <div className={classes.root}>
      { savedRecipe.length > 0 ? (
          <Button variant="contained" size="medium" color="primary" onClick={() => deleteRecipe(savedRecipe[0])}>
            Delete From List
          </Button>
        ) : ( 
          <Button color="secondary" component="div" className={classes.saveButton} onClick={() => handleAdd(recipe)}> 
            <CalendarTodayOutlinedIcon className={classes.style}/>
              Save to My List
          </Button>
        ) 
     } 
        <Button size="medium" color="secondary" onClick={handleClick}>
          Search Recipe
        </Button>
      </div>
  );
}

