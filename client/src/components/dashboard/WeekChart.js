import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  LineSeries,
  ArgumentAxis,
  ValueAxis,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";

import { ValueScale, Stack } from "@devexpress/dx-react-chart";

const Label = (symbol) => (props) => {
  const { text } = props;
  return <ValueAxis.Label {...props} text={text + symbol} />;
};

const KCalLabel = Label(" kCal");
const GramLabel = Label(" g");

const modifyGramDomain = (domain) => [domain[0], 1000];
const modifyKCalDomain = () => [0, 5000];

export default function Demo() {
  const [chartRecipeData, setChartRecipeData] = useState();

  let { userid } = useParams();

  useEffect(() => {
    Promise.resolve(
      axios.get(`/api/users/${userid}/week`).then((res) => {
        const newData = res.data.data.map((el) => {
          el["carbs"] = el["carbs"] / 1000;
          el["protein"] = el["protein"] / 1000;
          el["fiber"] = el["fiber"] / 1000;
          el["fat"] = el["fat"] / 1000;
          return el;
        });
        setChartRecipeData(newData);
      })
    );
  }, []);

  return (
    <div>
      {chartRecipeData ? (
        <div>
          <button
            onClick={() => {
              console.log(chartRecipeData);
              console.log(Array.isArray(chartRecipeData));
              console.log(chartRecipeData[0]);
            }}
          >
            click
          </button>
          <Paper>
            <Chart data={chartRecipeData}>
              <ValueScale name="gram" modifyDomain={modifyGramDomain} />
              <ValueScale name="kCal" modifyDomain={modifyKCalDomain} />

              <ArgumentAxis />
              <ValueAxis scaleName="gram" labelComponent={GramLabel} />
              <ValueAxis
                scaleName="kCal"
                position="right"
                labelComponent={KCalLabel}
              />

              <Title text="Oil production vs Oil price" />

              <BarSeries
                name="Carbs"
                valueField="carbs"
                argumentField="weekday"
                scaleName="gram"
              />
              <BarSeries
                name="Protein"
                valueField="protein"
                argumentField="weekday"
                scaleName="gram"
              />
              <BarSeries
                name="Fiber"
                valueField="fiber"
                argumentField="weekday"
                scaleName="gram"
              />
              <BarSeries
                name="Fat"
                valueField="fat"
                argumentField="weekday"
                scaleName="gram"
              />
              <LineSeries
                name="Energies"
                valueField="energies"
                argumentField="weekday"
                scaleName="kCal"
              />
              <Stack
                stacks={[
                  {
                    series: ["Carbs", "Protein", "Fiber", "Fat"],
                  },
                ]}
              />
              <Legend />
            </Chart>
          </Paper>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

// const [chartData, setChartData] = useState();
