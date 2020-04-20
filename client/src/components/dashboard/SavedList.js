import React, { useEffect } from "react";
import ItemTypes from "./ItemTypes";
import SavedItem from "./SavedItem";
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
  borderRadius: "10px",
};
function selectBackgroundColor(isActive, canDrop) {
  if (isActive) {
    return "#F17E75";
  } else if (canDrop) {
    return "#F59E7A";
  } else {
    return "#72D1DC";
  }
}
export default function SavedList({
  recipeList,
  allowedDropEffect,
  weekorday,
  handlePut,
  deleteRecipe,
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
      <Typography variant="h5">{`Saved Recipes`}</Typography>
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
