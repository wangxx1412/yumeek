import React from "react";
import ItemTypes from "./ItemTypes";
import { useDrag } from "react-dnd";
import { useParams } from "react-router-dom";
import axios from "axios";

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  float: "left",
};

const SavedItem = (props) => {
  const item = { recipe: props.recipe, type: ItemTypes.SAVED };
  let { userid } = useParams();
  const [, drag] = useDrag({
    item,
    end(item, monitor) {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        const isDropAllowed =
          dropResult.allowedDropEffect === "any" ||
          dropResult.allowedDropEffect === dropResult.dropEffect;

        if (isDropAllowed) {
          // Make axios put request
          // console.log(item.recipe["weekday"]);
          const recipeid = item.recipe.id;
          // props.handleDragBox(item.recipe.label);
          axios
            .put(`/api/userrecipe/${userid}/recipe/${recipeid}`, {
              weekday: props.weekorday,
            })
            .then(() => {
              props.handlePut(item);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    },
  });
  return (
    <div ref={drag} style={style}>
      {props.recipe.label}
    </div>
  );
};
export default SavedItem;
