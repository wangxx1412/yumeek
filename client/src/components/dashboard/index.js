import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import WeekChart from "./WeekChart";
import DayChart from "./DayChart";

const useStyles = makeStyles((theme) => ({}));

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [selectWeek, setSelectWeek] = useState("week");
  const [dayData, setdayData] = useState();
  const [chartRecipeData, setChartRecipeData] = useState();

  let { userid } = useParams();

  useEffect(() => {
    Promise.resolve(
      axios.get(`/api/users/${userid}/week`).then((res) => {
        const newData = res.data.data.map((el) => {
          el["carbs"] = el["carbs"] / 1000;
          el["protein"] = el["protein"] / 1000;
          el["fiber"] = el["fiber"] / 1000;
          el["fat"] = el["fat"] / 1000;
          return el;
        });
        let result = [];

        const sunday = newData.filter((el) => el["weekday"] === "Sunday");
        const monday = newData.filter((el) => el["weekday"] === "Monday");
        const tuesday = newData.filter((el) => el["weekday"] === "Tuesday");
        const wednesday = newData.filter((el) => el["weekday"] === "Wednesday");
        const thursday = newData.filter((el) => el["weekday"] === "Thursday");
        const friday = newData.filter((el) => el["weekday"] === "Friday");
        const saturday = newData.filter((el) => el["weekday"] === "Saturday");

        result.push(...sunday);
        result.push(...monday);
        result.push(...tuesday);
        result.push(...wednesday);
        result.push(...thursday);
        result.push(...friday);
        result.push(...saturday);

        setChartRecipeData(result);
      })
    );
  }, []);

  const handleSelectDay = (target) => {
    setSelectWeek("day");
    setdayData(target);
  };

  const handleSelectWeek = (target) => {
    setSelectWeek("week");
    setdayData();
  };

  const selectDay = (day) => {
    setdayData(chartRecipeData.filter((el) => el["weekday"] === day)[0]);
    setSelectWeek("day");
  };

  return (
    <div className={clsx("Dashboard", classes.root)}>
      {selectWeek === "week" ? (
        <WeekChart
          handleSelectDay={handleSelectDay}
          chartRecipeData={chartRecipeData}
        />
      ) : (
        <DayChart
          handleSelectWeek={handleSelectWeek}
          data={dayData}
          selectDay={selectDay}
        />
      )}
    </div>
  );
}
