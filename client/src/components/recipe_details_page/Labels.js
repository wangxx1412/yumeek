import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      width: "30%"
    },
    [theme.breakpoints.down("sm")]: {
      width: "30%"
    }
     
  },
  label: {
    display: "flex"
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      width: "25 em"
    }
  }
}));

export default function Labels(props) {
  const { labels } = props;
  const classes = useStyles();
  const icons = [
    {name: "peanut-free", src: "https://img.icons8.com/offices/38/000000/peanuts.png"},
    {name: "tree-nut-free", src: "https://img.icons8.com/offices/38/000000/no-nuts.png"}, 
    {name: "vegetarian", src: `https://img.icons8.com/color/50/000000/vegan-symbol.png`},
    {name: "vegan", src: "https://img.icons8.com/color/50/000000/vegan-food.png"},
    {name: "alcohol-free", src: "https://img.icons8.com/color/50/000000/no-alcohol.png"},
    {name: "sugar-conscious", src: "https://img.icons8.com/offices/38/000000/sugar-cube.png"},
    {name: "gluten-free", src: "https://img.icons8.com/color/50/000000/no-gluten.png"}
  ];
  
  let src = '';

  return (
    <section className={classes.root}>
        {labels.map((label, index) => {
          icons.filter(item => {
            if (label.toLowerCase() === item.name){
              src = item.src;
            }
          })
            return (
            <div className={classes.label} key={index}>
              <img src={src} alt={label} className={classes.icon}/>
              <p>{label}</p>
            </div>
            );
          }
        )}
    </section>
  );
}