import React from 'react';

//taken from icons8.com
const arrowSVG = (<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
     className="arrowSVG" width="20px" height="15px" viewBox="0 0 528.919 528.918" style={{backgroundColor: "#282828"}} transform="rotate(90)"
	 >
<g>
	<g>
		<path style={{fill:"white"}} d="M70.846,324.059c3.21,3.926,8.409,3.926,11.619,0l69.162-84.621c3.21-3.926,1.698-7.108-3.372-7.108h-36.723
			c-5.07,0-8.516-4.061-7.427-9.012c18.883-85.995,95.625-150.564,187.207-150.564c105.708,0,191.706,85.999,191.706,191.706
			c0,105.709-85.998,191.707-191.706,191.707c-12.674,0-22.95,10.275-22.95,22.949s10.276,22.949,22.95,22.949
			c131.018,0,237.606-106.588,237.606-237.605c0-131.017-106.589-237.605-237.606-237.605
			c-116.961,0-214.395,84.967-233.961,196.409c-0.878,4.994-5.52,9.067-10.59,9.067H5.057c-5.071,0-6.579,3.182-3.373,7.108
			L70.846,324.059z"/>
	</g>
</g>
</svg>
		);

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"Green": "100", "Red": "100", "Blue": "100", "Color Temp": "3200"};
    this.handleChange = this.handleChange.bind(this);
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
      <div className="threeFanButtons">
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
  handleChange(name) {
    return event => {
      this.setState({[name]: event.target.value});
      console.log(this.state);
    }
  }
  sliderRow(name, units=null, min="0", max="100"){
    return (
      <div className="sliderRow">
        <div className="topSliderRow">
          <div className="arrowName">
            {arrowSVG}
            <p className="arrowNameParagraphOne">{name}</p>
          </div>
          <p className="arrowNameParagraphTwo">{this.state[name]}{units}</p>
        </div>
        <div className="bottomSliderRow">
          <input onChange={this.handleChange(name)} type="range" min={min} max={max} value={this.state[name]} className="slider" id="myRange" />
        </div>
      </div>
    );

  }
  renderRows() {
    let arr = [this.sliderRow("Color Temp", "K", "2700", "4700"), this.sliderRow("Red"),
      this.sliderRow("Green"), this.sliderRow("Blue")];
    return (
      arr
    );
  }

  render() {
    return (
      <div className="sliderComponent">
        {this.renderRows()}
        {this.renderFan()}
      </div>
    );
  }
}

export default Slider;
