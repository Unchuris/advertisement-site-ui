import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import './style.css';
let settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  pauseOnHover: false,
  adaptiveHeight: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};
class Slick extends Component {
  render(){
    return (
      <Slider {...settings}>
        <div className='slick__images-1'/>
        <div className='slick__images-2'/>
        <div className='slick__images-3'/>
      </Slider>
    );
  }
}
export default Slick;