import React, { useEffect } from "react";
import ItemTypes from "./ItemTypes";
import AddedItem from "./AddedItem";
import { useDrop } from "react-dnd";

import Grid from "@material-ui/core/Grid";

const style = {
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
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
    return "#222";
  }
}
export default function Dustbin({ recipeList, allowedDropEffect }) {
  useEffect(() => {
    if (recipeList) {
      console.log(recipeList);
    }
    console.log(recipeList);
  }, []);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.SAVED,
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
      {`Works with ${allowedDropEffect} drop effect`}
      <br />
      <br />
      {isActive ? "Release to drop" : "Drag a box here"}
      {recipeList ? (
        <Grid container spacing={1} direction="column" alignItems="center">
          {recipeList.map((el) => {
            return (
              <Grid key={el.id} item xs={6}>
                <AddedItem recipe={el} />
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
