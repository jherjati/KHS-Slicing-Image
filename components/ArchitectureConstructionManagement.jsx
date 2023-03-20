import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import accentGreen from "../public/accents/ac-home-green.svg";
import SelectButton from "./SelectButton";
import { useRouter } from "next/router";

const ArchitectureConstructionManagement = ({ pageData }) => {
  const {
    title,
    description,
    subserviceTitle,
    subserviceDescription,
    subserviceProjects,
  } = pageData;

  const router = useRouter();
  const [lin, setlin] = useState("");

  function onClickDropDown(e) {
    setlin(e.target.name);
    router.push(`#${e.target.name}`);
  }

  return (
    <div className='flex flex-col pt-[70px] relative'>
      <div className='space-y-10 flex flex-col md:space-y-0 md:grid md:grid-cols-2 content-center px-[20px] md:px-[120px] relative border-b md:py-[90px] py-10 m-0 '>
        <div className='flex justify-center flex-col space-y-5 md:space-y-8 col-span-1 mx-3'>
          <h1 className='text-blue text-[20px] leading-[28px] font-[600] font-inter  '>
            Services
          </h1>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand  '>
            {title}
          </h1>
          <div
            className='text-grey text-kecilmobile md:text-kecil font-inter text-justify'
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <ul className='flex flex-col space-y-1 list-decimal text-grey text-kecilmobile md:text-kecil font-inter px-[20px]'>
            {subserviceTitle.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='flex justify-end items-center w-full'>
          <div className='grid grid-rows-2 w-full bg-architecture bg-cover bg-center rounded-[1rem] md:w-[90%]  h-[80%]'>
            <div className='grid grid-cols-2 row-start-2'>
              <div className='outline outline-[16px] md:outline-[28px] bg-white w-[100%]  outline-white rounded-2xl'>
                <Image
                  src='/architectureimage.png'
                  className='h-full object-cover '
                  alt='Image'
                  width='300'
                  height='300'
                />
                {/* <h1 className='text-blacky text-sm leading-[17px] md:text-[18px] md:leading-[22px] font-[700] font-inter  '>
                  Bangunan TIC & Komersial di Labuan Baju
                </h1>
                <p className='text-grey text-xs md:text-base md:leading-[19px] leading-[15px] font-[400] font-inter pb-[10px]'>
                  Architecture & Construction
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page 3 */}
      <div className='px-[20px] md:px-[120px] '>
        {/* sisi kanan */}
        <div className='lg:hidden border rounded-lg my-10'>
          <SelectButton
            onChange={onClickDropDown}
            selected={lin}
            options={subserviceTitle.map((item) => ({ id: item, value: item }))}
          />
        </div>
        <div className='flex flex-col lg:grid lg:grid-cols-4 lg:divide-x mb-16'>
          <div className='col-span-3 flex flex-col space-y-5 md:space-y-8 md:pt-16 lg:pr-[3%]'>
            {subserviceTitle.map((ssTitle, key) => (
              <div key={key} id={ssTitle} className=' flex flex-col space-y-8 '>
                <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand '>
                  {ssTitle}
                </h1>
                <div
                  className='text-justify text-grey text-kecilmobile md:text-kecil font-inter'
                  dangerouslySetInnerHTML={{
                    __html: subserviceDescription[key],
                  }}
                ></div>

                <div className='row-span-2 flex flex-col space-y-3 md:space-y-0 md:grid md:grid-cols-3 gap-2 md:gap-12 '>
                  {subserviceProjects
                    .filter(({ title }) => title === ssTitle)
                    .map(
                      ({
                        mediaItemId,
                        mediaItemUrl,
                        altText,
                        caption,
                        description,
                      }) => {
                        return (
                          <div
                            key={mediaItemId}
                            className=' flex flex-col p-5 space-x-4  space-y-[24px] rounded-[1rem] bg-white shadow-xl cursor-pointer'
                            onClick={() =>
                              router.push(
                                `/service/architecture-construction/${mediaItemId}`
                              )
                            }
                          >
                            <div className='relative w-full aspect-video'>
                              <Image
                                fill
                                src={mediaItemUrl}
                                alt={altText}
                                className='object-cover object-center'
                              />
                            </div>
                            <div className='flex flex-col space-y-[10px]'>
                              <div
                                className='text-blacky font-[700] leading-[20px] text-sm md:leading-[22px] font-inter'
                                dangerouslySetInnerHTML={{
                                  __html: caption,
                                }}
                              ></div>
                              <div
                                className='text-grey leading-[17px] font-inter text-sm md:leading-[19px]'
                                dangerouslySetInnerHTML={{
                                  __html: description,
                                }}
                              ></div>
                            </div>
                          </div>
                        );
                      }
                    )}
                </div>
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
                  className={
                    lin === ssTitle
                      ? "text-blue font-bold flex items-center gap-2 "
                      : "group flex hover:text-blue-dark hover:font-bold items-center gap-2"
                  }
                  onClick={() => setlin(ssTitle)}
                >
                  <div
                    className={clsx(
                      "h-1 rounded w-4 bg-blue-dark group-hover:block",
                      {
                        block: lin === ssTitle,
                        hidden: lin !== ssTitle,
                      }
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

export default ArchitectureConstructionManagement;
