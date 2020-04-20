import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, CardMedia, Container, Divider, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import * as emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';

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
    width: "100%",
    margin: "10 em",
    [theme.breakpoints.down("sm")]: {
      width: "45%"
    }, 
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10%"
  },
  typography: {
    fontSize: "2.1rem"
  },
  likeButton: {
    margin: "10%"
  },
  info_like: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  style: { width: "100%", margin: "3%" }
})
);

export default function RecipeInfo(props) {
  const { recipe } = props;
  const classes = useStyles();
  const [icon, setIcon] = useState(<FavoriteBorderIcon />);

  let receiverEmail = JSON.parse(localStorage.getItem("sessionUser")).email;
  let first_name = JSON.parse(localStorage.getItem("sessionUser")).first_name;
  let link = recipe.src_url; //`http://localhost:3002${location.pathname}`
  let recipeLabel = recipe.label;
  let message = `Link for recipe "${recipeLabel}": ${link}`;
  const senderEmail = "yumeek@test.com";

  const handleShare = () => { //if no user disable send button
    let templateParams = {
      to_name: first_name,
      form_name: "Yumeek",
      message_html: message,
      recieverEmail: receiverEmail,
      senderEmail: senderEmail
    }
    emailjs.send(
      'gmail',
      process.env.REACT_APP_TEMPELATE_ID_EMAILJS,
      templateParams,
      process.env.REACT_APP_USER_ID_EMAILJS
    )
    .then((res) => {
      console.log("Response text: ", res.text);
    })
    .catch((err) => console.log("Error:", err))
  }
  return (
    <>
      <Typography variant="h5" align="center">{recipe.label}</Typography>
      <Container className={classes.root} >
        <CardMedia component="img" src={recipe.img_url} alt={recipe.label} className={classes.style}/>
        <Container className={classes.info_like}>
          <div className={classes.container}>
            <div className={classes.info}>
              <span className={classes.typography}>{recipe.ingredients.length}</span>
              <span>Ingredients</span>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className={classes.info}>
              <span className={classes.typography}>{recipe.energies}</span>
              <span>Calories</span>
            </div>
          </div>
          <div className={classes.likeButton}>
            <Button 
              variant="contained"
              color="secondary"
              endIcon={icon}
              onClick={() => handleShare()}
            >
              Yumeek
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
}
