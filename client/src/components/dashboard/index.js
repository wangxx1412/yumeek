import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import clsx from "clsx";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import WeekChart from "./WeekChart";
import DayChart from "./DayChart";
import RecipeList from "./RecipeList";

const useStyles = makeStyles((theme) => ({}));

export default function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();

  const [selectWeek, setSelectWeek] = useState("week");
  const [dayData, setdayData] = useState({ weekday: null });
  const [chartRecipeData, setChartRecipeData] = useState();
  const [recipeList, setRecipeList] = useState();

  let { userid } = useParams();

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get(`/api/users/${userid}/week`)),
      Promise.resolve(axios.get(`/api/users/${userid}`)),
    ]).then((all) => {
      // For chartRecipeData
      const newData = all[0].data.data.map((el) => {
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

      // For RecipeList
      setRecipeList(all[1].data.data);
    });
  }, []);

  // let weekday = dayData["weekday"];

  const handleSelectDay = (target) => {
    setSelectWeek("day");
    setdayData(target);
  };

  const handleSelectWeek = (target) => {
    setSelectWeek("week");
    setdayData({ weekday: null });
  };

  const selectDay = (day) => {
    setdayData(chartRecipeData.filter((el) => el["weekday"] === day)[0]);
    setSelectWeek("day");
  };

  return (
    <div className={clsx("Dashboard", classes.root)}>
      <Grid container spacing={1} direction="column">
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
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
            disabled={selectWeek === "week"}
          >
            Week Overview
          </Button>
        </Grid>
        <Grid item xs={12}>
          <RecipeList recipeList={recipeList} day={dayData} />
        </Grid>
      </Grid>
    </div>
  );
}
