import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Grid from "@material-ui/core/Grid";
import Box from "./Box";
import Dustbin from "./Dustbin";

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
      console.log(props.recipeList);
    }
    setDayRecipeList((prev) => ({
      ...prev,
      day: props.day["weekday"],
    }));
  }, [props.recipeList, props.day]);

  const handleDragBox = (label) => {
    const result = dayRecipleList.recipeList.filter(
      (el) => el["label"] !== label
    );

    setDayRecipeList((prev) => ({
      ...prev,
      recipeList: result,
    }));
  };

  return (
    <div>
      {dayRecipleList.recipeList ? (
        <DndProvider backend={Backend}>
          <Grid container spacing={1} direction="row" alignItems="center">
            <Grid item xs={6}>
              <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
              >
                {dayRecipleList.recipeList
                  .filter((el) => el["weekday"] === null)
                  .map((el) => {
                    return (
                      <Grid key={el.id} item xs={6}>
                        <Box recipe={el} handleDragBox={handleDragBox} />
                      </Grid>
                    );
                  })}
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Dustbin
                allowedDropEffect="any"
                addedRecipeList={dayRecipleList.recipeList.filter(
                  (el) => el["weekday"] !== null
                )}
              ></Dustbin>
            </Grid>
          </Grid>
        </DndProvider>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
