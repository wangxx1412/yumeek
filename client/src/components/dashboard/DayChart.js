import React, { useState, useEffect } from "react";

export default function DayChart(props) {
  const backToWeek = () => {
    props.handleSelectWeek();
  };

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
    </div>
  );
}
