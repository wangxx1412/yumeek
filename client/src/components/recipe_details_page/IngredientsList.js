import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const defaultProps = {
  bgcolor: 'background.paper',
  borderColor: 'grey.300',
  m: 1,
  p: 2,
  border: 1,
  boxShadow: 1

};

export default function IngredientsList(props) {
  const { ingredients } = props;
  return (
    <Box display="flex" justifyContent="center">
      <Box borderRadius="borderRadius" {...defaultProps} position="relative">
        <Typography component="h2" variant="body1"  style={{ height: 50, width: '100%' , position: 'relative' }}>
        <Box
          bgcolor="grey.500"
          color="white"
          p={2}
          position="absolute"
          top={-25}
          left="5%"
          zIndex="tooltip"
          boxShadow={2}
        >
          Ingredients
        </Box>
        </Typography>
        {ingredients.map((ingredient, index) => <p key={index}>{ingredient}</p>)}
      </Box>
    </Box>
  );
}