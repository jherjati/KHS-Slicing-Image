import Image from "next/image";
import React, { useState } from "react";
import { sliderImage } from "./Data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div id="gallery" className=" ">
      <div className="  ">
        {sliderImage.map((slide, index) => {
          return (
            <div key={index} onClick={nextSlide}>
              {index === current && (
                <div
                  className={`${slide.image} flex flex-col justify-center bg-cover bg-center  h-[37.5rem] space-y-8`}
                >
                  <div className="text-white tracking-wide text-2xl md:text-5xl font-quicksand px-3 md:px-20">
                    {slide.title}
                  </div>
                  <div className="text-slate-100 tracking-wide text-sm md:text-xl font-quicksand px-3 md:px-20">
                    {slide.text}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
