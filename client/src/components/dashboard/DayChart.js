import React, { useState, useEffect } from "react";
import CircularBar from "./CicularBar";

import Grid from "@material-ui/core/Grid";

export default function DayChart(props) {
  const [calPerDay, setcalPerDay] = useState(2000);

  const backToWeek = () => {
    props.handleSelectWeek();
  };

  const engergies = props.data["energies"] / calPerDay;
  const carbs = props.data["carbs"] / 300;
  const fiber = props.data["fiber"] / 25;
  const protein = props.data["protein"] / 50;
  const fat = props.data["fat"] / 65;

  // calories for nutrients per gram
  // fat:9 carbs:4 protein:4 fiber:2
  // DV: fat:65g carbs:300g fiber:25g protein: 50g

  return (
    <div>
      DayChart
      <button
        onClick={() => {
          console.log(props.data);
        }}
      >
        click
      </button>
      <button onClick={backToWeek}>Back to week chart</button>
      <Grid container spacing={3}>
        <Grid item xs>
          <CircularBar
            text={engergies}
            name="Calories"
            amount={props.data["energies"]}
          />
        </Grid>
        <Grid item xs>
          <CircularBar text={carbs} name="Carbs" amount={props.data["carbs"]} />
        </Grid>
        <Grid item xs>
          <CircularBar
            text={protein}
            name="Protein"
            amount={props.data["protein"]}
          />
        </Grid>
        <Grid item xs>
          <CircularBar text={fat} name="Fat" amount={props.data["fat"]} />
        </Grid>
        <Grid item xs>
          <CircularBar text={fiber} name="Fiber" amount={props.data["fiber"]} />
        </Grid>
      </Grid>
    </div>
  );
}
