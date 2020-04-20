import React from "react";
import ItemTypes from "./ItemTypes";
import AddedItem from "./AddedItem";
import { useDrop } from "react-dnd";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

const style = {
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "#191A32",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
  width: "100%",
  minHeight: "400px",
  top: "0",
  borderRadius: "10px",
};
function selectBackgroundColor(isActive, canDrop) {
  if (isActive) {
    return "#F17E75";
  } else if (canDrop) {
    return "#F59E7A";
  } else {
    return "#DCF3F3";
  }
}
export default function Dustbin({
  recipeList,
  allowedDropEffect,
  weekorday,
  handlePut,
  deleteRecipe,
}) {
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
      <Typography variant="h5">{`${weekorday} Recipes`}</Typography>
      <br />
      {/* {isActive ? "Release to drop" : "Drag a box here"} */}
      {recipeList ? (
        <Grid container spacing={1} direction="column">
          {recipeList
            .filter((el) => el["weekday"] === weekorday)
            .map((el) => {
              return (
                <Grid key={el.id} item xs={12}>
                  <AddedItem
                    recipe={el}
                    handlePut={handlePut}
                    deleteRecipe={deleteRecipe}
                  />
                </Grid>
              );
            })}
        </Grid>
      ) : (
        <Skeleton variant="rect" width={440} height={400} animation="wave" />
      )}
    </div>
  );
}
