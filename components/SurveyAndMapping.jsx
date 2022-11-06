import React from "react";

const SurveyAndMapping = () => {
  return (
    <div>
      <div className=" flex flex-col space-y-8 md:grid md:grid-cols-2 content-center px-[5%] mt-16">
        <div className="flex justify-center flex-col space-y-1 md:space-y-3 col-span-1 mx-3">
          <h1 className="text-sky-700 font-bold tracking-wide text-xl md:text-2xl font-quicksand  ">
            Services
          </h1>
          <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand ">
            Survey & Mapping
          </h1>
          <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et
          </p>
          <ul className="list-decimal text-slate-500 tracking-wide text-sm md:text-xl font-quicksand px-[3%]">
            <li>Field Survey</li>
            <li>Aerial Photo</li>
            <li>UAV Lidar</li>
            <li>GIS</li>
            <li>Aerial Video</li>
          </ul>
        </div>
        <div className="flex justify-end items-center">
          <div className="grid grid-rows-2  bg-survey bg-cover bg-center rounded-[2rem] w-[90%]  h-[80%]">
            <div className="grid grid-cols-2 row-start-2">
              <div className="border-[2rem] bg-white  border-white rounded-[2rem]">
                <img src="./surveyImage2.png" className="" alt="" />
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
    </div>
  );
};

export default SurveyAndMapping;
