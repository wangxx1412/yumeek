import React from "react";
import ItemTypes from "./ItemTypes";
import { useDrag } from "react-dnd";

const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  float: "left",
};

const Box = (props) => {
  const item = { recipe: props.recipe, type: ItemTypes.BOX };
  const [{ opacity }, drag] = useDrag({
    item,
    end(item, monitor) {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        const isDropAllowed =
          dropResult.allowedDropEffect === "any" ||
          dropResult.allowedDropEffect === dropResult.dropEffect;

        if (isDropAllowed) {
          // Make axios put request
          console.log(item);
          console.log(props);
          props.handleDragBox(item.recipe.label);
        }
      }
    },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {props.recipe.label}
    </div>
  );
};
export default Box;
