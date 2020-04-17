import React, { useState, useEffect } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import Grid from "@material-ui/core/Grid";

const style = {
  display: "inline-block",
  border: "1px gray",
  padding: "0.5rem 1rem",
  backgroundColor: "white",
  cursor: "move",
};

function getStyle(backgroundColor) {
  return {
    border: "1px solid rgba(0,0,0,0.2)",
    minHeight: "8rem",
    minWidth: "8rem",
    color: "white",
    backgroundColor,
    padding: "2rem",
    paddingTop: "1rem",
    margin: "1rem",
    textAlign: "center",
    float: "left",
    fontSize: "1rem",
  };
}

const Item = (props) => {
  const [, drag] = useDrag({ item: { type: "item" } });
  return (
    <div ref={drag} style={style}>
      {props.recipe.label}
    </div>
  );
};

const Dustbin = ({ greedy, children }) => {
  const [hasDropped, setHasDropped] = useState(false);
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);
  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: "item",
    drop(item, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop && !greedy) {
        return;
      }
      setHasDropped(true);
      setHasDroppedOnChild(didDrop);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });
  const text = greedy ? "greedy" : "not greedy";
  let backgroundColor = "rgba(0, 0, 0, .5)";
  if (isOverCurrent || (isOver && greedy)) {
    backgroundColor = "darkgreen";
  }
  return (
    <div ref={drop} style={getStyle(backgroundColor)}>
      {text}
      <br />
      {hasDropped && <span>dropped {hasDroppedOnChild && " on child"}</span>}

      <div>{children}</div>
    </div>
  );
};

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
    setDayRecipeList((prev) => ({
      ...prev,
      day: props.day["weekday"],
    }));
  }, [props.recipeList, props.day]);

  return (
    <div>
      {dayRecipleList.recipeList ? (
        <DndProvider backend={Backend}>
          <Grid container spacing={3} direction="row" alignItems="center">
            <Grid item xs={6}>
              <Grid
                container
                spacing={1}
                direction="column"
                alignItems="center"
              >
                {dayRecipleList.recipeList.map((el) => {
                  return (
                    <Grid key={el.id} item xs={6}>
                      <Item recipe={el} />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Dustbin></Dustbin>
            </Grid>
          </Grid>
        </DndProvider>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
