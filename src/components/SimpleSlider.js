import React, { Component } from 'react'
import Slider from '../slick/slider'

class SimpleSlider extends Component {
  render() {
    const settings = {
    	autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slick_Wrapper">
      	<div className="slick_Container">
	        <Slider {...settings}>
	          <div><div className="imgs img1">1</div></div>
	          <div><div className="imgs img2">2</div></div>
	          <div><div className="imgs img3">3</div></div>
	        </Slider>
	       </div>
      </div>
    );
  }
}

export default SimpleSlider;