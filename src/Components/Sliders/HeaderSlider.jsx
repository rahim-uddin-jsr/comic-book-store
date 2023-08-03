import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./slider.css";
const HeaderSlider = () => {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    innerHeight: 300,
    outerHeight: 300,
  });
  return (
    <div className="rounded-xl relative h-[500px] overflow-hidden">
      <Slider {...settings}>
        <div className="slide-1  rounded-xl"></div>
        <div className="rounded-xl slide-2"></div>
        <div className="rounded-xl slide-3"></div>
      </Slider>
    </div>
  );
};

export default HeaderSlider;
