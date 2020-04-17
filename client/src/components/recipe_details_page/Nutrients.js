import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
      margin: "5%",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        alignItems: "center",
      },
    },
    title: {
      fontSize: "20px"
    },
    bubble: { width: "12%", 
             height: "12%", 
    } 
  })
);

export default function Nutrients(props) {
  const { recipe } = props;
  const classes = useStyles();

  return (
    <>
    <Typography className={classes.title}>Nutrition Facts</Typography>
    <div className={classes.root}>
      <CircularProgressbar value={recipe.energies} 
                          text={"Calories"}    
                          minValue={0}
                          maxValue={2000}
                          className={classes.bubble}/>
      <CircularProgressbar value={recipe.protein / 1000} 
                          text={"Protein"} 
                          minValue={0}
                          maxValue={51.16}
                          className={classes.bubble}/>
      <CircularProgressbar value={recipe.fiber / 1000} 
                          text={"Fiber"} 
                          minValue={0}
                          maxValue={25}
                          className={classes.bubble}/>
      <CircularProgressbar value={recipe.carbs / 1000} 
                          text={"Carbs"} 
                          minValue={0}
                          maxValue={300}
                          className={classes.bubble}/>
      <CircularProgressbar value={recipe.fat / 1000} 
                          text={"Fat"} 
                          minValue={0}
                          maxValue={64.44}
                          className={classes.bubble}/>
      </div>
      <span>* Percent Daily Values are based on a 2,000 calorie diet. Your Daily Values may be higher or lower depending on your calorie needs.</span>
    </>
  ); 
}


