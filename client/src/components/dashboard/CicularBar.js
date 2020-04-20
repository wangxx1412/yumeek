import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularBar(props) {
  const value = Math.round(props.text * 10000) / 100;

  return (
    <div style={{ width: "200px" }}>
      <CircularProgressbarWithChildren value={value} maxValue={100}>
        <div style={{ fontSize: 12, marginTop: -5 }}>
          <div>
            {props.name === "Calories" ? (
              <p>
                {props.amount} {props.name}
              </p>
            ) : (
              <p>{props.name}</p>
            )}
          </div>
          <strong>{`${value}% DV`}</strong>
          {props.name !== "Calories" ? (
            <p>{`${Math.round(props.amount)} g`}</p>
          ) : (
            <p></p>
          )}
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}
