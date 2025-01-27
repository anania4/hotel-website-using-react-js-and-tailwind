import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay } from "swiper/modules";

import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "Your Home Away From Home",
    bg: Img1,
    btnText: "Room & Suites",
  },
  {
    title: "Your Home Away From Home",
    bg: Img2,
    btnText: "Room & Suites",
  },
  {
    title: "Your Home Away From Home",
    bg: Img3,
    btnText: "Room & Suites",
  },
];

const HeroSlider = () => {
  return (
    <div className="heroSlider h-[600px] lg:h-[700px]">
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;
        return (
          <div className="h-full " key={index}>
            <div>
              <div className="absolute z-20 top-1/3  left-[200px] text-center text-white">
                <div className="uppercase font-tertiary tracking-[6px] mb-5 ">
                  Enjoy and Relax
                </div>
                <h1
                  className="text-[32px] font-primary uppercase tracking-[2px] 
                max-w-[920px] lg:text-[68px] leading-tight"
                
                >
                  {title}
                </h1>
                <div>
                  <button className="px-4 py-2 bg-white border border-black text-black rounded-lg hover:bg-black hover:border-white hover:text-white">Book Room</button>
                </div>
              </div>
              <div className="absolute top-0 w-full h-full">
                <img
                  className="object-cover h-full w-full"
                  src={slide.bg}
                  alt=""
                />
              </div>
            </div>
            <div className="absolute bg-black/70 inset-0"></div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default HeroSlider;
