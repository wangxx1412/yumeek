import React, { useState, useEffect } from "react";
import CircularBar from "./CicularBar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

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
  let weekday = props.data["weekday"];
  // calories for nutrients per gram
  // fat:9 carbs:4 protein:4 fiber:2
  // DV: fat:65g carbs:300g fiber:25g protein: 50g

  return (
    <div>
      <Button
        onClick={() => props.selectDay("Sunday")}
        disabled={weekday === "Sunday"}
      >
        Sunday
      </Button>
      <Button
        onClick={() => props.selectDay("Monday")}
        disabled={weekday === "Monday"}
      >
        Monday
      </Button>
      <Button
        onClick={() => props.selectDay("Tuesday")}
        disabled={weekday === "Tuesday"}
      >
        Tuesday
      </Button>
      <Button
        onClick={() => props.selectDay("Wednesday")}
        disabled={weekday === "Wednesday"}
      >
        Wednesday
      </Button>
      <Button
        onClick={() => props.selectDay("Thursday")}
        disabled={weekday === "Thursday"}
      >
        Thursday
      </Button>
      <Button
        onClick={() => props.selectDay("Friday")}
        disabled={weekday === "Friday"}
      >
        Friday
      </Button>
      <Button
        onClick={() => props.selectDay("Saturday")}
        disabled={weekday === "Saturday"}
      >
        Saturday
      </Button>
      <Button onClick={backToWeek}>Week Overview</Button>

      <Divider />
      <Grid container spacing={1}>
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
