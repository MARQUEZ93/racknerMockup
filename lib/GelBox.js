import React from 'react';

class GelBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    const gelColor = {
      backgroundColor: this.props.color
    };
    return (
      <div style={gelColor} className="gelBox">
        <p>{this.props.number}</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
};

export default GelBox;
