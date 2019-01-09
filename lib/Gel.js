import React from 'react';
import GelBox from './GelBox';

class Gel extends React.Component {
  constructor(props) {
    super(props);
  }

  renderGels() {
    let gelArray = [{name:"Gel Name", number: "L002", color: "pink"}, {name:"Gel Name",
    number: "L003", color: "yellow"},
      {name:"Gel Name", number: "L004", color: "#CC5500"}, {name:"Gel Name", number: "L035", color: "#FFE5B4"},
      {name:"Gel Name", number: "L058", color: "purple"}, {name:"Gel Name", number: "L027", color: "red"}
    ];
    let firstHalf = this.renderHalf(gelArray[0], gelArray[1], gelArray[2]);
    let secondHalf = this.renderHalf(gelArray[3], gelArray[4], gelArray[5]);

    return (<div className="gelHalves">{firstHalf}{secondHalf}</div>);
  }
  renderHalf(one, two, three){
    return (
      <div className="gelHalf">
        <GelBox name={one.name} number={one.number} color={one.color}/>
        <GelBox name={two.name} number={two.number} color={two.color}/>
        <GelBox name={three.name} number={three.number} color={three.color}/>
      </div>
    );
  }
  renderButtons() {
    return (
      <div className="threeButtons">
        {this.button('Color')}
        {this.button('Hue')}
        {this.button('Gel')}
      </div>
    );

  }
  button(text){
    return (
      <div className="button"><p>{text}</p></div>
    );
  }

  render() {
    return (
      <div className="gel">
        {this.renderGels()}
        {this.renderButtons()}
      </div>
    );
  }
}

export default Gel;
