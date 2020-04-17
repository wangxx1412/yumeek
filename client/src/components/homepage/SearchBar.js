import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: theme.spacing(1),
    width: "22%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%",
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function SearchBar(props) {
  const { handleSearch } = props;
  const classes = useStyles();
  const [searchValue, setsearchValue] = useState("");
  const [healthTag, setHealthTag] = useState({
    vegetarian: false,
    vegan: false,
    "alcohol-free": false,
    "tree-nut-free": false,
    "peanut-free": false,
    "sugar-conscious": false,
  });

  const handleChange = (event) => {
    setHealthTag({ ...healthTag, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={() => {
              handleSearch(searchValue, healthTag);
              setsearchValue("");
            }}
          >
            Go!
          </Button>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={searchValue}
              onChange={(e) => setsearchValue(e.target.value)}
            />
          </div>
          <FormGroup row>
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={healthTag["vegetarian"]}
                  name="vegetarian"
                />
              }
              onChange={handleChange}
              label="vegetarian"
            />
            <FormControlLabel
              control={
                <GreenCheckbox checked={healthTag["vegan"]} name="vegan" />
              }
              onChange={handleChange}
              label="vegan"
            />
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={healthTag["alcohol-free"]}
                  name="alcohol-free"
                />
              }
              onChange={handleChange}
              label="alcohol-free"
            />
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={healthTag["peanut-free"]}
                  name="peanut-free"
                />
              }
              onChange={handleChange}
              label="peanut-free"
            />
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={healthTag["tree-nut-free"]}
                  name="tree-nut-free"
                />
              }
              onChange={handleChange}
              label="tree-nut-free"
            />
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={healthTag["sugar-conscious"]}
                  name="sugar-conscious"
                />
              }
              onChange={handleChange}
              label="sugar-conscious"
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}
