import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, CardMedia, Container, Divider, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import * as emailjs from 'emailjs-com';
import { useLocation } from 'react-router-dom';
import useSendEmail from '../../hooks/useSendEmail';
import { withStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex" ,
    flexDirection: "row-reverse",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center", 
    fontSize: "2.5 rem",
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
    margin: "15%",
    [theme.breakpoints.down("sm")]: {
      margin: "4%",
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
    fontSize: "2.1rem",
  },
  likeButton: {
    margin: "3%"
  },
  info_like: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  },
  font: {
    fontSize: "1.3rem"
  },
  style: { width: "100%", margin: "3%", borderRadius: "20px" }
})
);
// const ButtonDiabled = withStyles({
//   root: {
//     color: "primary",
//     "&$disabled": {
//       color: "secondary"
//     },
//   },
//   disabled: {}
// })((props) => <Button {...props} />);


export default function RecipeInfo(props) {
  const { recipe, sessionUser } = props;
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  
  // const handleDisabled = (disabled) => {
  //   if (sessionUser === null) {
  //     disabled = setDisabled(false);
  //   }
  //   return disabled;
  // }
  
  const handleShare = () => { //if no user disable send button
    let receiverEmail = JSON.parse(localStorage.getItem("sessionUser")).email;
    let first_name = JSON.parse(localStorage.getItem("sessionUser")).first_name;
    let link = recipe.src_url; 
    let recipeLabel = recipe.label;
    let message = `Link for recipe "${recipeLabel}": ${link}`;
    const senderEmail = "yumeek@test.com";
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
      <Container className={classes.root} >
        <CardMedia component="img" src={recipe.img_url} alt={recipe.label} className={classes.style}/>
        <Container className={classes.info_like}>
        <Typography variant="h3" align="left" width={1}>{recipe.label}</Typography>
          <div className={classes.container}>
            <div className={classes.info}>
              <span className={classes.typography}>{recipe.ingredients.length}</span>
              <span className={classes.font}>Ingredients</span>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className={classes.info}>
              <span className={classes.typography}>{recipe.energies}</span>
              <span className={classes.font}>Calories</span>
            </div>
          </div>
          <div className={classes.likeButton}>
            <Button 
              variant="contained"
              // disabled={handleDisabled}
              onClick={() => handleShare()}
            >
              Share The Link
            </Button>
          </div>
        </Container>
      </Container>
    </>
  );
}
