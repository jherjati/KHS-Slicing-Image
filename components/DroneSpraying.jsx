import React from "react";
import Image from "next/image";
import { drone } from "./Data";
import accentRedBlue from "../public/accents/ac-red-blue.svg";
import accentRedBlueHalf from "../public/accents/ac-red-blue-half.svg";
import accentGreen from "../public/accents/ac-home-green.svg";

const DroneSpraying = ({ pageData }) => {
  const { title, description, tools } = pageData;

  return (
    <div className='flex flex-col pt-[70px] relative '>
      <div className='space-y-10 flex flex-col md:space-y-0 md:grid md:grid-cols-2 content-center px-[20px] md:px-[120px] relative border-b md:py-[90px] py-10 m-0 '>
        <div className='flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3'>
          <h1 className='text-blue text-[20px] leading-[28px] font-[600] font-inter '>
            Services
          </h1>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand '>
            {title}
          </h1>
          <div
            className='text-grey text-kecilmobile md:text-kecil font-inter  text-justify space-y-2 md:space-y-8'
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        <div className='flex justify-end items-center'>
          <div className='grid grid-rows-2 bg-drone bg-cover bg-center rounded-[1rem] lg:min-h-[420px] w-[90%] h-[80%]'>
            <div className='grid grid-cols-2 row-start-2'>
              <div className='outline outline-[16px] md:outline-[28px] bg-white w-[100%]  outline-white rounded-tr-lg'>
                <Image
                  src='/drone-spraying.png'
                  className=''
                  alt='Drone Spraying'
                  width='300'
                  height='300'
                />
                <h1 className='text-blacky text-[14px] leading-[17px] md:text-[18px] md:leading-[22px] font-[700] font-inter  '>
                  Drone Spraying Riau
                </h1>
                <p className='text-grey text-[12px] md:text-[16px] md:leading-[19px] leading-[15px] font-[400] font-inter pb-[10px]'>
                  Drone Spraying
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page2 */}
      <div className='px-[20px] md:px-[120px] flex flex-col pb-10 relative py-10 md:py-[90px]'>
        <div className='row-span-1 flex flex-col space-y-8 relative'>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand pb-10'>
            Our Tool
          </h1>
        </div>
        <Image
          src={accentRedBlue}
          alt=''
          className='hidden md:block absolute right-0 top-10'
        />
        <Image
          src={accentRedBlueHalf}
          alt=''
          className='md:hidden  absolute right-0 top-10'
        />
        <div className='flex justify-center md:justify-between relative'>
          <div className='row-span-2 grid grid-cols-2 gap-x-12 gap-y-4  gap-2 md:gap-8 w-full'>
            {tools.map(({ title, mediaItemUrl }) => {
              return (
                <div
                  key={title}
                  className='text-center flex flex-col items-center justify-center space-y-4 rounded-[1rem] bg-white shadow-lg w-full p-2 md:p-4'
                >
                  <div className='relative h-20 w-full'>
                    <Image
                      fill
                      src={mediaItemUrl}
                      alt='Image'
                      className='object-contain object-center'
                    />
                  </div>
                  <p className='pb-2 text-blacky text-[12px] md:text-[14px] leading-[15px] md:leading-[17px] font-[600] font-inter'>
                    {title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Image
        src={accentGreen}
        alt='Image'
        className='select-none absolute -top-[120px] -left-[50px] md:-top-20 md:left-0'
      />
    </div>
  );
};

export default DroneSpraying;
