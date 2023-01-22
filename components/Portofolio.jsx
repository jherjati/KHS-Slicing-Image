import Image from "next/image";
import { tools, aerials, sliderImage } from "./Data";
import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import accentRedBlue from "../public/accents/ac-red-blue.svg";
import acBg from "../public/accents/ac-bg-wide.svg";
import accentRedBlueHalf from "../public/accents/ac-red-blue-half.svg";
import accentGreen from "../public/accents/ac-home-green.svg";
import SelectButton from "./SelectButton";
import { useRouter } from "next/router";
import Slider2 from "./Slider2";

const Portofolio = () => {
  const router = useRouter();
  const [lin, setlin] = useState("survey");

  const SECTION_OPTIONS = [
    { id: "survey", value: "Field Survey" },
    { id: "aerial", value: "Aerial Photo" },
    { id: "lidar", value: "UAV Lidar" },
    { id: "gis", value: "GIS" },
    { id: "thermo", value: "Thermovision Technology" },
    { id: "aev", value: "Aerial Video" },
  ];

  const linkfunc = (e) => {
    setlin(e.target.name);
  };

  function onClickDropDown(e) {
    setlin(e.target.name);
    router.push(`#${e.target.name}`);
  }

  return (
    <div className='flex flex-col pt-[70px] relative'>
      <div className='bg-blue-dark h-[400px] absolute inset-0 mt-[70px] '></div>
      <div className='py-10 md:py-20 text-center font-quicksand text-white px-5 md:px-[120px] space-x-3 relative'>
        <p className='text-base md:text-lg font-bold'>Portofolio Detail</p>
        <h1 className='text-2xl md:text-[40px] font-bold'>Bangunan TIC & Komersial di Labuan Baju</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel nostrum veritatis inventore velit. Obcaecati libero fuga deleniti, nam voluptatem aut quo delectus quas et, hic possimus distinctio pariatur dolorum?</p>
      </div>
      <div className='border-b flex justify-center'>
        <div className='md:mx-auto w-full md:w-[1000px] md:h-full max-h-max'>
          <Slider2 data={sliderImage} className='mx-5 rounded-3xl overflow-auto h-full' smvh='small' arrows={true} indicators={true} />
        </div>
      </div>
      <div className='py-10 md:py-[60px] flex flex-col-reverse md:grid md:grid-cols-5 gap-12 md:gap-20 font-inter px-5 md:px-[200px] relative'>
        <div className='flex items-center justify-between md:grid md:grid-cols-2 md:col-span-2 border-t md:border-none py-10 md:py-0'>
          <div className='space-y-[8px]'>
            <p>Programme</p>
            <p>Size</p>
            <p>Location</p>
            <p>Client</p>
            <p>Status</p>
            <p>Team</p>
          </div>
          <div className='font-bold space-y-[8px] text-end'>
            <p>Culture</p>
            <p>
              25000 m<sup>2</sup>
            </p>
            <p>Jakarta, Indonesia</p>
            <p>Private</p>
            <p>Ongoing 2019</p>
            <p>Expand List</p>
          </div>
        </div>
        <div className='md:col-span-3 space-y-5'>
          <h1 className='font-bold text-[30px] text-justify'>Title</h1>
          <p className='text-justify'>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae
            nisi, tellus tincidunt. At feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant
            diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus
            eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id. Eget quis mi enim, leo lacinia pharetra, semper.
            Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
            sodales id est ac volutpat.{" "}
          </p>
        </div>
      </div>
      {/* <div className='space-y-10 flex flex-col md:space-y-0 md:grid md:grid-cols-2 content-center px-[20px] md:px-[120px] relative border-b md:py-[90px] py-10 m-0 '>
        <div className='flex justify-center flex-col space-y-5 md:space-y-8 col-span-1 mx-3'>
          <h1 className='text-blue text-[20px] leading-[28px] font-[600] font-inter '>Services</h1>
          <h1 className='text-blacky text-sedangmobile mt-5 md:mt-0 md:text-sedang2 font-quicksand '>Survey & Mapping</h1>
          <p className='text-grey text-kecilmobile md:text-kecil font-inter text-justify'>
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
      </div> */}
      {/* page2 */}

      {/* page 3 */}

      <Image src={accentGreen} alt='Image' className='hidden md:block select-none absolute md:top-[450px] md:-left-[50px]' />
      <Image src={accentRedBlueHalf} alt='Image' className='select-none absolute -bottom-[50px] md:w-auto w-[100px] right-0 md:-bottom-[100px] md:right-0' />
    </div>
  );
};

export default Portofolio;
