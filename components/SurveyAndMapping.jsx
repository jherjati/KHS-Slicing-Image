import React from "react";
import Image from "next/image";
import { tools, aerials } from "./Data";
import Dropdown from "./Dropdown";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const SurveyAndMapping = () => {
  const [lin, setlin] = useState("");
  const boxRef = useRef();

  // X
  // const [x, setX] = useState();

  // // Y
  // const [y, setY] = useState();

  // // This function calculate X and Y
  // const getPosition = () => {
  //   const x = boxRef.current.offsetLeft;
  //   setX(x);

  //   const y = boxRef.current.offsetTop;
  //   setY(y);
  // };
  // // Get the position of the red box in the beginning
  // useEffect(() => {
  //   getPosition();
  // }, []);

  // // Re-calculate X and Y of the red box when the window is resized by the user
  // useEffect(() => {
  //   window.addEventListener("resize", getPosition);
  // }, []);
  const linkfunc = (e) => {
    setlin(e.target.name);
  };
  return (
    <div className="flex flex-col divide-y space-y-12">
      <div className=" flex flex-col space-y-8 md:grid md:grid-cols-2  content-center px-[20px] md:px-[120px] mt-16">
        <div className="flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3">
          <h1 className="text-blue text-[20px] leading-[28px] font-[600] font-inter ">
            Services
          </h1>
          <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand ">
            Survey & Mapping
          </h1>
          <p className="text-grey text-kecilmobile md:text-kecil font-inter ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et
          </p>
          <ul className="flex flex-col space-y-1 list-decimal text-grey text-kecilmobile md:text-kecil font-inter px-[20px] ">
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
              <div className="outline outline-[16px] md:outline-[28px] bg-white w-[100%]  outline-white rounded-tr-lg">
                <Image
                  src="/surveyImage2.png"
                  className=""
                  alt=""
                  width="300"
                  height="300"
                />
                <h1 className="text-blacky text-[14px] leading-[17px] md:text-[18px] md:leading-[22px] font-[700] font-inter  ">
                  Drone Photo & Video
                </h1>
                <p className="text-grey text-[12px] md:text-[16px] md:leading-[19px] leading-[15px] font-[400] font-inter pb-[10px]">
                  Survey & Mapping
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page2 */}
      <div className="px-[20px] md:px-[120px] flex flex-col space-y-16">
        <div className="row-span-1 flex flex-col space-y-8 ">
          <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand md:mt-[80px]">
            Our Tool
          </h1>
          <p className="text-grey text-kecilmobile md:text-kecil font-inter">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et
          </p>
        </div>
        <div className="flex justify-center md:justify-between">
          <div className="row-span-2 grid grid-cols-2 gap-x-12 gap-y-4 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-12 ">
            {tools.map(({ tool, name, lebar, panjang }) => {
              return (
                <div
                  key={tool}
                  className=" grid gap-4 text-center justify-items-center content-center  rounded-[1rem] bg-white shadow-2xl w-[159px] h-[129px]  min-[1299px]:w-[214px] min-[1299px]:h-[159px]"
                >
                  <Image
                    width={lebar}
                    height={panjang}
                    layout="responsive"
                    src={tool}
                    alt=""
                  />
                  <p className="pb-2 self-end text-blacky text-[12px] md:text-[14px]  leading-[15px] md:leading-[17px] font-[600] font-inter">
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* page 3 */}
      <div className="px-[20px] md:px-[120px] ">
        <div className="pt-8">
          <div className="lg:hidden border border-black rounded-lg text-center">
            <Dropdown
              title="Select Section"
              texts={[
                "Field Survey",
                "Aerial Photo",
                "UAV Lidar",
                "GIS",
                "Thermovision Technology",
                "Aerial Video",
                "",
              ]}
            />
          </div>
        </div>

        <div
          className="flex flex-col lg:grid lg:grid-cols-4 lg:divide-x"
          // ref={boxRef}
        >
          <div className="col-span-3 flex flex-col space-y-8 pt-[5%] lg:pr-[3%]">
            <div id="survey" className=" flex flex-col space-y-8 ">
              <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand ">
                Field Survey
              </h1>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                HANDAL SELARAS GROUP offers high quality video supported by a
                safe aircraft system. We are experienced in acquiring videos for
                architectural purposes, landscape planning, construction videos,
                to product promotions. We can make aerial videos that can be
                combined with 3D designs using the Video Tracking method.
              </p>
              <div>
                {" "}
                <iframe
                  width={"100%"}
                  height={400}
                  layout="responsive"
                  src="https://www.youtube.com/embed/rAGoCpqXDw0?mute=1&controls=0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div id="aerial" className=" flex flex-col space-y-8 ">
              <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand">
                Aerial Photo
              </h1>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                HANDAL SELARAS GROUP provides Aerial Photography Services using
                the Unmanned Aerial Vehicle (UAV) vehicle with the
                Photogrammetry method. We provide various sensors according to
                survey needs. The advantages of our services are:
              </p>

              <ul className="list-decimal px-[2%] text-grey text-kecilmobile md:text-kecil font-inter ">
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

              <div className="row-span-2 flex flex-col lg:grid lg:grid-cols-2 gap-2 lg:gap-12 ">
                {aerials.map(({ aerial, name, year }) => {
                  return (
                    <div
                      key={name}
                      className=" flex flex-col  p-[20px] lg:p-[40px] space-x-4  space-y-[24px] rounded-[1rem] bg-white shadow-2xl "
                    >
                      <div className="flex items-center justify-center">
                        <Image
                          layout="responsive"
                          src={aerial}
                          alt={name}
                          width="356"
                          height="192"
                        />
                      </div>

                      <div className="flex flex-col space-y-[10px] h-[48px] text-left sm:text-center justify-center">
                        <p className="text-blacky font-[700] text-[14px] leading-[20px]  md:text-[17px] md:leading-[22px] font-inter">
                          {name}
                        </p>
                        <p className="text-grey text-[14px] leading-[17px] font-inter md:text-[16px] md:leading-[19px]">
                          {year}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div id="lidar" className=" flex flex-col space-y-8 ">
              <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand">
                UAV LiDAR
              </h1>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                HANDAL SELARAS GROUP provides Lidar (Laser) Services using
                Unmanned Aerial Vehicle (UAV) vehicles. We are the pioneers of
                Lidar UAV technology in Indonesia. The advantages of our
                services are:
              </p>
              <Image
                className="rounded-lg"
                src="/uavlidarimage.png"
                alt="UAV Lidar Image"
                width="1100"
                height="400"
                layout="responsive"
              />
              <div>
                <iframe
                  width={"100%"}
                  height={400}
                  layout="responsive"
                  src="https://www.youtube.com/embed/mhQVEgW-suo?mute=1&controls=0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div id="gis" className=" flex flex-col space-y-8 ">
              <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand">
                GIS
              </h1>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                HANDAL SELARAS GROUP not only offers raw data from the results
                of field surveys, aerial photographs, LiDAR, and aerial video,
                but is also able to bring the data and information to a higher
                level in the form of maps in the Geographical Information System
                (GIS). We are ready to help you make high-level analysis using
                the Object Base Image Analysis (OBIA) method, Computer Vision
                Model (CVM) and other analysis methods.
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
            <div id="thermo" className=" flex flex-col space-y-8 ">
              <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand">
                Thermovision Technology
              </h1>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                HANDAL SELARAS GROUP is developing innovative technology in the
                geophysical exploration method, ThermoVision Tomography (TVT).
                TVT offers methods with lower costs and shorter time compared to
                conventional geophysical surveys such as seismic, electrical,
                gravimetrical and well logging.
              </p>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                Data generated by TVT can be effectively compared with data
                obtained by the geophysical method. Some TVT applications are
                exploration of oil and gas accumulation (offshore and onshore),
                mineral exploration, environmental observation, exploration of
                water source accumulation, infrastructure inspection (oil and
                gas pipelines), and others.
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
            <div id="aev" className=" flex flex-col space-y-8 ">
              <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand">
                Aerial Video
              </h1>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                HANDAL SELARAS GROUP offers high quality video supported by a
                safe aircraft system. We are experienced in acquiring videos for
                architectural purposes, landscape planning, construction videos,
                to product promotions. We can make aerial videos that can be
                combined with 3D designs using the Video Tracking method.
              </p>
              <div className="pb-[100px]">
                <iframe
                  width={"100%"}
                  height={400}
                  layout="responsive"
                  src="https://www.youtube.com/embed/hGNXUs0dZqY?mute=1&controls=0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          {/* sisi kiri */}
          <aside className={`hidden lg:flex col-span-1 p-[10%]`}>
            <ul className="flex flex-col space-y-12 ">
              <Link
                href={`#survey`}
                name="survey"
                onClick={linkfunc}
                className={lin == "survey" ? "text-blue" : ""}
              ></Link>
              <Link
                href={`#aerial`}
                name="aerial"
                onClick={linkfunc}
                className={lin == "aerial" ? "text-blue" : ""}
              >
                Aerial Photo
              </Link>
              <Link
                href={`#lidar`}
                name="lidar"
                onClick={linkfunc}
                className={lin == "lidar" ? "text-blue" : ""}
              >
                UAV Lidar
              </Link>
              <Link
                href={`#gis`}
                name="gis"
                onClick={linkfunc}
                className={lin == "gis" ? "text-blue" : ""}
              >
                GIS
              </Link>
              <Link
                href={`#thermo`}
                name="thermo"
                onClick={linkfunc}
                className={lin == "thermo" ? "text-blue" : ""}
              >
                Thermovision Technology
              </Link>
              <Link
                href={`#aev`}
                name="aev"
                onClick={linkfunc}
                className={lin == "aev" ? "text-blue" : ""}
              >
                Aerial Video
              </Link>
            </ul>
          </aside>
        </div>
        {/* sisi kanan */}
      </div>
    </div>
  );
};

export default SurveyAndMapping;
