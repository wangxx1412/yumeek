import React from 'react';

export default function Steps(props) {
  const { steps } = props;

  function format(str) {
    const arr = str.split('\n');
    return arr;
  }
  const allSteps = format(steps);

  return (
    <section>
      <h2>Directions</h2>
      <ul>
      {allSteps.map((step, index) => <li key={index}><p className="step-number">{`Step ${index+1}`}</p> <p>{step}</p></li>)}
      </ul>
    </section>
  );
}