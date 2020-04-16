import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { PieSeries, Chart, Title, Tooltip } from '@devexpress/dx-react-chart-material-ui';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    width: "45%",
    rotation: Math.PI * 1,
  }
});

const formatNutrients = (recipe) => {
  const nutrientsArray = [
  {name: "protein", value: recipe["protein"]},
  {name: "fiber", value: recipe["fiber"]},
  {name: "carbs", value: recipe["carbs"]},
  {name: "fat", value: recipe["fat"]},
  {name: "energies", value: recipe["energies"]}
  ]
  return nutrientsArray;
}

export default function Nutrients(props) {
  const { recipe } = props;
  const classes = useStyles();
  const nutrients = formatNutrients(recipe);

  return (
    <div className={classes.root}>
     <Paper className={classes.paper}>
        <Chart data={nutrients} > 
          <Title text="Nutrition Facts" />
          <PieSeries
              valueField="value"
              argumentField="name"
              innerRadius={0.7}
            />
        </Chart>
     </Paper>
    </div>
  );

}
