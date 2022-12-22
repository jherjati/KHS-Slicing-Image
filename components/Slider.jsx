import Image from "next/image";
import Link from "next/link";
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
    <div>
      <div className="w-full h-[400px] md:h-[600px]">
        <Image
          className="w-full h-[400px] md:h-[600px] pointer-events-none"
          src="/sliderimage1.png"
          layout="fill"
          width="1200"
          height="800"
        />
        <div className="flex flex-col space-y-1 absolute  bottom-[370px] md:bottom-[300px] font-quicksand  px-8 md:px-20 ">
          <h1 className="text-white font-bold text-3xl">Survey & Mapping</h1>
          <p className="text-slate-200  text-xl">test</p>
        </div>
        <div className="flex justify-between absolute bottom-[300px]  space-x-20 md:bottom-[100px] z-100 px-8 md:px-20">
          <div>
            <hr className=" h-[2px] bg-white border-0  dark:bg-gray-700" />
            <div className="text-white text-xl font-quicksand">
              Survey & Mapping
            </div>
          </div>
          <div>
            <hr className=" h-[2px] bg-white border-0  dark:bg-gray-700" />
            <div className="text-white text-xl font-quicksand">
              Architecture & Construction
            </div>
          </div>
          <div>
            <hr className=" h-[2px] bg-white border-0  dark:bg-gray-700" />
            <div className="text-white text-xl font-quicksand">
              Real Estate Development
            </div>
          </div>
          <div>
            <hr className=" h-[2px] bg-white border-0  dark:bg-gray-700" />
            <div className="text-white text-xl font-quicksand">
              Urban Planning
            </div>
          </div>
          <div>
            <hr className=" h-[2px] bg-white border-0  dark:bg-gray-700" />
            <div className="text-white text-xl font-quicksand">
              Visual Creative
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
