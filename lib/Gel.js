import React from 'react';
import GelBox from './GelBox';

class Gel extends React.Component {
  constructor(props) {
    super(props);
  }

  renderGels() {
    let gelArray = [{name:"Gel Name", number: "L002"}, {name:"Gel Name", number: "L003"},
      {name:"Gel Name", number: "L004"}, {name:"Gel Name", number: "L035"},
      {name:"Gel Name", number: "L058"}, {name:"Gel Name", number: "L027"}
    ];
    let firstHalf = this.renderHalf(gelArray[0], gelArray[1], gelArray[2]);
    let secondHalf = this.renderHalf(gelArray[3], gelArray[4], gelArray[5]);

    return (<div>{firstHalf}{secondHalf}</div>);
  }
  renderHalf(one, two, three){
    return (
      <div className="gelHalf">
        <GelBox name={one.name} number={one.number} />
        <GelBox name={two.name} number={two.number} />
        <GelBox name={three.name} number={three.number} />
      </div>
    );
  }

  render() {
    return (
      <div className="gel">
      {this.renderGels()}
      </div>
    );
  }
}

export default Gel;
