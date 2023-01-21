import React, { use } from "react";
import Image from "next/image";
import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const SlideClients = ({ slides, clients }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);
  const length = clients.length;
  const nextSlide = () => {
    setStart(end >= length - 1 ? 0 : start + 8);
    setEnd(end >= length - 1 ? 8 : end + 8);
  };
  const prevSlide = () => {
    setStart(start <= 0 ? 0 : start - 8);
    setEnd(start <= 0 ? 8 : end - 8);
  };
  const slide1 = () => {
    setStart(0);
    setEnd(8);
  };
  const slide2 = () => {
    setStart(8);
    setEnd(16);
  };
  const slide3 = () => {
    setStart(16);
    setEnd(24);
  };
  const slide4 = () => {
    setStart(24);
    setEnd(32);
  };
  const slide5 = () => {
    setStart(32);
    setEnd(40);
  };

  return (
    <div className='flex flex-col space-y-[16.3px]'>
      <div className='grid  grid-cols-4 md:grid-cols-8 content-center justify-items-center ease-in-out duration-300'>
        {clients.slice(start, end).map(({ client, lebar, panjang }) => {
          return (
            <div key={client} className='grayscale hover:grayscale-0 flex hover:scale-[1.3] ease-in-out duration-300  items-center delay-100'>
              <Image src={client} className='m-2' alt='/' width={lebar} height={panjang} />
            </div>
          );
        })}
      </div>
      <div className='flex justify-between px-[12px] md:px-5'>
        <div className='flex space-x-5'>
          <div onClick={slide1} className={`${start == 0 ? "bg-blue" : "bg-[#EEEEEE]"} rounded-full w-3 h-3 transition-colors ease-in-out`}></div>
          <div onClick={slide2} className={`${start == 8 ? "bg-blue" : "bg-[#EEEEEE]"} rounded-full w-3 h-3 transition-colors ease-in-out`}></div>
          <div onClick={slide3} className={`${start == 16 ? "bg-blue" : "bg-[#EEEEEE]"} rounded-full w-3 h-3 transition-colors ease-in-out`}></div>
          <div onClick={slide4} className={`${start == 24 ? "bg-blue" : "bg-[#EEEEEE]"} rounded-full w-3 h-3 transition-colors ease-in-out`}></div>
          <div onClick={slide5} className={`${start == 32 ? "bg-blue" : "bg-[#EEEEEE]"} rounded-full w-3 h-3 transition-colors ease-in-out`}></div>
        </div>
        <div className='flex space-x-4'>
          <div onClick={prevSlide} className='cursor-pointer hover:text-blue-dark'>
            <GrFormPreviousLink className='text-[36px] text-blue' />
            {/* <div class="h-0 w-0 border-y-8 border-y-transparent border-r-[16px] border-r-grey hover:border-r-blue"></div> */}
          </div>
          <div onClick={nextSlide} className='cursor-pointer hover:text-blue-dark'>
            <GrFormNextLink className='text-[36px]  text-blue' />
            {/* <div class="h-0 w-0 border-y-8 border-y-transparent border-l-[16px] border-l-grey hover:border-l-blue "></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideClients;
