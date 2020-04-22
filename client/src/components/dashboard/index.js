import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import WeekChart from "./WeekChart";
import DayChart from "./DayChart";
import RecipeList from "./RecipeList";
import ButtonList from "./ButtonList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#Fafafa",
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  const today = new Date();
  const dayIndex = today.getDay();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [selectOption, setSelectOption] = useState(weekdays[dayIndex]);
  const [chartRecipeData, setChartRecipeData] = useState([]);
  const [recipeList, setRecipeList] = useState();

  let { userid } = useParams();

  useEffect(() => {
    Promise.resolve(axios.get(`/api/users/${userid}`)).then((res) => {
      setRecipeList(res.data.data);
    });
  }, []);

  useEffect(() => {
    Promise.resolve(axios.get(`/api/users/${userid}/week`)).then((res) => {
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
    });
  }, [recipeList]);

  const selectWeek = () => {
    setSelectOption("week");
  };

  const selectDay = (day) => {
    setSelectOption(day);
    // const newDayData = chartRecipeData.filter((el) => el["weekday"] === day)[0];
    // // setdayData(newDayData);
  };

  const handlePut = (item) => {
    const newList = recipeList.filter((el) => el.id !== item.recipe.id);
    newList.push(item.recipe);
    setRecipeList(newList);
  };

  return (
    <Grid
      container
      spacing={5}
      direction="column"
      className={clsx("Dashboard", classes.root)}
    >
      <Grid item xs={10}>
        <ButtonList
          selectDay={selectDay}
          selectWeek={selectWeek}
          selectOption={selectOption}
        />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h3" gutterBottom>
          {`Nutrient Table`}
        </Typography>

        {selectOption === "week" && (
          <WeekChart chartRecipeData={chartRecipeData} />
        )}
        {selectOption !== "week" && (
          <DayChart
            chartRecipeData={chartRecipeData}
            selectDay={selectOption}
          />
        )}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          {`Recipe List`}
        </Typography>
        <RecipeList
          recipeList={recipeList}
          weekorday={selectOption}
          handlePut={handlePut}
        />
      </Grid>
    </Grid>
  );
}
