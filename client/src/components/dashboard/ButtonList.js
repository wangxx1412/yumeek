import React from "react";
import Button from "@material-ui/core/Button";

export default function ButtonList({
  selectDay,
  handleSelectWeek,
  selectOption,
}) {
  return (
    <div>
      <Button size="large" onClick={() => selectDay("Sunday")}>
        Sunday
      </Button>
      <Button size="large" onClick={() => selectDay("Monday")}>
        Monday
      </Button>
      <Button size="large" onClick={() => selectDay("Tuesday")}>
        Tuesday
      </Button>
      <Button size="large" onClick={() => selectDay("Wednesday")}>
        Wednesday
      </Button>
      <Button size="large" onClick={() => selectDay("Thursday")}>
        Thursday
      </Button>
      <Button size="large" onClick={() => selectDay("Friday")}>
        Friday
      </Button>
      <Button size="large" onClick={() => selectDay("Saturday")}>
        Saturday
      </Button>
      <Button
        size="large"
        onClick={handleSelectWeek}
        disabled={selectOption === "week"}
      >
        Week Overview
      </Button>
    </div>
  );
}
