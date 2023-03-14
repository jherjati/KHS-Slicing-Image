import Image from "next/image";
import { aerials } from "./Data";
import React, { useState } from "react";
import clsx from "clsx";
import accentRedBlue from "../public/accents/ac-red-blue.svg";
import accentRedBlueHalf from "../public/accents/ac-red-blue-half.svg";
import accentGreen from "../public/accents/ac-home-green.svg";
import SelectButton from "./SelectButton";
import { useRouter } from "next/router";

const SurveyAndMapping = ({ pageData }) => {
  const router = useRouter();
  const [lin, setlin] = useState("survey");

  function onClickDropDown(e) {
    setlin(e.target.name);
    router.push(`#${e.target.name}`);
  }

  const { title, description, subserviceTitle, subserviceDescription, tools } =
    pageData;

  return (
    <div className='flex flex-col pt-[70px] relative'>
      <div className='space-y-10 flex flex-col md:space-y-0 md:grid md:grid-cols-2 content-center px-[20px] md:px-[120px] relative border-b md:py-[90px] py-10 m-0 '>
        <div className='flex justify-center flex-col space-y-5 md:space-y-8 col-span-1 mx-3'>
          <h1 className='text-blue text-[20px] leading-[28px] font-[600] font-inter '>
            Services
          </h1>
          <h1 className='text-blacky text-sedangmobile mt-5 md:mt-0 md:text-sedang2 font-quicksand '>
            {title}
          </h1>
          <div
            className='text-grey text-kecilmobile md:text-kecil font-inter text-justify'
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <ul className='flex flex-col space-y-1 list-disc text-grey text-kecilmobile md:text-kecil font-inter px-[20px] '>
            {subserviceTitle.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='flex justify-end items-center'>
          <div className='grid grid-rows-2  bg-survey bg-cover bg-center rounded-[1rem] w-[90%]  h-[80%]'>
            <div className='grid grid-cols-2 row-start-2'>
              <div className='outline outline-[16px] md:outline-[28px] bg-white w-[100%]  outline-white rounded-tr-lg'>
                <Image
                  src='/surveyImage2.png'
                  className=''
                  alt='Image'
                  width='300'
                  height='300'
                />
                <h1 className='text-blacky text-[14px] leading-[17px] md:text-[18px] md:leading-[22px] font-[700] font-inter  '>
                  Drone Photo & Video
                </h1>
                <p className='text-grey text-[12px] md:text-[16px] md:leading-[19px] leading-[15px] font-[400] font-inter pb-[10px]'>
                  Survey & Mapping
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page2 */}
      <div className='px-[20px] md:px-[120px] flex flex-col space-y-16 relative mt-0 md:py-[90px] py-10 border-b'>
        <div className='flex flex-col space-y-5 md:space-y-8 md:w-1/2 text-justify relative'>
          <h1 className='text-blacky text-sedangmobile mt-5 md:mt-0 md:text-sedang2 font-quicksand'>
            Our Tool
          </h1>
          {/* <p className='text-grey text-kecilmobile md:text-kecil font-inter text-justify'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
          </p> */}
        </div>
        <Image
          src={accentRedBlue}
          alt='Image'
          className='hidden md:block absolute right-0 top-0 m-0'
        />
        <Image
          src={accentRedBlueHalf}
          alt='Image'
          className='md:hidden absolute right-0 top-[15%] m-0'
        />
        <div className='flex justify-center md:justify-between relative'>
          <div className='row-span-2 grid grid-cols-2 gap-x-12 gap-y-4 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-8 w-full'>
            {tools.map(({ title, mediaItemUrl }) => {
              return (
                <div
                  key={title}
                  className='text-center flex flex-col items-center justify-center space-y-4 rounded-[1rem] bg-white shadow-lg w-full p-2 md:p-4'
                >
                  <div className='relative h-20'>
                    <img src={mediaItemUrl} alt='Image' />
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
      {/* page 3 */}
      <div className='px-[20px] md:px-[120px]'>
        <div className='lg:hidden border rounded-lg my-10'>
          <SelectButton
            onChange={onClickDropDown}
            selected={lin}
            options={subserviceTitle.map((item) => ({ id: item, value: item }))}
          />
        </div>
        <div
          className='flex flex-col lg:grid lg:grid-cols-4 lg:divide-x relative'
          // ref={boxRef}
        >
          <div className='col-span-3 flex flex-col space-y-5 md:space-y-8 md:pt-16 lg:pr-[3%]'>
            {subserviceTitle.map((ssTitle, key) => (
              <div
                key={key}
                id={ssTitle}
                name={ssTitle}
                className=' flex flex-col space-y-5 md:space-y-8'
                ons
              >
                <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand '>
                  {ssTitle}
                </h1>
                <div
                  className='text-justify text-grey text-kecilmobile md:text-kecil font-inter space-y-5 md:space-y-8'
                  dangerouslySetInnerHTML={{
                    __html: subserviceDescription[key],
                  }}
                ></div>
                {key === 0 && (
                  <div>
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
                )}
                {key === 1 && (
                  <div className='row-span-2 flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-12 '>
                    {aerials.map(({ aerial, name, year }) => {
                      return (
                        <div
                          key={name}
                          className=' flex flex-col  p-[20px] lg:p-[40px] space-x-4 space-y-[24px] rounded-[1rem] bg-white shadow-lg '
                        >
                          <div className='flex items-center justify-center'>
                            <Image
                              layout='responsive'
                              src={aerial}
                              alt={name}
                              width='356'
                              height='192'
                              className='rounded-md'
                            />
                          </div>

                          <div className='flex flex-col space-y-[10px] h-[48px] text-left sm:text-center justify-center'>
                            <p className='text-blacky font-[700] text-[14px] leading-[20px]  md:text-[17px] md:leading-[22px] font-inter'>
                              {name}
                            </p>
                            <p className='text-grey text-[14px] leading-[17px] font-inter md:text-[16px] md:leading-[19px]'>
                              {year}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                {key === 2 && (
                  <>
                    <Image
                      className='rounded-lg'
                      src='/uavlidarimage.JPG'
                      alt='UAV Lidar Image'
                      width='1100'
                      height='400'
                      layout='responsive'
                    />
                    <Image
                      className='rounded-lg'
                      src='/uav2.JPG'
                      alt='UAV Lidar Image'
                      width='1100'
                      height='400'
                      layout='responsive'
                    />
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
                  </>
                )}
                {key === 3 && (
                  <Image
                    className='rounded-lg'
                    src='/gisimage.png'
                    alt='UAV Image'
                    width='1100'
                    height='400'
                    layout='responsive'
                  />
                )}
                {key === 4 && (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <Image
                      className='rounded-lg'
                      src='/thermalinspection1.JPG'
                      alt='UAV Image'
                      width='1100'
                      height='400'
                      layout='responsive'
                    />
                    <Image
                      className='rounded-lg'
                      src='/thermalinspection2.JPG'
                      alt='UAV Image'
                      width='1100'
                      height='400'
                      layout='responsive'
                    />
                  </div>
                )}
                {key === 5 && (
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
                )}
              </div>
            ))}
          </div>

          {/* sisi kiri */}
          <aside className={`hidden lg:flex col-span-1 p-[10%] pt-16 w-full`}>
            <ul className='flex flex-col space-y-5 font-quicksand w-full'>
              {subserviceTitle.map((ssTitle) => (
                <a
                  key={ssTitle}
                  href={"#" + ssTitle}
                  onClick={() => setlin(ssTitle)}
                  className={
                    lin === ssTitle
                      ? "text-blue font-bold flex items-center gap-2 "
                      : "group flex hover:text-blue-dark hover:font-bold items-center gap-2"
                  }
                >
                  <div
                    className={clsx(
                      "h-1 rounded w-4 bg-blue-dark group-hover:block",
                      { block: lin === ssTitle, hidden: lin !== ssTitle }
                    )}
                  />
                  {ssTitle}
                </a>
              ))}
            </ul>
          </aside>
        </div>
        {/* sisi kanan */}
      </div>
      <Image
        src={accentGreen}
        alt='Image'
        className='select-none absolute -top-[120px] -left-[50px] md:-top-20 md:left-0'
      />
    </div>
  );
};

export default SurveyAndMapping;
