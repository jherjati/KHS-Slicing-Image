import clsx from "clsx";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slider2 = ({
  data,
  className,
  arrows = false,
  indicators = false,
  autoplay = false,
  inType = "home",
  smvh = "large",
  arrowClass,
}) => {
  return (
    <div
      className={clsx("slide-container h-full relative", {
        "home-slide-container": inType === "home",
      })}
    >
      <Slide
        prevArrow={
          <div
            className={clsx(
              "hidden md:flex md:h-14 md:w-14 rounded-full bg-white px-4  items-center justify-center ml-10",
              arrowClass
            )}
          >
            <BiArrowBack className='text-blue-dark text-3xl' />
          </div>
        }
        nextArrow={
          <div
            className={clsx(
              "hidden md:flex md:h-14 md:w-14 rounded-full bg-white px-4  items-center justify-center mr-10",
              arrowClass
            )}
          >
            <BiArrowBack className='text-blue-dark text-3xl rotate-180' />
          </div>
        }
        prev
        duration={3000}
        infinite={true}
        pauseOnHover={false}
        autoplay={autoplay}
        canSwipe={true}
        arrows={arrows}
        slidesToScroll={true}
        cssClass={clsx(className)}
        indicators={
          indicators
            ? inType === "home"
              ? (e) => (
                  <div
                    className={clsx(
                      "indicator hidden lg:flex flex-col gap-2 text-xs text-white md:mr-5 mr-0 last:mr-0 grow hover:cursor-pointer"
                    )}
                  >
                    <div className='w-full  bg-white/20 '>
                      <div className='h-[2px] w-2/3  '></div>
                    </div>
                    <p>{data[e]?.title?.toUpperCase()}</p>
                  </div>
                )
              : (e) => (
                  <div className='flex items-center justify-center gap-5 px-2 cursor-pointer pb-10 pt-5 hover:cursor-pointer'>
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
        {data.map(({ image, title, text }, index) => (
          <div className='each-slide h-full' key={index}>
            <div
              className={clsx("md:h-[600px] bg-cover flex items-center", {
                "h-[250px]": smvh === "small",
                "h-[500px]": smvh === "large",
              })}
              style={{
                backgroundImage: `linear-gradient(65.81deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 67.52%) , url(${image})`,
              }}
            >
              {inType === "home" && (
                <div className='flex flex-col  font-quicksand  px-[30px] md:px-[120px] '>
                  <h1 className='text-white font-quicksand font-bold text-[28px] md:text-[55px]'>
                    {title}
                  </h1>
                  <div
                    className='text-[#EEEEEE] font-inter w-[330px] md:w-[540px] text-[14px] md:text-[16px] '
                    dangerouslySetInnerHTML={{ __html: text }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default Slider2;
