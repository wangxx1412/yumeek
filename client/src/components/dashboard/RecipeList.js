import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Grid from "@material-ui/core/Grid";
import Box from "./AddedItem";
import Dustbin from "./Dustbin";
import SavedList from "./SavedList";

export default function RecipeList(props) {
  const [dayRecipleList, setDayRecipeList] = useState({
    day: "",
    recipeList: [],
  });

  useEffect(() => {
    if (props.recipeList) {
      setDayRecipeList((prev) => ({
        ...prev,
        recipeList: props.recipeList,
      }));
    }
    if (props.day) {
      setDayRecipeList((prev) => ({
        ...prev,
        day: props.day["weekday"],
      }));
    }
  }, [props.recipeList, props.day]);

  // const addList = (label) => {
  //   const result = dayRecipleList.recipeList.filter(
  //     (el) => el["label"] !== label
  //   );
  //   setDayRecipeList((prev) => ({
  //     ...prev,
  //     recipeList: result,
  //   }));
  // };

  // const removeList = (label) => {
  //   const result = dayRecipleList.recipeList.filter(
  //     (el) => el["label"] !== label
  //   );
  //   setDayRecipeList((prev) => ({
  //     ...prev,
  //     recipeList: result,
  //   }));
  // };

  return (
    <div>
      {dayRecipleList.recipeList ? (
        <DndProvider backend={Backend}>
          <Grid container spacing={1} direction="row" alignItems="center">
            <Grid item xs={6}>
              <SavedList
                allowedDropEffect="any"
                recipeList={dayRecipleList.recipeList.filter(
                  (el) => el["weekday"] === null
                )}
                weekorday={props.weekorday}
                handlePut={props.handlePut}
              ></SavedList>
            </Grid>
            <Grid item xs={6}>
              {props.weekorday === "week" ? (
                <div>Add</div>
              ) : (
                <Dustbin
                  allowedDropEffect="any"
                  recipeList={dayRecipleList.recipeList.filter(
                    (el) => el["weekday"] !== null
                  )}
                  weekorday={props.weekorday}
                  handlePut={props.handlePut}
                ></Dustbin>
              )}
            </Grid>
          </Grid>
        </DndProvider>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
