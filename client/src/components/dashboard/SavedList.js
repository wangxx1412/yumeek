import React, { useEffect } from "react";
import ItemTypes from "./ItemTypes";
import SavedItem from "./SavedItem";
import { useDrop } from "react-dnd";

import Grid from "@material-ui/core/Grid";

const style = {
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "#191A32",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};
function selectBackgroundColor(isActive, canDrop) {
  if (isActive) {
    return "darkgreen";
  } else if (canDrop) {
    return "darkkhaki";
  } else {
    return "#F2F2F4";
  }
}
export default function SavedList({
  recipeList,
  allowedDropEffect,
  weekorday,
  handlePut,
}) {
  useEffect(() => {
    if (recipeList) {
      console.log(recipeList);
    }
  }, []);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.ADDED,
    drop: () => ({
      name: `${allowedDropEffect} Dustbin`,
      allowedDropEffect,
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  const backgroundColor = selectBackgroundColor(isActive, canDrop);
  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      <Grid container>{`Saved Recipes`}</Grid>
      <br />
      {/* {isActive ? "Release to drop" : "Drag a box here"} */}
      {recipeList ? (
        <Grid container spacing={1} direction="column">
          {recipeList.map((el) => {
            return (
              <Grid key={el.id} item xs={12}>
                <SavedItem
                  recipe={el}
                  weekorday={weekorday}
                  handlePut={handlePut}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
