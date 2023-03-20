import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import accentGreen from "../public/accents/ac-home-green.svg";
import SelectButton from "./SelectButton";
import { useRouter } from "next/router";

const UrbanPlanning = ({ pageData }) => {
  const {
    title,
    description,
    subserviceTitle,
    subserviceDescription,
    subserviceImage,
  } = pageData;

  const router = useRouter();
  const [lin, setlin] = useState("");

  function onClickDropDown(e) {
    setlin(e.target.name);
    router.push(`#${e.target.name}`);
  }

  return (
    <div className='flex flex-col relative pt-[70px]'>
      <div className='space-y-10 flex flex-col md:space-y-0 md:grid md:grid-cols-2 content-center px-[20px] md:px-[120px] relative border-b md:py-[90px] py-10 m-0'>
        <div className='flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3'>
          <h1 className='text-blue text-[20px] leading-[28px] font-[600] font-inter'>
            Services
          </h1>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand'>
            {title}
          </h1>
          <div
            className='text-grey text-kecilmobile md:text-kecil font-inter text-justify'
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <ul className='flex flex-col space-y-1 list-decimal text-grey text-kecilmobile md:text-kecil font-inter  px-[20px] md:px-[120px]'>
            {subserviceTitle.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='flex justify-end items-center'>
          <div className='grid grid-rows-2  bg-urban bg-cover bg-center rounded-[1rem] w-full md:w-[90%]  h-[80%]'>
            <div className='grid grid-cols-2 row-start-2'>
              <div className='outline outline-[16px] md:outline-[28px] bg-white w-[100%]  outline-white rounded-2xl'>
                <Image
                  src='/urbanimage.png'
                  className='h-full object-cover '
                  alt=''
                  width='300'
                  height='300'
                />
                {/* <h1 className='text-blacky text-[14px] leading-[17px] md:text-[18px] md:leading-[22px] font-[700] font-inter'>Kontur Mandalika</h1>
                <p className='text-grey text-[12px] md:text-[16px] md:leading-[19px] leading-[15px] font-[400] font-inter pb-[10px] '>Urban Planning</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page 3 */}
      <div className='px-[20px] md:px-[120px] '>
        <div className='lg:hidden border rounded-lg my-10'>
          <SelectButton
            onChange={onClickDropDown}
            selected={lin}
            options={subserviceTitle.map((item) => ({ id: item, value: item }))}
          />
        </div>
        <div className='lg:grid lg:grid-cols-4 lg:divide-x'>
          <div className='col-span-3 flex flex-col space-y-8 md:space-y-16 md:pt-16 lg:pr-[3%] pb-10 md:pb-[100px]'>
            {subserviceTitle.map((ssTitle, key) => (
              <div
                key={key}
                id={ssTitle}
                name={ssTitle}
                className=' flex flex-col space-y-3 md:space-y-8 '
              >
                <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand'>
                  {ssTitle}
                </h1>
                <div
                  className='text-justify text-grey text-kecilmobile md:text-kecil font-inter space-y-3 md:space-y-8'
                  dangerouslySetInnerHTML={{
                    __html: subserviceDescription[key],
                  }}
                ></div>

                {subserviceImage
                  .filter(({ title }) => title === ssTitle)
                  .map(({ title, mediaItemUrl }, idx) => (
                    <Image
                      key={idx}
                      className='rounded-lg'
                      src={mediaItemUrl}
                      alt={title + " Image"}
                      width='800'
                      height='400'
                      layout='intrinsic'
                    />
                  ))}
              </div>
            ))}
          </div>

          {/* sisi kiri */}
          <aside className='hidden md:flex col-span-1 pt-16 p-[10%] '>
            <ul className='space-y-5 '>
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
      </div>
      <Image
        src={accentGreen}
        alt='Image'
        className='select-none absolute -top-[120px] -left-[50px] md:-top-20 md:left-0'
      />
    </div>
  );
};

export default UrbanPlanning;
