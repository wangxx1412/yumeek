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

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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

export default function ShoppingCart() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Badge color="secondary" badgeContent={"Empty"}>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={handleClickOpen}
          startIcon={<ShoppingCartIcon />}
        >
          Shopping List
        </Button>
      </Badge>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Shopping List</DialogTitle>
        <DialogContent>
          <DialogContentText>Start your yumeek!</DialogContentText>
          <Paper className={classes.chipsroot}>
            <Chip
              label={"label"}
              onDelete={() => console.log("delete")}
              className={classes.chip}
              onClick={() => {
                setOpen(false);
              }}
            />
          </Paper>
        </DialogContent>
      </Dialog>
    </div>
  );
}
