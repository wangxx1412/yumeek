import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

const useStyles = makeStyles(theme => ({
  root: {
        // display: "flex",
        // justifyContent: "flex-start",
        // alignItems: "center",
        width: "4 em"
  },
  style: { fontSize: 40 }
})
);

export default function SaveRecipeButton() {
  const classes = useStyles();
  return(
        <Button color="secondary" component="div" className={classes.root}>
          <CalendarTodayOutlinedIcon className={classes.style}/>
            Save to My Calendar
        </Button>
  );
}

