import clsx from "clsx";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider3 = ({ data, className, arrows = false, indicators = false, smvh = "large" }) => {
  return (
    <div className='slide-container h-full'>
      <Slide
        prevArrow={
          <div className='hidden md:flex md:h-14 md:w-14 rounded-full bg-white px-4  items-center justify-center ml-10'>
            <BiArrowBack className='text-blue-dark text-3xl' />
          </div>
        }
        nextArrow={
          <div className='hidden md:flex md:h-14 md:w-14 rounded-full bg-white px-4  items-center justify-center mr-10'>
            <BiArrowBack className='text-blue-dark text-3xl rotate-180' />
          </div>
        }
        prev
        duration={3000}
        infinite={true}
        pauseOnHover={false}
        autoplay={arrows ? false : true}
        canSwipe={true}
        arrows={arrows}
        slidesToScroll={true}
        cssClass={className}
        indicators={
          indicators && data.length > 1
            ? (e) => (
                <div className='flex items-center justify-center gap-5 px-2 cursor-pointer pb-10 pt-5'>
                  <div
                    className='w-14 h-14 md:h-20 md:w-20 rounded-2xl bg-cover flex items-center'
                    style={{
                      backgroundImage: `linear-gradient(65.81deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 67.52%) , url(${data[e]?.image})`,
                    }}
                  ></div>
                </div>
              )
            : false
        }
      >
        {data.map((slideImage, index) => (
          <div className='each-slide h-full' key={index}>
            <div
              className={clsx("md:h-[600px] bg-cover flex items-center", { "h-[250px]": smvh === "small", "h-[500px]": smvh === "large" })}
              style={{
                backgroundImage: `linear-gradient(65.81deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 67.52%) , url(${slideImage?.image})`,
              }}
            >
              <div className='flex flex-col  font-quicksand  px-[30px] md:px-[120px] '>
                <h1 className='text-white font-quicksand font-bold text-[28px] md:text-[55px]'>{slideImage?.title}</h1>
                <p className='text-[#EEEEEE] font-inter w-[330px] md:w-[540px] text-[14px] md:text-[16px] '>{slideImage?.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slider3;
