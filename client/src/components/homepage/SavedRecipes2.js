import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(5),
  },
  chipsroot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "nowrap",
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function SavedRecipes(props) {
  const { savedRecipes, clickRecipe } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.margin}>
      <Badge color="secondary" badgeContent={savedRecipes.length || "Empty"}>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={handleClickOpen}
        >
          Saved Recipes
        </Button>
      </Badge>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Saved Recipes</DialogTitle>
        <DialogContent>
          <DialogContentText>Add recipes to your yumeek!</DialogContentText>
          <Paper className={classes.chipsroot}>
            {savedRecipes &&
              savedRecipes.map((recipe, index) => {
                return (
                  <Chip
                    key={index}
                    label={recipe.recipe.label}
                    onDelete={() => console.log("delete")}
                    className={classes.chip}
                    onClick={() => {
                      clickRecipe(recipe);
                    }}
                  />
                );
              })}
          </Paper>
        </DialogContent>
      </Dialog>
    </div>
  );
}
