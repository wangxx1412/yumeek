import React from 'react';
import { Box } from '@material-ui/core';

export default function IngredientsList(props) {
  const { ingredients } = props;

  function format(str) {
    const arr = str.split('\n');
    return arr;
  }

  const allIngredients = format(ingredients);

  return (
    <section>
      <Box borderRadius={16} borderTop={2} borderBottom={2} borderColor="grey.300" width="40%">
      <h2>Ingredients</h2>
        {allIngredients.map((ingredient, index) => <p key={index}>{ingredient}</p>)}
      </Box>
    </section>
  );
}