import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(5),
  },
}));

export default function UserInfo() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        className={classes.margin}
      >
        Sign Up / Log In
      </Button>
    </div>
  );
}
