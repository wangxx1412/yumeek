import React, { useState } from "react";
import WeekChart from "./WeekChart";
import DayChart from "./DayChart";

// DayCardList(child: pop up AddRecipe component), Chart,
export default function Dashboard() {
  const [selectWeek, setSelectWeek] = useState("week");
  const [dayData, setdayData] = useState();

  const handleSelectDay = (target) => {
    console.log(target);
    setSelectWeek("day");
    setdayData(target);
  };

  const handleSelectWeek = (target) => {
    console.log(target);
    setSelectWeek("week");
    setdayData();
  };

  return (
    <div>
      {selectWeek === "week" ? (
        <WeekChart handleSelectDay={handleSelectDay} />
      ) : (
        <DayChart handleSelectWeek={handleSelectWeek} data={dayData} />
      )}
    </div>
  );
}
