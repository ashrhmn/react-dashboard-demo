import React, { useState, useEffect } from "react";

// import { ethereum1, ethereum2, ethereum3 } from "../assets";

import ethereum1Img from '../assets/ethereum1.jpg'
import ethereum2Img from '../assets/ethereum2.jpg'
import ethereum3Img from '../assets/ethereum3.jpg'

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const images = [
      ethereum1Img,
      ethereum2Img,
      ethereum3Img,
  ];
  const handleIndicatorClick = (index) => {
    // clearInterval(intervalId);
    setImgIndex(index);
    // setIntervalId(setInterval(nextImage, 1000));
  };

  const nextImage = () => {
    setImgIndex(imgIndex == images.length - 1 ? 0 : imgIndex + 1);
  };

  const prevImage = () => {
    setImgIndex(imgIndex == 0 ? images.length - 1 : imgIndex - 1);
  };

  const getImgClass = (index) => {
    if (index == imgIndex) return "current";
    if (index >= imgIndex) return "next";
    if (index <= imgIndex) return "prev";
  };

  //   useEffect(() => {
  //     setIntervalId(setInterval(nextImage, 1000));
  //   }, []);

  return (
    <div>
      <div className="slider-main">
        <div className="slider-img-container">
          {images.map((image, index) => (
            <img
              className={`slider-img ${getImgClass(index)}`}
              key={image}
              src={image}
            />
          ))}
        </div>
      </div>
      <div className="indicator">
        {images.map((image, index) => (
          <div
            onClick={() => handleIndicatorClick(index)}
            className={`${
              imgIndex == index
                ? "imgIndicator-active"
                : "imgIndicator-inactive"
            }`}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
