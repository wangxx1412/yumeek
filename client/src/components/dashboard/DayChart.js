import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function DayChart(props) {
  const [calPerDay, setcalPerDay] = useState(2000);
  const backToWeek = () => {
    props.handleSelectWeek();
  };

  const value = 0.66;

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
      <CircularProgressbar
        value={value}
        maxValue={1}
        text={`${value * 100}%`}
      />
    </div>
  );
}
