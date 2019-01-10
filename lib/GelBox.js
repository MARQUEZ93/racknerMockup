import React from 'react';

const GelBox = props => {
  const gelColor = {
    backgroundColor: props.color
  };
  return (
    <div style={gelColor} className="gelBox">
      <p>{props.number}</p>
      <p>{props.name}</p>
    </div>
  );
};


export default GelBox;
