import React from 'react';

const TitleComponent= (props) => {
  // eslint-disable-next-line
  {props.title === 'Wakanda'? document.title = 'Not Your Weather App': document.title = `NYWA | ${props.title}`}
  
  return (
    <div></div>
  );
}

export default TitleComponent;