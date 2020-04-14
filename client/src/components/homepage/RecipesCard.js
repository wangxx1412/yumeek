import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles({
  root: {
    width: "23%",
    margin: "1%",
  },
  media: {
    height: 200,
  },
});

export default function RecipesCard(props) {
  const { recipe, handleAdd, clickRecipe } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  // const handleClick = (recipe) => { 
  //   console.log("to detail", recipe); //! to detail page
  //   props.handleRecipeProps(recipe);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => clickRecipe(recipe)}>
        <CardMedia
          className={classes.media}
          image={recipe.recipe.img_url}
          title={recipe.recipe.label}
        />
        <CardContent>
          <Typography>{recipe.recipe.label}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleAdd(recipe)}>
          Add
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            clickRecipe(recipe);
            setOpen(true);
          }}
        >
          Learn More
        </Button>
      </CardActions>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      ></Snackbar>
    </Card>
  );
}