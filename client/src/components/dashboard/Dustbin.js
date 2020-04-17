import React, { useEffect } from "react";
import ItemTypes from "./ItemTypes";
import { useDrop } from "react-dnd";

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
const Dustbin = ({ addedRecipeList, allowedDropEffect }) => {
  useEffect(() => {
    if (addedRecipeList) {
      console.log(addedRecipeList);
    }
  }, []);

  console.log(addedRecipeList);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
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
    </div>
  );
};
export default Dustbin;
