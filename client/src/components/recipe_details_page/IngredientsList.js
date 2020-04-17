import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'grey.300',
  margin: "6%",
  p: 2,
  border: 1,
  boxShadow: 1,
  width: 1/2,
};

const defaultPropsBadge = {
  bgcolor: "grey.500",
  color: "white",
  p: 2,
  position: "absolute",
  top: -25,
  left: "5%",
  zIndex: "module",
  boxShadow: 2
};

const useStyles = makeStyles(theme => ({
  box: {
    position: "relative",
    borderRadius: "borderRadius",
    [theme.breakpoints.down("md")]: {
     width: "400px"
   },
   [theme.breakpoints.down("sm")]: {
    width: "100%"
  }
  }
}))

export default function IngredientsList(props) {
  const { ingredients } = props;
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center">
      <Box {...defaultProps}  className={classes.box}>
        <Typography component="h2" variant="body1"  style={{ height: 50, width: '100%' , position: 'relative' }}>
        <Box {...defaultPropsBadge}>
          Ingredients
        </Box>
        </Typography>
        {ingredients.map((ingredient, index) => <p key={index}>{ingredient}</p>)}
      </Box>
    </Box>
  );
}