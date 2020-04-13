import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  const { recipe, handleAdd } = props;
  const classes = useStyles();

  const handleClick = (recipe) => {
    console.log("to detail", recipe); //! to detail page
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleClick(recipe)}>
        <CardMedia
          className={classes.media}
          image={recipe.img_url}
          title={recipe.label}
        />
        <CardContent>
          <Typography>{recipe.label}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleAdd}>
          Add
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => handleClick(recipe)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
