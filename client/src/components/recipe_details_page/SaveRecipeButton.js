import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

const useStyles = makeStyles(theme => ({
  root: {
        width: "4 em"
  },
  style: { fontSize: 40 }
})
);

export default function SaveRecipeButton(props) {
  const {recipe, handleAdd } = props;
  const classes = useStyles();
  return(
        <Button color="secondary" component="div" className={classes.root} onClick={() => handleAdd(recipe)}> 
          <CalendarTodayOutlinedIcon className={classes.style}/>
            Save to My List
        </Button>
  );
}

