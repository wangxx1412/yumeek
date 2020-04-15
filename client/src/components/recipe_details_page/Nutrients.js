import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { PieSeries, Chart, BarSeries, Title, ArgumentAxis, LineSeries, Tooltip} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    width: "45%"
  }
});

export default function Nutrients(props) {
  // const { nutrients } = props;
  // console.log("INSIDE NUTRIENTS.JS", nutrients)
  
  const classes = useStyles();
  const nutrients = [
    {name: "protein", value: 31719},
    {name: "fiber", value: 3060},
    {name: "carbs", value: 61998},
    {name: "fat", value: 59297},
    {name: "energies", value: 898}
  ]

   return (
    <div className={classes.root}>
     <Paper className={classes.paper}>
        <Chart data={nutrients} > 
          <Title text="Nutrition Facts" />
          {/* <Tooltip targetItem={nutrients} >  */}
          <PieSeries
              valueField="value"
              argumentField="name"
              innerRadius={0.7}
              // onClick={}
            />
            {/* </Tooltip> */}
            {/* <Animation /> */}
        </Chart>
     </Paper>
    </div>
  );
}


/* App.js */
// var React = require('react');
// var Component = React.Component;
// var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// class App extends Component {
// 	render() {
// 		const options = {
// 			animationEnabled: true,
// 			theme: "light2",
// 			title:{
// 				text: "Most Popular Social Networking Sites"
// 			},
// 			axisX: {
// 				title: "Social Network",
// 				reversed: true,
// 			},
// 			axisY: {
// 				title: "Monthly Active Users",
// 				labelFormatter: this.addSymbols
// 			},
// 			data: [{
// 				type: "bar",
// 				dataPoints: [
// 					{ y:  2200000000, label: "Facebook" },
// 					{ y:  1800000000, label: "YouTube" },
// 					{ y:  800000000, label: "Instagram" },
// 					{ y:  563000000, label: "Qzone" },
// 					{ y:  376000000, label: "Weibo" },
// 					{ y:  336000000, label: "Twitter" },
// 					{ y:  330000000, label: "Reddit" }
// 				]
// 			}]
// 		}
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options}
// 				/* onRef={ref => this.chart = ref} */
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}
// 	addSymbols(e){
// 		var suffixes = ["", "K", "M", "B"];
// 		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
// 		if(order > suffixes.length - 1)
// 			order = suffixes.length - 1;
// 		var suffix = suffixes[order];
// 		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
// 	}
// }
