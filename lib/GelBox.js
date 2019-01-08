import React from 'react';

class GelBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="gelBox">
        <p>{this.props.number}</p>
        <p>{this.props.name}</p>
      </div>
    );
  }
};

export default GelBox;
