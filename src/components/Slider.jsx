import React, { useState, useEffect } from "react";

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const images = [
    "src/assets/ethereum1.jpg",
    "src/assets/ethereum2.jpg",
    "src/assets/ethereum3.jpg",
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
