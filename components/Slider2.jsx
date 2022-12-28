import React, { useState, useEffect } from "react";
import { sliderImage } from "./Data";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const SliderImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = React.useRef(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderImage.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliderImage.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[600px] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${sliderImage[currentIndex].image})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliderImage.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          ></div>
        ))}
        <div className="flex flex-col space-y-1 absolute  bottom-[370px] md:bottom-[300px] font-quicksand  px-[20px] md:px-[120px] ">
          <h1 className="text-white font-quicksand font-bold text-[28px] md:text-[55px]">
            test
          </h1>
          <p className="text-[#EEEEEE] font-inter w-[330px] md:w-[540px] text-[14px] md:text-[16px] ">
            Kami dapat membantu pekerjaan pengumpulan data lapangan yang
            dibutuhkan dalam jenis dan bentuk data apapun.
          </p>
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        <div
          className={`${
            currentIndex == 0 ? "bg-blue" : "bg-[#EEEEEE]"
          } rounded-full w-3 h-3`}
        ></div>
        <div
          className={`${
            currentIndex == 1 ? "bg-blue" : "bg-[#EEEEEE]"
          } rounded-full w-3 h-3`}
        ></div>{" "}
        <div
          className={`${
            currentIndex == 2 ? "bg-blue" : "bg-[#EEEEEE]"
          } rounded-full w-3 h-3`}
        ></div>{" "}
        <div
          className={`${
            currentIndex == 3 ? "bg-blue" : "bg-[#EEEEEE]"
          } rounded-full w-3 h-3`}
        ></div>
        <div
          className={`${
            currentIndex == 4 ? "bg-blue" : "bg-[#EEEEEE]"
          } rounded-full w-3 h-3`}
        ></div>
      </div>
    </div>
  );
};

export default SliderImage;
