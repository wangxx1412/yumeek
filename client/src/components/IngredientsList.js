import React from 'react';

export default function IngredientsList(props) {
  const { ingredients } = props;

  function format(str) {
    const arr = str.split('\n');
    return arr;
  }

  const allIngredients = format(ingredients);

  return (
    <section>
      <h2>IngredientsList</h2>
      {allIngredients.map((ingredient, index) => <ul key={index}>{ingredient}</ul>)}
    </section>
  );
}