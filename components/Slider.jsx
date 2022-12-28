import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { sliderImage } from "./Data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderImage.length;
  useEffect(() => {
    setTimeout(nextSlide, 3000, []);
  });

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(sliderImage) || sliderImage.length <= 0) {
    return null;
  }
  return (
    <div>
      <div className="w-full h-[504px] md:h-[600px] ">
        {sliderImage.map(({ image, title }, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1]  ease-in duration-[500ms]"
                  : "opacity-0 "
              }
            >
              {index === current && (
                <div className="">
                  <Image
                    className="w-full h-[504px] md:h-[600px] pointer-events-none bg-banner "
                    src={image}
                    alt={title}
                    layout=""
                    width="1200"
                    height="800"
                  />
                  <div className="flex flex-col space-y-1 absolute  bottom-[370px] md:bottom-[300px] font-quicksand  px-[20px] md:px-[120px] ">
                    <h1 className="text-white font-quicksand font-bold text-[28px] md:text-[55px]">
                      {title}
                    </h1>
                    <p className="text-[#EEEEEE] font-inter w-[330px] md:w-[540px] text-[14px] md:text-[16px] ">
                      Kami dapat membantu pekerjaan pengumpulan data lapangan
                      yang dibutuhkan dalam jenis dan bentuk data apapun.
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {/* <Image
          className="w-full h-[400px] md:h-[600px] pointer-events-none"
          src="/sliderimage1.png"
          layout="fill"
          width="1200"
          height="800"
        />
        <div className="flex flex-col space-y-1 absolute  bottom-[370px] md:bottom-[300px] font-quicksand  px-8 md:px-20 ">
          <h1 className="text-white font-bold text-3xl">Survey & Mapping</h1>
          <p className="text-slate-200 text-[14px] md:text-xl">
            Until recently, the prevailing view assumed lorem ipsum was born as
            a nonsense text. “It's not Latin, though it looks like it, and it
            actually says nothing,” Before & After magazine answered a curious
            reader, “Its ‘words’ loosely approximate the frequency with which
            letters occur in English, which is why at a glance it looks pretty
          </p>
        </div>
        <div className="flex justify-between w-full absolute bottom-[300px]   md:bottom-[100px] z-100 px-8 md:px-20">
          <div className="text-white text-[12px] border-b border-b-red-600 font-quicksand">
            Survey & Mapping
          </div>

          <div className="text-white text-[12px] border-b border-b-red-600  font-quicksand">
            Architecture & Construction
          </div>

          <div className="text-white text-[12px] border-b border-b-red-600  font-quicksand">
            Architecture & Construction
          </div>

          <div className="text-white text-[12px] border-b border-b-red-600  font-quicksand">
            Architecture & Construction
          </div>
          <div className="text-white text-[12px] border-b border-b-red-600  font-quicksand">
            Architecture & Construction
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Slider;
