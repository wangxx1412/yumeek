import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";

import {
  Chart,
  BarSeries,
  LineSeries,
  ArgumentAxis,
  ValueAxis,
  Title,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";

import {
  Animation,
  ValueScale,
  Stack,
  EventTracker,
  SelectionState,
} from "@devexpress/dx-react-chart";

const Label = (symbol) => (props) => {
  const { text } = props;
  return <ValueAxis.Label {...props} text={text + symbol} />;
};

const KCalLabel = Label(" kCal");
const GramLabel = Label(" g");

const modifyGramDomain = (domain) => [domain[0], 1000];
const modifyKCalDomain = () => [0, 5000];

export default function WeekChart(props) {
  const [selection, setSelection] = useState();
  const { chartRecipeData } = props;

  const handleSelect = ({ targets }) => {
    if (targets[0] !== undefined) {
      props.handleSelectDay(chartRecipeData[targets[0].point]);
    }
  };

  return (
    <div>
      {chartRecipeData ? (
        <div>
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

              <Title text="Nutrients grams vs Energies kCal" />

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
              <Animation />
              <Legend />
              <EventTracker onClick={handleSelect} />
              <SelectionState selection={selection} />
            </Chart>
          </Paper>
        </div>
      ) : (
        <div>
          <Skeleton variant="text" width={1200} height={100} animation="wave" />
          <Skeleton variant="rect" width={1200} height={400} animation="wave" />
          <Skeleton variant="text" width={1200} height={100} animation="wave" />
        </div>
      )}
    </div>
  );
}
