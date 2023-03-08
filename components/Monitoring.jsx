import Image from "next/image";
import { monitoring } from "./Data";
import React from "react";
import accentRedBlueHalf from "../public/accents/ac-red-blue-half.svg";
import accentGreen from "../public/accents/ac-home-green.svg";
import { BiChevronDown } from "react-icons/bi";

const Monitoring = () => {
  return (
    <div className='flex flex-col pt-[70px] relative pb-[60px]'>
      {/* page2 */}
      <div className='px-[20px] md:px-[120px] flex flex-col space-y-16 relative mt-0 md:py-[90px] py-10 '>
        <div className='flex flex-col space-y-5 md:space-y-8 md:w-1/2 text-justify relative'>
          <h1 className='text-blacky text-sedangmobile mt-5 md:mt-0 md:text-sedang2 font-quicksand'>Monitoring</h1>
          <p className='text-grey text-kecilmobile md:text-kecil font-inter md:text-justify'>Kreasi Handal Selaras’s internal applications </p>
        </div>
        <Image src={accentRedBlueHalf} alt='Image' className='absolute right-0 -bottom-[120px] m-0' />
        <div className='flex justify-center md:justify-between relative'>
          <div className='row-span-2 grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-3 gap-5 md:gap-8 w-full'>
            {monitoring.map((e, i) => {
              return (
                <div key={i} className='grid gap-4 justify-start text-left rounded-[1rem] font-inter bg-white shadow-lg w-full p-6'>
                  <Image width={400} height={400} layout='responsive' src={e.app} alt='Image' className='max-h-8 mb-6 md:mb-8  max-w-[90px] md:max-w-[100px] object-left object-contain self-start' />
                  <p className='text-left w-full text-base md:text-xl font-semibold'>{e.title}</p>
                  <p className=' text-[#8F8C8C] md:text-base text-sm text-justify'>{e.text}</p>
                  <div className='border-t w-full pt-8'>
                    <a href={e.url} className='flex items-center justify-between w-full cursor-pointer'>
                      <p className='font-bold text-blue-dark md:text-base text-sm'>Visit App</p>
                      <BiChevronDown className='-rotate-90 text-blue-dark text-lg md:text-2xl' />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Image src={accentGreen} alt='Image' className='select-none absolute -top-[120px] -left-[50px] md:-top-20 md:left-0' />
    </div>
  );
};

export default Monitoring;
