import React from "react";
import Slider from "react-slick";
import "./carousel.css";
const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 3,
  };
  return (
    <div className="justify-content-center p-4 me-auto">
      <Slider {...settings}>
        <div>
          <div className="images-carousel"></div>
        </div>
        <div>
          <div className="images-carousel"></div>
        </div>
        <div>
          <div className="images-carousel"></div>
        </div>
        <div>
          <div className="images-carousel"></div>
        </div>
        <div>
          <div className="images-carousel"></div>
        </div>
        <div>
          <div className="images-carousel"></div>
        </div>
        <div>
          <div className="images-carousel"></div>
        </div>
        <div>
          <div className="images-carousel"></div>
        </div>
        <div>
          <div className="images-carousel"></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
