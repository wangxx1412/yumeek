import React, { useState } from "react";
import CircularBar from "./CicularBar";
import Grid from "@material-ui/core/Grid";

export default function DayChart(props) {
  const [calPerDay, setcalPerDay] = useState(2400);

  let energies = 0;
  let carbs = 0;
  let fiber = 0;
  let protein = 0;
  let fat = 0;

  if (props.data) {
    energies = props.data["energies"];
    carbs = props.data["carbs"];
    fiber = props.data["fiber"];
    protein = props.data["protein"];
    fat = props.data["fat"];
  }

  const calengergies = energies / calPerDay;
  const calcarbs = carbs / 300;
  const calfiber = fiber / 25;
  const calprotein = protein / 50;
  const calfat = fat / 65;

  // calories for nutrients per gram
  // fat:9 carbs:4 protein:4 fiber:2
  // DV: fat:65g carbs:300g fiber:25g protein: 50g

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs>
          <CircularBar text={calengergies} name="Calories" amount={energies} />
        </Grid>
        <Grid item xs>
          <CircularBar text={calcarbs} name="Carbs" amount={carbs} />
        </Grid>
        <Grid item xs>
          <CircularBar text={calprotein} name="Protein" amount={protein} />
        </Grid>
        <Grid item xs>
          <CircularBar text={calfat} name="Fat" amount={fat} />
        </Grid>
        <Grid item xs>
          <CircularBar text={calfiber} name="Fiber" amount={fiber} />
        </Grid>
      </Grid>
    </div>
  );
}
