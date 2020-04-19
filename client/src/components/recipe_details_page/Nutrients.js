import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container} from '@material-ui/core';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      marginBottom: "30px",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        alignItems: "center"
      },
    },
    title: {
      fontSize: "20px",
      margin: "3%"
    },
    container: {  
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "18px",
    } 
  })
);

export default function Nutrients(props) {
  const { recipe } = props;
  const classes = useStyles();
  const nutrients = [
    {name: "Calories", value: recipe.energies, maxValue: 2000},
    {name: "Protein", value: recipe.protein, maxValue: 51.16},
    {name: "Fiber", value: recipe.fiber, maxValue: 25},
    {name: "Carbs", value: recipe.carbs, maxValue: 300},
    {name: "Fat", value: recipe.fat, maxValue: 64.44}
  ]

  return (
    <>
      <Typography className={classes.title}>Nutrition Facts</Typography>
      <div className={classes.root} >
        {nutrients.map((item, index) => {
          let value = item.value / 1000;
          let text = `${(item.value / 1000).toFixed(0)}g`;
          let pathColor = "#bedad9";
          if (item.name === "Calories") {
              value = item.value;
              text = item.value;
          }
          if (value > item.maxValue) {
            pathColor = "#e36d31";
          }
          return (
              <Container key={index}className={classes.container}>
                <CircularProgressbar value={value}
                                    text={text}   
                                    maxValue={item.maxValue}
                                    strokeWidth={6}
                                    background
                                    backgroundPadding={2}
                                    styles = {buildStyles({
                                      backgroundColor: "#dddddd9c",
                                      textColor: '#606060',
                                      pathColor: pathColor, 
                                      trailColor: "#f5f5f5"
                                    })}
                                    />
                <span>{item.name}</span>
              </Container>
          )
        })}
      </div>
      <span>* Percent Daily Values are based on a 2,000 calorie diet. Your Daily Values may be higher or lower depending on your calorie needs.</span>
    </>
  ); 
}


