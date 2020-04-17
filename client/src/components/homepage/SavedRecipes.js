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
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";

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
  const { savedRecipes, deleteRecipe } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  const handleRedirect = (recipe) => {
    history.push("/recipe", { recipe });
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
                    avatar={<Avatar alt={recipe.label} src={recipe.img_url} />}
                    label={recipe.label}
                    onDelete={() => deleteRecipe(recipe)}
                    className={classes.chip}
                    onClick={() => {
                      handleRedirect(recipe);
                      setOpen(false);
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
