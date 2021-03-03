import React from 'react';
import Tea from './Tea';

const TeasList = (props) => {
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

export default TeasList; 