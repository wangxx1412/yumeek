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

const nutrients = [
  {name: "protein", value: 31719},
  {name: "fiber", value: 3060},
  {name: "carbs", value: 61998},
  {name: "fat", value: 59297},
  {name: "energies", value: 898}
]

export default function Nutrients() {
  const classes = useStyles();

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
