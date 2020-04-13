import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(5),
  },
  logo: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginLeft: theme.spacing(10),
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  userEmail: {
    height: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function UserInfo(props) {
  const { user, handleSignup, handleLogin } = props;
  const [open, setOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {user ? (
        <>
          <Avatar
            alt="logo"
            src={
              user.img_url ||
              "https://www.edamam.com/web-img/e12/e12b8c5581226d7639168f41d126f2ff.jpg"
            }
            className={classes.logo}
          />
          <Chip label={`Welcome ${user.email}`} className={classes.userEmail} />
        </>
      ) : (
        <Button
          variant="contained"
          size="medium"
          color="primary"
          className={classes.margin}
          onClick={handleClickOpen}
        >
          Sign Up / Log In
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">SIGN UP / LOG IN</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you ready to start your yumeek?
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showSignup && (
            <TextField
              autoFocus
              margin="dense"
              id="confirm-password"
              label="confirm password"
              type="password"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
        </DialogContent>
        <DialogActions>
          {!showSignup && (
            <>
              <Button
                onClick={() => {
                  setShowSignup(true);
                }}
                color="primary"
              >
                Sign up
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={() => {
                  handleLogin({ email, password });
                  handleClose();
                }}
                color="primary"
              >
                Log in
              </Button>
            </>
          )}
          {showSignup && (
            <>
              <Button
                onClick={() => {
                  handleClose();
                  setShowSignup(false);
                }}
                color="primary"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  handleSignup({ email, password, confirmPassword });
                  handleClose();
                }}
                color="primary"
              >
                Sign up
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
