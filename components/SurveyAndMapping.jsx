import React from "react";
import Image from "next/image";
import { tools, aerials } from "./Data";

const SurveyAndMapping = () => {
  return (
    <div className="flex flex-col divide-y space-y-12">
      <div className=" flex flex-col space-y-8 md:grid md:grid-cols-2 content-center px-[5%] mt-16">
        <div className="flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3">
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
          <ul className="flex flex-col space-y-1 list-decimal text-slate-500 tracking-wide text-sm md:text-xl font-quicksand px-[5%]">
            <li>Field Survey</li>
            <li>Aerial Photo</li>
            <li>UAV Lidar</li>
            <li>GIS</li>
            <li>Aerial Video</li>
          </ul>
        </div>
        <div className="flex justify-end items-center">
          <div className="grid grid-rows-2  bg-survey bg-cover bg-center rounded-[1rem] w-[90%]  h-[80%]">
            <div className="grid grid-cols-2 row-start-2">
              <div className="border-[2rem] bg-white w-[100%]  border-white rounded-[1rem]">
                <Image
                  src="/surveyImage2.png"
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
      {/* page2 */}
      <div className="px-[5%] flex flex-col space-y-16">
        <div className="row-span-1 flex flex-col space-y-8 ">
          <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
            Our Tool
          </h1>
          <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et
          </p>
        </div>
        <div className="flex justify-center md:justify-between">
          <div className="row-span-2 grid grid-cols-2 gap-x-12 gap-y-4  md:grid-cols-5 gap-2 md:gap-12 ">
            {tools.map(({ tool, name }) => {
              return (
                <div
                  key={tool}
                  className=" grid gap-4 text-center justify-items-center content-center  rounded-[1rem] bg-white shadow-2xl px-[4%] content-end"
                >
                  <Image
                    width="80"
                    height="60"
                    layout="responsive"
                    src={tool}
                    alt=""
                  />
                  <p className="pb-2 self-end text-slate-800 font-bold tracking-wide text-sm font-quicksand">
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* page 3 */}
      <div className="px-[5%] md:grid md:grid-cols-4 md:divide-x">
        {/* sisi kanan */}
        <div className="col-span-3 flex flex-col space-y-8 pt-[5%] pr-[3%]">
          <div className=" flex flex-col space-y-8 ">
            <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
              Field Survey
            </h1>
            <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
              HANDAL SELARAS GROUP offers high quality video supported by a safe
              aircraft system. We are experienced in acquiring videos for
              architectural purposes, landscape planning, construction videos,
              to product promotions. We can make aerial videos that can be
              combined with 3D designs using the Video Tracking method.
            </p>
            <Image
              className="rounded-lg"
              src="/videoimage.png"
              alt="Field Survei Image"
              width="1100"
              height="400"
              layout="responsive"
            />
          </div>
          <div className=" flex flex-col space-y-8 ">
            <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
              Aerial Photo
            </h1>
            <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
              HANDAL SELARAS GROUP provides Aerial Photography Services using
              the Unmanned Aerial Vehicle (UAV) vehicle with the Photogrammetry
              method. We provide various sensors according to survey needs. The
              advantages of our services are:
            </p>

            <ul className="list-decimal px-[2%] text-slate-500 tracking-wide text-sm md:text-xl font-quicksand ">
              <li>UAV that can take off and landing in a narrow area</li>
              <li>
                UAVs use Real Time Kinematics (RTK) technology to improve data
                accuracy
              </li>
              <li>
                UAV has a fail-safe system that is safe for use in dangerous
                areas such as oil refineries, and so on
              </li>
              <li>
                Sensor options for RGB Cameras, Multispectral Cameras and
                Thermal Cameras
              </li>
              <li>Make topographic maps up to 1: 5000 (2.5 m contour)</li>
              <li>Low cost and competitive according to need</li>
              <li>
                Fast processing is supported by the latest super computers and
                software
              </li>
            </ul>

            <div className="row-span-2 flex flex-col  space-y-3 md:grid md:grid-cols-2 gap-2 md:gap-12 ">
              {aerials.map(({ aerial, name, year }) => {
                return (
                  <div
                    key={name}
                    className=" grid  gap-4 text-center justify-items-center content-center  rounded-[1rem] bg-white shadow-2xl px-[4%] py-[5%]"
                  >
                    <div className="">
                      <Image
                        layout="responsive"
                        src={aerial}
                        alt={name}
                        width="800"
                        height="400"
                      />
                    </div>

                    <div className="flex flex-col justify-center">
                      <p className="text-slate-800 font-bold tracking-wide text-sm md:text-xl font-quicksand">
                        {name}
                      </p>
                      <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                        {year}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" flex flex-col space-y-8 ">
            <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
              UAV LiDAR
            </h1>
            <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
              HANDAL SELARAS GROUP provides Lidar (Laser) Services using
              Unmanned Aerial Vehicle (UAV) vehicles. We are the pioneers of
              Lidar UAV technology in Indonesia. The advantages of our services
              are:
            </p>
            <Image
              className="rounded-lg"
              src="/uavlidarimage.png"
              alt="UAV Lidar Image"
              width="1100"
              height="400"
              layout="responsive"
            />
            <Image
              className="rounded-lg"
              src="/videoimage.png"
              alt="video Image"
              width="1100"
              height="400"
              layout="responsive"
            />
          </div>
          <div className=" flex flex-col space-y-8 ">
            <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
              GIS
            </h1>
            <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
              HANDAL SELARAS GROUP not only offers raw data from the results of
              field surveys, aerial photographs, LiDAR, and aerial video, but is
              also able to bring the data and information to a higher level in
              the form of maps in the Geographical Information System (GIS). We
              are ready to help you make high-level analysis using the Object
              Base Image Analysis (OBIA) method, Computer Vision Model (CVM) and
              other analysis methods.
            </p>
            <Image
              className="rounded-lg"
              src="/gisimage.png"
              alt="UAV Image"
              width="1100"
              height="400"
              layout="responsive"
            />
          </div>
          <div className=" flex flex-col space-y-8 ">
            <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
              Thermovision Technology
            </h1>
            <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
              HANDAL SELARAS GROUP is developing innovative technology in the
              geophysical exploration method, ThermoVision Tomography (TVT). TVT
              offers methods with lower costs and shorter time compared to
              conventional geophysical surveys such as seismic, electrical,
              gravimetrical and well logging.
            </p>
            <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
              Data generated by TVT can be effectively compared with data
              obtained by the geophysical method. Some TVT applications are
              exploration of oil and gas accumulation (offshore and onshore),
              mineral exploration, environmental observation, exploration of
              water source accumulation, infrastructure inspection (oil and gas
              pipelines), and others.
            </p>

            <Image
              className="rounded-lg"
              src="/thermovisionimage.png"
              alt="UAV Image"
              width="1100"
              height="400"
              layout="responsive"
            />
          </div>
          <div className=" flex flex-col space-y-8 ">
            <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
              Aerial Video
            </h1>
            <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
              HANDAL SELARAS GROUP offers high quality video supported by a safe
              aircraft system. We are experienced in acquiring videos for
              architectural purposes, landscape planning, construction videos,
              to product promotions. We can make aerial videos that can be
              combined with 3D designs using the Video Tracking method.
            </p>
            <Image />
          </div>
        </div>
        {/* sisi kiri */}
        <aside className="hidden md:flex col-span-1 p-[10%] ">
          <ul className="space-y-12 ">
            <li>Field Survey</li>
            <li>Aerial Photo</li>
            <li>UAV Lidar</li>
            <li>Map Making & Analysis</li>
            <li>Thermovision Technology</li>
            <li>Aerial Video</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default SurveyAndMapping;
