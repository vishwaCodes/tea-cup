import React from 'react';
import Tea from './Tea';

const Teas = (props) => {
  let teas = props.teas.map((tea) => {
    return (
      <Tea
        key={tea.id}
        tea={tea} />
    );
  });

  return (
    <ul>
      {teas}
    </ul>
  );
};

export default Teas; 