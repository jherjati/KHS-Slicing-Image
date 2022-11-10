import React from "react";
import Image from "next/image";
import Slider from "./Slider";
import { sliderImage } from "./Data";
import DragImage from "./DragImage";
import { logoClient } from "./Data";

const HomePage = () => {
  return (
    <div className="flex flex-col ">
      {/* slider */}
      <div className=" mt-16 ">
        <Slider slides={sliderImage} />
      </div>
      {/* Service */}
      <div className="mt-4 md:mt-16 grid grid-cols-3 gap-4 ">
        <div className="flex flex-col space-y-1 md:space-y-3 col-span-2 mx-3">
          <h1 className="text-slate-900 tracking-wide text-2xl md:text-5xl font-quicksand px-3 md:px-20">
            Our Services
          </h1>
          <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand px-3 md:px-20">
            Blandit 1,900 natoque dui justo, dictum turpis amet, viverra vel
            ornare quis mattis mi ac eget id integer dolor dui aliquam volutpat
            varius pulvinar massa
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <button
            type="button"
            className="text-white text-xs sm:text-sm md:text-xl rounded-lg text-center items-center w-[60%]  h-[30%] sm:h-[40%] bg-sky-700 hover:bg-sky-900"
          >
            Learn More
          </button>
        </div>
      </div>
      {/* Drag Image */}
      <div className="">
        <DragImage />
      </div>

      {/* Dream Reach */}
      <div className="flex flex-col space-y-8 md:grid md:grid-cols-2 px-[3%]">
        <div className="flex justify-center flex-col space-y-1 md:space-y-3 col-span-1 mx-3">
          <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand  ">
            Dream Bigger.
          </h1>
          <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand ">
            Reach Higher.
          </h1>
          <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand ">
            HANDAL SELARAS GROUP is a group of companies with integrated
            business coverage. Engaged in the field of surveying and mapping,
            spatial planning, public policy development, architecture,
            construction management, design, and creative visual design, we
            provide services from upstream to downstream.
          </p>
        </div>
        <div className="flex justify-end items-center">
          <div className="grid grid-rows-2  bg-page3 bg-cover bg-center rounded-[1rem] w-[90%]  h-[90%]">
            <div className="grid grid-cols-2 row-start-2">
              <div className="border-[2rem] bg-white w-[100%]  border-white rounded-[1rem]">
                <Image
                  src="/testimonials.png"
                  className=""
                  alt=""
                  width="300"
                  height="300"
                />
                <h1 className="text-black font-bold tracking-wide text-xs md:text-xl font-quicksand  ">
                  Handal Selaras Group
                </h1>
                <p className="text-slate-500 tracking-wide text-xs md:text-xl font-quicksand  ">
                  Agustus 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Grow continue */}
      <div className=" flex flex-col space-y-8 md:grid md:grid-cols-2 md:justify-items-start content-center px-[3%]">
        <div className="flex justify-start items-center py-8">
          <div className="grid grid-rows-2  bg-page4 bg-cover bg-center rounded-[2rem] w-[90%]  h-[90%]">
            <div className="grid grid-cols-2 row-start-2">
              <div className="border-[2rem] col-start-2 border-white rounded-[2rem]">
                <Image
                  src="/testimonials.png"
                  className=""
                  alt=""
                  width="300"
                  height="300"
                />
                <h1 className="text-black font-bold tracking-wide text-xs md:text-xl font-quicksand  ">
                  Handal Selaras Group
                </h1>
                <p className="text-slate-500 tracking-wide text-xs md:text-xl font-quicksand  ">
                  Agustus 2018
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-first md:order-last flex justify-center flex-col space-y-1 md:space-y-3 col-span-1 mx-3">
          <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand  ">
            Grow & Continue
          </h1>
          <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand ">
            HANDAL SELARAS GROUP determined to continue to grow and continue to
            exist for the success of national development programs both at
            central and regional level by promoting the affordability, quality
            of work output, and complete the work on time in order to provide
            excellent service to clients.
          </p>
        </div>
      </div>
      {/* Imagine, Believe, Achive */}
      <div className="flex flex-col space-y-12 px-[3%] text-black">
        {/* subpage 1 */}
        <div className="flex  md:w-1/2 flex-col space-y-2 md:space-y-6 col-span-1 mx-3">
          <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
            Imagine, Believe, Achive!
          </h1>
          <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
            Engaged in the field of surveying and mapping, spatial planning,
            public policy development, architecture, construction management,
            design, and creative visual design, we provide services from
            upstream to downstream.
          </p>
        </div>
        {/* subpage 2 */}
        <div className="flex flex-col md:grid md:grid-cols-4  gap-8">
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl px-[4%]">
            <div className="text-4xl font-bold text-sky-700 ">1992</div>
            <div className="text-2xl font-semibold text-slate-900">Year</div>
            <div className="text-xl text-slate-600">
              We started our business
            </div>
          </div>
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl px-[4%]">
            <div className="text-4xl font-bold text-sky-700 ">523</div>
            <div className="text-2xl font-semibold text-slate-900">
              Projects
            </div>
            <div className="text-xl text-slate-600">Have been done</div>
          </div>
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl px-[4%]">
            <div className="text-4xl font-bold text-sky-700 ">123</div>
            <div className="text-2xl font-semibold text-slate-900">
              Employees
            </div>
            <div className="text-xl text-slate-600">Working together</div>
          </div>
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl px-[4%]">
            <div className="text-4xl font-bold text-sky-700 ">10</div>
            <div className="text-2xl font-semibold text-slate-900">
              Countries
            </div>
            <div className="text-xl text-slate-600">Connected with us</div>
          </div>
        </div>
        {/* subpage 3 */}
        <div className="grid grid-cols-8 justify-items-center  gap-8">
          {logoClient.map((logo) => {
            return (
              <div
                key={logo}
                className=" grid gap-2 justify-items-center content-center w-[90%] h-[40%] rounded-[1rem]  px-[4%]"
              >
                <img className="object-fill" src="logo-client1.png" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
