import Image from "next/image";
import React, { useState } from "react";
import { logoClient } from "./Data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const SlideLogo = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="text-2xl font-bold  p-4 text-slate-500 tracking-wide  font-quicksand px-3 ">
        Clients
      </h1>
      <div className="relative flex justify-center p-4">
        {logoClient.map(({ logo }, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[40%] left-[-30px] text-black cursor-pointer "
                size={30}
              />
              {index === current && (
                <Image src={logo} alt="/" width="1440" height="600" />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[40%] right-[-33px] text-black cursor-pointer "
                size={30}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlideLogo;
