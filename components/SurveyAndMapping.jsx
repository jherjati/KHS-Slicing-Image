import React, { Fragment } from "react";
import Image from "next/image";
import { tools, aerials } from "./Data";
// import Dropdown from "./Dropdown";
import { useState, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import accentRedBlue from "../public/accents/ac-red-blue.svg";
import accentRedBlueHalf from "../public/accents/ac-red-blue-half.svg";
import accentGreen from "../public/accents/ac-home-green.svg";
import { Listbox, Transition } from "@headlessui/react";
import { BiCheck, BiChevronDown } from "react-icons/bi";

function DropDown({ selected, onChange, options }) {
  return (
    <div className='relative w-full'>
      <Listbox value={selected} onChange={(e) => onChange({ target: { name: e } })}>
        <Listbox.Button className='py-[10px] px-[14px] font-inter text-sm font-normal w-full text-left'>
          {({ open }) => (
            <>
              <span className='block truncate'>{options.find((x) => x.id === selected).value}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <BiChevronDown className={clsx("h-5 w-5 text-gray-400 transition-transform ease-in-out", { "rotate-180": open })} aria-hidden='true' />
              </span>
            </>
          )}
        </Listbox.Button>
        <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
          <Listbox.Options className='absolute mt-1  w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 sm:text-sm'>
            {options.map((item, i) => (
              <Listbox.Option key={i} className={({ active }) => `relative cursor-default select-none py-[10px] px-2 rounded m-[6px]  ${active ? "bg-[#E6F4FC] " : "text-gray-900"}`} value={item.id}>
                {({ selected }) => (
                  <Link href={"#" + item.id}>
                    <p className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>{item.value}</p>
                    {selected ? (
                      <p className='absolute inset-y-0 right-[8px] flex items-center pl-3 text-amber-600'>
                        <BiCheck className='text-xl text-[#0093DE]' />
                      </p>
                    ) : null}
                  </Link>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}

const SurveyAndMapping = () => {
  const [lin, setlin] = useState("survey");
  const boxRef = useRef();

  const SECTION_OPTIONS = [
    { id: "survey", value: "Field Survey" },
    { id: "aerial", value: "Aerial Photo" },
    { id: "lidar", value: "UAV Lidar" },
    { id: "gis", value: "GIS" },
    { id: "thermo", value: "Thermovision Technology" },
    { id: "aev", value: "Aerial Video" },
  ];
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
  console.log(lin);

  return (
    <div className='flex flex-col  pt-[70px] relative'>
      <div className=' flex flex-col md:space-y-0 md:grid md:grid-cols-2 content-center px-[20px] md:px-[120px] relative border-b md:py-[90px] py-10 m-0 '>
        <div className='flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3'>
          <h1 className='text-blue text-[20px] leading-[28px] font-[600] font-inter '>Services</h1>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand '>Survey & Mapping</h1>
          <p className='text-grey text-kecilmobile md:text-kecil font-inter '>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
          </p>
          <ul className='flex flex-col space-y-1 list-decimal text-grey text-kecilmobile md:text-kecil font-inter px-[20px] '>
            <li>Field Survey</li>
            <li>Aerial Photo</li>
            <li>UAV Lidar</li>
            <li>GIS</li>
            <li>Aerial Video</li>
          </ul>
        </div>
        <div className='flex justify-end items-center'>
          <div className='grid grid-rows-2  bg-survey bg-cover bg-center rounded-[1rem] w-[90%]  h-[80%]'>
            <div className='grid grid-cols-2 row-start-2'>
              <div className='outline outline-[16px] md:outline-[28px] bg-white w-[100%]  outline-white rounded-tr-lg'>
                <Image src='/surveyImage2.png' className='' alt='Image' width='300' height='300' />
                <h1 className='text-blacky text-[14px] leading-[17px] md:text-[18px] md:leading-[22px] font-[700] font-inter  '>Drone Photo & Video</h1>
                <p className='text-grey text-[12px] md:text-[16px] md:leading-[19px] leading-[15px] font-[400] font-inter pb-[10px]'>Survey & Mapping</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page2 */}
      <div className='px-[20px] md:px-[120px] flex flex-col space-y-16 relative mt-0 md:py-[90px] py-10 border-b'>
        <div className='flex flex-col space-y-8  md:w-1/2 text-justify relative'>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand'>Our Tool</h1>
          <p className='text-grey text-kecilmobile md:text-kecil font-inter'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
        <Image src={accentRedBlue} alt='Image' className='hidden md:block absolute right-0 top-0 m-0' />
        <Image src={accentRedBlueHalf} alt='Image' className='md:hidden absolute right-0 top-[15%] m-0' />
        <div className='flex justify-center md:justify-between relative'>
          <div className='row-span-2 grid grid-cols-2 gap-x-12 gap-y-4 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 w-full'>
            {tools.map(({ tool, name, lebar, panjang }) => {
              return (
                <div key={tool} className='grid gap-4 text-center justify-items-center content-center rounded-[1rem] bg-white shadow-lg w-full min-[1299px]:h-[159px]'>
                  <Image width={lebar} height={panjang} layout='responsive' src={tool} alt='Image' />
                  <p className='pb-2 self-end text-blacky text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] font-[600] font-inter'>{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* page 3 */}
      <div className='px-[20px] md:px-[120px]'>
        <div className='lg:hidden border rounded-lg my-10'>
          <DropDown onChange={linkfunc} selected={lin} options={SECTION_OPTIONS} />
        </div>
        <div
          className='flex flex-col lg:grid lg:grid-cols-4 lg:divide-x relative'
          // ref={boxRef}
        >
          <div className='col-span-3 flex flex-col space-y-8 md:pt-16 lg:pr-[3%]'>
            <div id='survey' className=' flex flex-col space-y-8' ons>
              <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand '>Field Survey</h1>
              <p className='text-justify text-grey text-kecilmobile md:text-kecil font-inter'>
                HANDAL SELARAS GROUP offers high quality video supported by a safe aircraft system. We are experienced in acquiring videos for architectural purposes, landscape planning, construction videos, to product promotions. We can
                make aerial videos that can be combined with 3D designs using the Video Tracking method.
              </p>
              <div>
                {" "}
                <iframe
                  width={"100%"}
                  layout='responsive'
                  src='https://www.youtube.com/embed/rAGoCpqXDw0?mute=1&controls=0'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                  className='rounded-xl md:h-[400px] h-[175px]'
                ></iframe>
              </div>
            </div>
            <div id='aerial' className=' flex flex-col space-y-8 '>
              <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand'>Aerial Photo</h1>
              <p className='text-justify text-grey text-kecilmobile md:text-kecil font-inter'>
                HANDAL SELARAS GROUP provides Aerial Photography Services using the Unmanned Aerial Vehicle (UAV) vehicle with the Photogrammetry method. We provide various sensors according to survey needs. The advantages of our services
                are:
              </p>

              <ul className='list-decimal px-[2%] text-grey text-kecilmobile md:text-kecil font-inter pl-5 text-justify'>
                <li>UAV that can take off and landing in a narrow area</li>
                <li>UAVs use Real Time Kinematics (RTK) technology to improve data accuracy</li>
                <li>UAV has a fail-safe system that is safe for use in dangerous areas such as oil refineries, and so on</li>
                <li>Sensor options for RGB Cameras, Multispectral Cameras and Thermal Cameras</li>
                <li>Make topographic maps up to 1: 5000 (2.5 m contour)</li>
                <li>Low cost and competitive according to need</li>
                <li>Fast processing is supported by the latest super computers and software</li>
              </ul>

              {/* <CheckIcon className='h-5 w-5' aria-hidden='true' /> */}
              <div className='row-span-2 flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-12 '>
                {aerials.map(({ aerial, name, year }) => {
                  return (
                    <div key={name} className=' flex flex-col  p-[20px] lg:p-[40px] space-x-4 space-y-[24px] rounded-[1rem] bg-white shadow-lg '>
                      <div className='flex items-center justify-center'>
                        <Image layout='responsive' src={aerial} alt={name} width='356' height='192' />
                      </div>

                      <div className='flex flex-col space-y-[10px] h-[48px] text-left sm:text-center justify-center'>
                        <p className='text-blacky font-[700] text-[14px] leading-[20px]  md:text-[17px] md:leading-[22px] font-inter'>{name}</p>
                        <p className='text-grey text-[14px] leading-[17px] font-inter md:text-[16px] md:leading-[19px]'>{year}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div id='lidar' className=' flex flex-col space-y-8 '>
              <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand'>UAV LiDAR</h1>
              <p className='text-justify text-grey text-kecilmobile md:text-kecil font-inter'>
                HANDAL SELARAS GROUP provides Lidar (Laser) Services using Unmanned Aerial Vehicle (UAV) vehicles. We are the pioneers of Lidar UAV technology in Indonesia. The advantages of our services are:
              </p>
              <ul className='list-decimal px-[2%] text-grey text-kecilmobile md:text-kecil font-inter pl-5 text-justify '>
                <li>UAV that can take off and landing in a narrow area</li>
                <li>UAVs use Real Time Kinematics (RTK) technology to improve data accuracy</li>
                <li>UAV has a fail-safe system that is safe for use in dangerous areas such as oil refineries, and so on</li>
                <li>Sensor options for RGB Cameras, Multispectral Cameras and Thermal Cameras</li>
                <li>Make topographic maps up to 1: 5000 (2.5 m contour)</li>
                <li>Low cost and competitive according to need</li>
                <li>Fast processing is supported by the latest super computers and software</li>
              </ul>
              <Image className='rounded-lg' src='/uavlidarimage.png' alt='UAV Lidar Image' width='1100' height='400' layout='responsive' />
              <Image className='rounded-lg' src='/uav2.png' alt='UAV Lidar Image' width='1100' height='400' layout='responsive' />
              <div>
                <iframe
                  width={"100%"}
                  layout='responsive'
                  src='https://www.youtube.com/embed/mhQVEgW-suo?mute=1&controls=0'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                  className='rounded-xl md:h-[400px] h-[175px]'
                ></iframe>
              </div>
            </div>
            <div id='gis' className=' flex flex-col space-y-8 '>
              <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand'>GIS</h1>
              <p className='text-justify text-grey text-kecilmobile md:text-kecil font-inter'>
                HANDAL SELARAS GROUP not only offers raw data from the results of field surveys, aerial photographs, LiDAR, and aerial video, but is also able to bring the data and information to a higher level in the form of maps in the
                Geographical Information System (GIS). We are ready to help you make high-level analysis using the Object Base Image Analysis (OBIA) method, Computer Vision Model (CVM) and other analysis methods.
              </p>
              <Image className='rounded-lg' src='/gisimage.png' alt='UAV Image' width='1100' height='400' layout='responsive' />
            </div>
            <div id='thermo' className=' flex flex-col space-y-8 '>
              <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand'>Thermovision Technology</h1>
              <p className='text-justify text-grey text-kecilmobile md:text-kecil font-inter'>
                HANDAL SELARAS GROUP is developing innovative technology in the geophysical exploration method, ThermoVision Tomography (TVT). TVT offers methods with lower costs and shorter time compared to conventional geophysical surveys
                such as seismic, electrical, gravimetrical and well logging.
              </p>
              <p className='text-grey text-kecilmobile md:text-kecil font-inter text-justify'>
                Data generated by TVT can be effectively compared with data obtained by the geophysical method. Some TVT applications are exploration of oil and gas accumulation (offshore and onshore), mineral exploration, environmental
                observation, exploration of water source accumulation, infrastructure inspection (oil and gas pipelines), and others.
              </p>

              <Image className='rounded-lg' src='/thermovisionimage.png' alt='UAV Image' width='1100' height='400' layout='responsive' />
            </div>
            <div id='aev' className=' flex flex-col space-y-8 '>
              <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand'>Aerial Video</h1>
              <p className='text-justify text-grey text-kecilmobile md:text-kecil font-inter'>
                HANDAL SELARAS GROUP offers high quality video supported by a safe aircraft system. We are experienced in acquiring videos for architectural purposes, landscape planning, construction videos, to product promotions. We can
                make aerial videos that can be combined with 3D designs using the Video Tracking method.
              </p>
              <div className='md:pb-[90px] pb-[60px]'>
                <iframe
                  width={"100%"}
                  className='rounded-xl md:h-[400px] h-[175px]'
                  layout='responsive'
                  src='https://www.youtube.com/embed/hGNXUs0dZqY?mute=1&controls=0'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          {/* sisi kiri */}
          <aside className={`hidden lg:flex col-span-1 p-[10%] pt-16 w-full`}>
            <ul className='flex flex-col space-y-5 font-quicksand w-full'>
              <Link href={`#survey`} name='survey' onClick={linkfunc} className={lin == "survey" ? "text-blue font-bold flex items-center gap-2 " : "group flex hover:text-blue-dark hover:font-bold items-center gap-2"}>
                <div className={clsx("h-1 rounded w-4 bg-blue-dark group-hover:block", { block: lin == "survey", hidden: lin != "survey" })} /> Field Survey
              </Link>
              <Link href={`#aerial`} name='aerial' onClick={linkfunc} className={lin == "aerial" ? "text-blue font-bold flex items-center gap-2" : "group flex hover:text-blue-dark hover:font-bold items-center gap-2"}>
                <div className={clsx("h-1 rounded w-4 bg-blue-dark group-hover:block", { block: lin == "aerial", hidden: lin != "aerial" })} />
                Aerial Photo
              </Link>
              <Link href={`#lidar`} name='lidar' onClick={linkfunc} className={lin == "lidar" ? "text-blue font-bold flex items-center gap-2" : "group flex hover:text-blue-dark hover:font-bold items-center gap-2"}>
                <div className={clsx("h-1 rounded w-4 bg-blue-dark group-hover:block", { block: lin == "lidar", hidden: lin != "lidar" })} />
                UAV Lidar
              </Link>
              <Link href={`#gis`} name='gis' onClick={linkfunc} className={lin == "gis" ? "text-blue font-bold flex items-center gap-2" : "group flex hover:text-blue-dark hover:font-bold items-center gap-2"}>
                <div className={clsx("h-1 rounded w-4 bg-blue-dark group-hover:block", { block: lin == "gis", hidden: lin != "gis" })} />
                GIS
              </Link>
              <Link href={`#thermo`} name='thermo' onClick={linkfunc} className={lin == "thermo" ? "text-blue font-bold flex items-center gap-2" : "group flex hover:text-blue-dark hover:font-bold items-center gap-2"}>
                <div className={clsx("h-1 rounded w-4 bg-blue-dark group-hover:block", { block: lin == "thermo", hidden: lin != "thermo" })} />
                Thermovision Technology
              </Link>
              <Link href={`#aev`} name='aev' onClick={linkfunc} className={lin == "aev" ? "text-blue font-bold flex items-center gap-2" : "group flex hover:text-blue-dark hover:font-bold items-center gap-2"}>
                <div className={clsx("h-1 rounded w-4 bg-blue-dark group-hover:block", { block: lin == "aev", hidden: lin != "aev" })} />
                Aerial Video
              </Link>
            </ul>
          </aside>
        </div>
        {/* sisi kanan */}
      </div>
      <Image src={accentGreen} alt='Image' className='select-none absolute -top-[120px] -left-[50px] md:-top-20 md:left-0' />
    </div>
  );
};

export default SurveyAndMapping;
