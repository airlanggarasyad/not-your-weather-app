import React from 'react';

const TitleComponent= (props) => {
  document.title = props.title;
  return (
    <div></div>
  );
}

export default TitleComponent;