import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import clsx from "clsx";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import WeekChart from "./WeekChart";
import DayChart from "./DayChart";
import RecipeList from "./RecipeList";

const useStyles = makeStyles((theme) => ({}));

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();

  const [selectWeek, setSelectWeek] = useState("week");
  const [dayData, setdayData] = useState({ weekday: "" });
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

  let weekday = dayData["weekday"];

  const handleSelectDay = (target) => {
    setSelectWeek("day");
    setdayData(target);
  };

  const handleSelectWeek = (target) => {
    setSelectWeek("week");
    setdayData({ weekday: "" });
  };

  const selectDay = (day) => {
    setdayData(chartRecipeData.filter((el) => el["weekday"] === day)[0]);
    setSelectWeek("day");
  };

  return (
    <div className={clsx("Dashboard", classes.root)}>
      <Button
        size="large"
        onClick={() => selectDay("Sunday")}
        disabled={weekday === "Sunday"}
      >
        Sunday
      </Button>
      <Button
        size="large"
        onClick={() => selectDay("Monday")}
        disabled={weekday === "Monday"}
      >
        Monday
      </Button>
      <Button
        size="large"
        onClick={() => selectDay("Tuesday")}
        disabled={weekday === "Tuesday"}
      >
        Tuesday
      </Button>
      <Button
        size="large"
        onClick={() => selectDay("Wednesday")}
        disabled={weekday === "Wednesday"}
      >
        Wednesday
      </Button>
      <Button
        size="large"
        onClick={() => selectDay("Thursday")}
        disabled={weekday === "Thursday"}
      >
        Thursday
      </Button>
      <Button
        size="large"
        onClick={() => selectDay("Friday")}
        disabled={weekday === "Friday"}
      >
        Friday
      </Button>
      <Button
        size="large"
        onClick={() => selectDay("Saturday")}
        disabled={weekday === "Saturday"}
      >
        Saturday
      </Button>
      <Button
        size="large"
        onClick={handleSelectWeek}
        disabled={selectWeek === "week"}
      >
        Week Overview
      </Button>
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
      <RecipeList />
    </div>
  );
}
