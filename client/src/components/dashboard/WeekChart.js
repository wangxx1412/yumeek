import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Paper from "@material-ui/core/Paper";
import {
  Animation,
  Chart,
  BarSeries,
  LineSeries,
  ArgumentAxis,
  ValueAxis,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { ValueScale, Stack } from "@devexpress/dx-react-chart";
import { oilProduction } from "./demo-data/data-vizualization";

const Label = (symbol) => (props) => {
  const { text } = props;
  return <ValueAxis.Label {...props} text={text + symbol} />;
};

const PriceLabel = Label(" $");
const LabelWithThousand = Label(" k");

const modifyOilDomain = (domain) => [domain[0], 2200];
const modifyPriceDomain = () => [0, 110];

// DayCardList(child: pop up AddRecipe component), Chart,
export default function WeekChart() {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    axios.get("/api/users/{userid}/week").then((data) => {
      setChartData(data);
    });
  }, []);

  return (
    <Paper>
      <Chart data={chartData}>
        <ValueScale name="oil" modifyDomain={modifyOilDomain} />
        <ValueScale name="price" modifyDomain={modifyPriceDomain} />

        <ArgumentAxis />
        <ValueAxis scaleName="oil" labelComponent={LabelWithThousand} />
        <ValueAxis
          scaleName="price"
          position="right"
          labelComponent={PriceLabel}
        />

        <Title text="Oil production vs Oil price" />

        <BarSeries
          name="USA"
          valueField="usa"
          argumentField="year"
          scaleName="oil"
        />
        <BarSeries
          name="Saudi Arabia"
          valueField="saudiArabia"
          argumentField="year"
          scaleName="oil"
        />
        <BarSeries
          name="Iran"
          valueField="iran"
          argumentField="year"
          scaleName="oil"
        />
        <BarSeries
          name="Mexico"
          valueField="mexico"
          argumentField="year"
          scaleName="oil"
        />
        <BarSeries
          name="Russia"
          valueField="russia"
          argumentField="year"
          scaleName="oil"
        />
        <LineSeries
          name="Oil Price"
          valueField="price"
          argumentField="year"
          scaleName="price"
        />
        <Stack
          stacks={[
            { series: ["USA", "Saudi Arabia", "Iran", "Mexico", "Russia"] },
          ]}
        />
        <Legend />
      </Chart>
    </Paper>
  );
}
