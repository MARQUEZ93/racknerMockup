import React from 'react';

//taken from icons8.com
const arrowSVG = (<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="50" height="50" viewBox="0 0 224 224" style={{fillColor:"#000000"}}><g fill="none" fillRule="nonzero"
stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"
fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><path d="M0,224v-224h224v224z" fill="#dddddd"></path>
<g fill="#ffffff"><path d="M31.22875,8.8375c-4.94502,0.07247 -8.89639,4.13741 -8.82875,9.0825v49.28h49.28c3.2313,0.0457 6.23689,-1.652 7.86587,-4.44302c1.62898,-2.79102 1.62898,-6.24294 0,-9.03396c-1.62898,-2.79102 -4.63458,-4.48872 -7.86587,-4.44302h-17.185c15.1364,-13.89584 35.27762,-22.4 57.505,-22.4c47.11672,0 85.12,38.00328 85.12,85.12c0,47.11672 -38.00328,85.12 -85.12,85.12c-47.11672,0 -85.12,-38.00328 -85.12,-85.12c0.0457,-3.2313 -1.652,-6.23689 -4.44302,-7.86587c-2.79102,-1.62898 -6.24294,-1.62898 -9.03396,0c-2.79102,1.62898 -4.48872,4.63458 -4.44302,7.86587c0,56.80136 46.23864,103.04 103.04,103.04c56.80136,0 103.04,-46.23864 103.04,-103.04c0,-56.80136 -46.23864,-103.04 -103.04,-103.04c-27.81428,0 -53.12362,11.06601 -71.68,29.0325v-20.0725c0.03311,-2.42035 -0.91437,-4.75114 -2.6268,-6.46192c-1.71243,-1.71078 -4.04413,-2.65601 -6.46445,-2.62058z">
</path></g></g></svg>);

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    $( document ).ready(function() {
      $( ".fanButton" ).each(function( index ) {
        if (this.children[0].textContent === "Off"){
          $(this).addClass("selectedFanButton");
          return false; //break loop
        }
      });
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
    $(".fanButton").off("click");
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
  sliderRow(name, max, units=null){
    return (
      <div className="sliderRow">
        <div className="topSliderRow">
          {arrowSVG}
          <p>{name}</p>
          <p>{max}</p>
        </div>
        <div className="bottomSliderRow">
          <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
        </div>
      </div>
    );

  }
  renderRows() {
    let arr = [this.sliderRow("Color Temp", 3200, "K"), this.sliderRow("Color Temp", 3200, "K"),
      this.sliderRow("Green", 100), this.sliderRow("Blue", 100)];
    return (
      arr
    );
  }

  render() {
    return (
      <div className="slider">
        {this.renderRows()}
        {this.renderFan()}
      </div>
    );
  }
}

export default Slider;
