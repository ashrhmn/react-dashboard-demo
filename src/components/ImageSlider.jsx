import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.scss";

import ethereum1Img from "../assets/ethereum1.jpg";
import ethereum2Img from "../assets/ethereum2.jpg";
import ethereum3Img from "../assets/ethereum3.jpg";

const ImageSlider = () => {
  const images = [ethereum1Img, ethereum2Img, ethereum3Img];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider className="slider" {...settings}>
      {images.map((image, index) => (
        <img className="slider-image" key={image} src={image} />
      ))}
    </Slider>
  );
};
export default ImageSlider;
