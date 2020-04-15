import React, { useState } from "react";
import WeekChart from "./WeekChart";

// DayCardList(child: pop up AddRecipe component), Chart,
export default function Dashboard() {
  return (
    <div>
      <WeekChart />
    </div>
  );
}
