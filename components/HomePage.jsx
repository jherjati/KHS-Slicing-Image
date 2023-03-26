import React from "react";
import Image from "next/image";

import DragImage from "./DragImage";
import { logoClient, clients } from "./Data";
import SlideClients from "./SlideClients";
import Slider2 from "./Slider2";
import clsx from "clsx";
import accentRedBlue from "../public/accents/ac-red-blue.svg";
import accentRedBlueHalf from "../public/accents/ac-red-blue-half.svg";
import accentBlueGreen from "../public/accents/ac-blue-green.svg";

function ImageHeadline({
  mainImg,
  miniImg,
  mainAlt,
  miniAlt,
  title,
  caption,
  align = "left",
}) {
  return (
    <div
      className={clsx("flex items-center w-full", {
        "justify-end": align == "left",
        "justify-start": align == "right",
      })}
    >
      <div
        className={clsx(
          "relative h-[350px] md:h-[500px] flex items-start w-full md:w-[510px]",
          { "justify-end": align == "left", "justify-start": align == "right" }
        )}
      >
        <Image
          src={mainImg}
          alt={mainAlt}
          width={600}
          height={600}
          className='rounded-2xl object-cover w-full h-[290px] md:h-[442px]'
        />
        <div
          className={clsx(
            "absolute p-4 md:p-[28px] bg-white rounded-2xl bottom-0 shadow-md",
            { "left-0": align === "left", "right-0": align == "right" }
          )}
        >
          <Image
            src={miniImg}
            alt={miniAlt}
            width={600}
            height={600}
            className='rounded-2xl h-32 w-44 md:h-48 md:w-64'
          />
          <h1 className='text-blacky text-[14px] leading-[17px] md:text-[18px] md:leading-[22px] font-[700] font-inter pt-6 pb-[10px]'>
            {title}
          </h1>
          <p className='text-grey text-[12px] md:text-[16px] md:leading-[19px] leading-[15px] font-[400] font-inter '>
            {caption}
          </p>
        </div>
      </div>
    </div>
  );
}

const HomePage = ({ pageData }) => {
  const {
    section1,
    section2Title,
    section2Description,
    section2Image,
    section3Title,
    section3Description,
    section4Title,
    section4Description,
    section5Title,
    section5Description,
    section6Text,
  } = pageData;

  return (
    <div className='flex flex-col '>
      {/* slider */}
      <div className=' mt-16 '>
        <Slider2
          data={section1.map((el) => ({
            image: el.mediaItemUrl,
            title: el.title,
            text: el.caption,
          }))}
          indicators={true}
          arrows={true}
          arrowClass='opacity-0 hover:opacity-100 transition-opacity ease-in-out'
          autoplay={true}
        />
      </div>
      {/* Service */}
      <div className='my-[60px] md:my-[90px] space-y-[24px] md:space-y-[40px]'>
        <div className=' grid md:grid-cols-4 gap-4'>
          <div className='flex flex-col space-y-2 md:space-y-3 md:col-span-3 col-span-4'>
            <h1 className='text-blacky font-[700] text-sedangmobile md:text-sedang font-quicksand px-[20px] md:px-[120px]'>
              {section2Title}
            </h1>
            <div
              className='text-grey text-justify text-kecilmobile md:text-kecil font-quicksand px-[20px] md:px-[120px]'
              dangerouslySetInnerHTML={{ __html: section2Description }}
            ></div>
          </div>
          <div className='hidden col-span-2 md:col-span-1 md:flex flex-col pr-[120px] justify-center items-end'>
            <button
              type='button'
              className='text-white text-xs sm:text-sm md:text-xl rounded-lg text-center items-center w-full h-14 font-semibold max-w-[184px] bg-blue hover:bg-sky-900'
            >
              Learn More
            </button>
          </div>
        </div>
        <DragImage
          data={section2Image.map((el) => ({
            image: el.mediaItemUrl,
            title: el.caption,
            text: el.description,
            link: el.altText,
          }))}
        />
        <div className='md:hidden px-5'>
          <button
            type='button'
            className='text-white text-sm rounded-lg text-center items-center w-full h-[45px] font-semibold bg-blue hover:bg-sky-900'
          >
            Learn More
          </button>
        </div>
      </div>
      {/* Dream Reach */}
      <div className='md:grid md:grid-cols-2 gap-5 md:px-[120px] mb-[60px] md:mb-[90px] px-5 items-center space-y-[16px]'>
        <div className='space-y-[16px]'>
          <div>
            <h1 className='text-blacky font-[700]  tracking-wide text-sedangmobile md:text-sedang font-quicksand w-3/4'>
              {section3Title}
            </h1>
          </div>
          <div
            className='text-grey text-kecilmobile md:text-kecil font-quicksand text-justify '
            dangerouslySetInnerHTML={{ __html: section3Description }}
          ></div>
        </div>
        <ImageHeadline
          mainImg='/images/img-home-2.png'
          mainAlt='Dream High'
          miniImg='/testimonials.png'
          title='Handal Selaras Group'
          caption='Agustus 2018'
        />
      </div>
      {/* Grow continue */}
      <div className='relative   md:grid md:grid-cols-2 flex flex-col-reverse gap-5 md:px-[120px] mb-[60px] md:mb-[90px] px-5 items-center space-y-[16px]'>
        <Image
          src={accentBlueGreen}
          alt='Accent'
          className='select-none absolute -bottom-[100px] md:-top-20 left-0'
        />
        <ImageHeadline
          align='right'
          mainImg='/images/img-home-3.png'
          mainAlt='Grow & Continue'
          miniImg='/testimonials.png'
          title='Handal Selaras Group'
          caption='Agustus 2018'
        />
        <div className='space-y-[16px] relative'>
          <h1 className='text-blacky font-[700]  tracking-wide text-sedangmobile md:text-sedang font-quicksand'>
            {section4Title}
          </h1>
          <div
            className='text-grey text-kecilmobile md:text-kecil font-quicksand text-justify '
            dangerouslySetInnerHTML={{ __html: section4Description }}
          ></div>
        </div>
      </div>
      {/* Imagine, Believe, Achive */}
      <div className='md:px-[120px] mb-[60px] md:mb-[90px] px-5 space-y-[16px] relative'>
        <Image
          src={accentRedBlueHalf}
          alt='Accent'
          className='select-none absolute block right-0  top-[20%] lg:hidden md:top-10 md:right-0 '
        />
        <Image
          src={accentRedBlue}
          alt='Accent'
          className='select-none absolute md:block hidden md:top-10 md:right-0 '
        />
        <div className='md:grid md:grid-cols-2 gap-5 items-center md:pb-[60px] '>
          <div className='space-y-[16px]'>
            <h1 className='text-blacky font-[700]  tracking-wide text-sedangmobile md:text-sedang font-quicksand'>
              {section5Title}
            </h1>
            <div
              className='text-grey text-kecilmobile md:text-kecil font-quicksand text-justify '
              dangerouslySetInnerHTML={{ __html: section5Description }}
            ></div>
          </div>
        </div>
        <div className='flex flex-col lg:grid lg:grid-cols-4  gap-8 relative'>
          {section6Text.map((text) => {
            const [a, b, c] = text.split("\r\n");
            return (
              <div
                key={text}
                className=' bg-white grid gap-2  content-center text-left  rounded-[1rem] shadow-md p-5 md:p-6'
              >
                <div className='text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue '>
                  {a}
                </div>
                <div className='text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]'>
                  {b}
                </div>
                <div className='text-xl text-slate-600'>{c}</div>
              </div>
            );
          })}
        </div>
        <div className='pt-[60px] md:pt-[90px]'>
          <SlideClients slides={logoClient} clients={clients} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
