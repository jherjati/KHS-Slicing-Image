import React from "react";
import Image from "next/image";
import { tools, aerials, drone } from "./Data";
import Dropdown from "./Dropdown";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

const DroneSpraying = () => {
  const [lin, setlin] = useState("");
  const boxRef = useRef();

  const linkfunc = (e) => {
    setlin(e.target.name);
  };
  return (
    <div className='flex flex-col divide-y space-y-12 relative pb-10 '>
      <Image src='/accent-2.svg' alt='' className='select-none absolute -top-10' />
      <div className=' flex flex-col space-y-8 md:grid md:grid-cols-2  content-center px-[20px] md:px-[120px] pt-16 pb-10 relative'>
        <div className='flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3'>
          <h1 className='text-blue text-[20px] leading-[28px] font-[600] font-inter '>Services</h1>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand '>Drone Spraying</h1>
          <p className='text-grey text-kecilmobile md:text-kecil font-inter '>HANDAL SELARAS GROUP provides spraying services for all types of plants using drone spraying. The advantages of our services are:</p>
          <ul className='flex flex-col space-y-1 list-decimal text-grey text-kecilmobile md:text-kecil font-inter px-[20px] '>
            <li>Rely on certified pilots</li>
            <li>Low cost and competitive according to needs</li>
            <li>Can do spraying 10 Ha/Day Per Drone</li>
            <li>Use of advanced drone equipment (AGRAS T16 and AGRAS T30)</li>
            <li>Maximum height up to 15-20 meters</li>
          </ul>
          <p className='text-grey text-kecilmobile md:text-kecil font-inter '>We offer a variety of services to help you achieve the results you desire. We can explain what service is right for you. Please contact our contact person.</p>
        </div>
        <div className='flex justify-end items-center'>
          <div className='grid grid-rows-2 bg-drone bg-cover bg-center rounded-[1rem] lg:min-h-[420px] w-[90%] h-[80%]'>
            <div className='grid grid-cols-2 row-start-2'>
              <div className='outline outline-[16px] md:outline-[28px] bg-white w-[100%]  outline-white rounded-tr-lg'>
                <Image src='/drone-spraying.png' className='' alt='Drone Spraying' width='300' height='300' />
                <h1 className='text-blacky text-[14px] leading-[17px] md:text-[18px] md:leading-[22px] font-[700] font-inter  '>Drone Spraying Riau</h1>
                <p className='text-grey text-[12px] md:text-[16px] md:leading-[19px] leading-[15px] font-[400] font-inter pb-[10px]'>Drone Spraying</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page2 */}
      <div className='px-[20px] md:px-[120px] flex flex-col pb-10 relative'>
        <Image src='/accent.svg' alt='' className='absolute right-0 top-10' />
        <div className='row-span-1 flex flex-col space-y-8 relative'>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand md:mt-[80px]'>Our Tool</h1>
          <p className='text-grey text-kecilmobile md:text-kecil font-inter w-1/2 text-justify pb-10'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
        <div className='flex justify-center md:justify-between relative'>
          <div className='row-span-2 grid grid-cols-2 gap-x-12 gap-y-4  gap-2 md:gap-8 w-full'>
            {drone.map(({ tool, name, lebar, panjang }) => {
              return (
                <div key={tool} className='grid gap-4 text-center justify-items-center content-center rounded-[1rem] bg-white shadow-lg w-full min-[1299px]:h-[159px]'>
                  <Image width={lebar} height={panjang} layout='responsive' src={tool} alt='' />
                  <p className='pb-2 self-end text-blacky text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] font-[600] font-inter'>{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneSpraying;
