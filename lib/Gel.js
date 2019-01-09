import React from 'react';
import GelBox from './GelBox';

class Gel extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    $( document ).ready(function() {
      $( ".topButton" ).each(function( index ) {
        if (this.children[0].textContent === "Hue"){
          $(this).addClass("selectedTopButton");
          return false; //break loop
        }
      });
      $( ".fanButton" ).each(function( index ) {
        if (this.children[0].textContent === "Off"){
          $(this).addClass("selectedFanButton");
          return false; //break loop
        }
      });
    });
    $(".topButton").click(function(){
      if (!$(this).hasClass('selectedTopButton')){
        $( ".topButton" ).each(function( index ) {
          if ($(this).hasClass("selectedTopButton")){
            $(this).removeClass('selectedTopButton');
            return false; //break loop
          }
        });
        $(this).addClass('selectedTopButton');
      }
    });
    $(".fanButton").click(function(){
      if (!$(this).hasClass('selectedFanButton')){
        $( ".fanButton" ).each(function( index ) {
          if ($(this).hasClass("selectedFanButton")){
            $(this).removeClass('selectedFanButton');
            return false; //break loop
          }
        });
        $(this).addClass('selectedFanButton');
      }
    });
  }
  componentWillUnmount(){
    //turn off subscription(s)
    $(".button").off("click");
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
  renderButtons(type1, type2, type3, className) {
    return (
      <div className="threeButtons">
        {this.button(type1, className)}
        {this.button(type2, className)}
        {this.button(type3, className)}
      </div>
    );

  }
  button(text, className){
    return (
      <div className={className}>
      <p>{text}</p>
      </div>
    );
  }
  renderFan() {
    return (
      <div className="fanDiv">
        <p className="fanHeader">Fan</p>
        {this.renderButtons('Off', 'Auto', 'Full', "fanButton", "Fan")}
      </div>
    );
  }

  render() {
    return (
      <div className="gel">
        {this.renderGels()}
        {this.renderButtons('Color', 'Hue', 'Gel', "topButton")}
        {this.renderFan()}
      </div>
    );
  }
}

export default Gel;
