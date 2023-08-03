import  { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img1 from "../../assets/images/slider/1.jpg";
import img2 from "../../assets/images/slider/2.jpg";
import img3 from "../../assets/images/slider/3.jpg";
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
    <div className="rounded-xl relative h-screen overflow-hidden">
      <Slider {...settings}>
        <div className=" rounded-xl">
          <img className="w-full  rounded-xl" src={img1} alt="" />
        </div>
        <div className="rounded-xl">
          <img className="w-full rounded-xl" src={img2} alt="" />
        </div>
        <div className="rounded-xl">
          <img className=" rounded-xl w-full" src={img3} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default HeaderSlider;
