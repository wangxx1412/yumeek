import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ingredientsArray from "../../helper/autoCompleteHelperArray";
import Background from "../../assets/image/lemon-background.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "500px",
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxShadow: "none",
  },
  toolBar: {
    display: "flex",
    width: "600px",
    lineHeight: "56px",
    zIndex: "1",
  },
  search: {
    position: "relative",
    borderRadius: "3em",
    marginLeft: 0,
    marginRight: theme.spacing(1),
    // width: "22%",
    flexGrow: "1",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
    },
  },
  searchInput: {
    borderRadius: "24px",
    border: "2px solid",
    backgroundColor: "#fff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.05) inset",
  },
  textField: {
    marginLeft: "15px",
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
  tag: {
    color: "#41333B",
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: "#41333B",
    "&$checked": {
      color: "#41333B",
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
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <IconButton
            onClick={() => {
              handleSearch(searchValue, healthTag);
              setsearchValue("");
            }}
          >
            <SearchIcon />
          </IconButton>
          <div className={classes.search}>
            <Autocomplete
              id="search"
              className={classes.searchInput}
              freeSolo
              color="primary"
              onChange={(e, value) => setsearchValue(value)}
              options={ingredientsArray.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search"
                  className={classes.textField}
                  value={searchValue}
                  InputProps={{ disableUnderline: true }}
                  onChange={(e) => setsearchValue(e.target.value)}
                />
              )}
            />
          </div>
        </Toolbar>
        <FormGroup row>
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={healthTag["vegetarian"]}
                name="vegetarian"
              />
            }
            className={classes.tag}
            onChange={handleChange}
            label="vegetarian"
          />
          <FormControlLabel
            control={
              <GreenCheckbox checked={healthTag["vegan"]} name="vegan" />
            }
            className={classes.tag}
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
            className={classes.tag}
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
            className={classes.tag}
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
            className={classes.tag}
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
            className={classes.tag}
            onChange={handleChange}
            label="sugar-conscious"
          />
        </FormGroup>
      </AppBar>
    </div>
  );
}
