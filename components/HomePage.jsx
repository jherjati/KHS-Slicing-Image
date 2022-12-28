import React from "react";
import Image from "next/image";

import DragImage from "./DragImage";
import { logoClient, clients } from "./Data";

import SlideClients from "./SlideClients";
import Slider2 from "./Slider2";

const HomePage = () => {
  return (
    <div className="flex flex-col ">
      {/* slider */}
      <div className=" mt-16 ">
        <Slider2 />
      </div>

      {/* Service */}
      <div className="mt-4 md:mt-16 grid grid-cols-6 gap-4 ">
        <div className="flex flex-col space-y-1 md:space-y-3 col-span-4  mx-3">
          <h1 className="text-blacky font-[700] tracking-wide text-sedangmobile md:text-sedang font-quicksand px-[20px] md:px-[120px]">
            Our Services
          </h1>
          <p className="text-grey tracking-wide text-kecilmobile md:text-kecil font-quicksand px-[20px] md:px-[120px]">
            Blandit 1,900 natoque dui justo, dictum turpis amet, viverra vel
            ornare quis mattis mi ac eget id integer dolor dui aliquam volutpat
            varius pulvinar massa
          </p>
        </div>
        <div className="col-span-2 flex flex-col justify-center">
          <button
            type="button"
            className="text-white text-xs sm:text-sm md:text-xl rounded-lg text-center items-center w-[90%] md:w-[60%]  h-[30%] sm:h-[40%] bg-blue hover:bg-sky-900"
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
      <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-2 px-[20px] md:px-[120px]">
        <div className="flex justify-center flex-col space-y-1 md:space-y-3 col-span-1 mx-3">
          <h1 className="text-blacky font-[700]  tracking-wide text-sedangmobile md:text-sedang font-quicksand  ">
            Dream Bigger.
          </h1>
          <h1 className="text-blacky font-[700] tracking-wide text-sedangmobile md:text-sedang font-quicksand ">
            Reach Higher.
          </h1>
          <p className="text-grey text-kecilmobile md:text-kecil font-quicksand ">
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
              <div className="border-[0.5rem] md:border-[2rem] bg-white w-[100%]  border-white rounded-[1rem]">
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
                <p className="text-grey tracking-wide text-xs md:text-xl font-quicksand  ">
                  Agustus 2018
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Grow continue */}
      <div className=" flex flex-col space-y-8 lg:grid lg:grid-cols-2 md:justify-items-start content-center px-[20px] md:px-[120px]">
        <div className="flex justify-start items-center py-8">
          <div className="grid grid-rows-2  bg-page4 bg-cover bg-center rounded-[2rem] w-[90%]  h-[90%]">
            <div className="grid grid-cols-2 row-start-2">
              <div className="border-[0.5rem] md:border-[2rem] col-start-2 border-white rounded-[2rem]">
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
                <p className="text-grey tracking-wide text-xs md:text-xl font-quicksand  ">
                  Agustus 2018
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-first lg:order-last flex justify-center flex-col space-y-1 md:space-y-3 col-span-1 mx-3">
          <h1 className="text-blacky font-[700]  tracking-wide text-sedangmobile md:text-sedang font-quicksand  ">
            Grow & Continue
          </h1>
          <p className="text-grey text-kecilmobile md:text-kecil font-quicksand ">
            HANDAL SELARAS GROUP determined to continue to grow and continue to
            exist for the success of national development programs both at
            central and regional level by promoting the affordability, quality
            of work output, and complete the work on time in order to provide
            excellent service to clients.
          </p>
        </div>
      </div>
      {/* Imagine, Believe, Achive */}
      <div className="flex flex-col space-y-12 md:space-y-20 px-[20px] md:px-[120px] text-black">
        {/* subpage 1 */}
        <div className="flex  lg:w-1/2 flex-col space-y-2 md:space-y-6 col-span-1 mx-3">
          <h1 className="text-blacky font-[700]  tracking-wide text-sedangmobile md:text-sedang font-quicksand">
            Imagine, Believe, Achive!
          </h1>
          <p className="text-grey text-kecilmobile md:text-kecil font-quicksand">
            Engaged in the field of surveying and mapping, spatial planning,
            public policy development, architecture, construction management,
            design, and creative visual design, we provide services from
            upstream to downstream.
          </p>
        </div>
        {/* subpage 2 */}
        <div className="flex flex-col lg:grid lg:grid-cols-4  gap-8">
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl p-[4%]">
            <div className="text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue ">
              1992
            </div>
            <div className="text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]">
              Year
            </div>
            <div className="text-xl text-slate-600">
              We started our business
            </div>
          </div>
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl p-[4%]">
            <div className="text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue ">
              523
            </div>
            <div className="text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]">
              Projects
            </div>
            <div className="text-xl text-slate-600">Have been done</div>
          </div>
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl p-[4%]">
            <div className="text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue ">
              123
            </div>
            <div className="text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]">
              Employees
            </div>
            <div className="text-xl text-slate-600">Working together</div>
          </div>
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl p-[4%]">
            <div className="text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue ">
              10
            </div>
            <div className="text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]">
              Countries
            </div>
            <div className="text-xl text-slate-600">Connected with us</div>
          </div>
        </div>
        {/* subpage 3 */}
        <div className="py-[60px]">
          <SlideClients slides={logoClient} clients={clients} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
