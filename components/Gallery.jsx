import React from "react";
import Image from "next/image";
import { gallery } from "./Data";

const Galery = () => {
  return (
    <div className='my-16 flex flex-col space-y-12'>
      <div className=' flex flex-col space-y-8 lg:grid lg:grid-cols-3  content-center px-[20px] md:px-[120px] mt-16'>
        <div className='lg:col-span-2 flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3'>
          <h1 className='text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand '>Our Gallery</h1>
          <p className='text-slate-500 tracking-wide text-sm md:text-xl font-quicksand text-justify'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
      </div>
      {/* batas */}
      <div className='row-span-2 flex flex-col  space-y-3 md:grid md:grid-cols-2 gap-2 md:gap-12 px-[20px] md:px-[120px]'>
        {gallery.map(({ gallery, text, key }) => {
          return (
            <div key={key} className=' grid  gap-4 text-center justify-items-center content-center  rounded-[1rem] w-full bg-white shadow-2xl p-5 md:px-[4%] md:py-[5%]'>
              <div className=''>
                <iframe
                  width={550}
                  height={400}
                  layout='responsive'
                  src={gallery}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                  className='md:w-[550px] md:max-w-[550px] md:h-[400px] max-w-[330px] h-[175px] w-full'
                ></iframe>
              </div>

              <div className='flex flex-col justify-center'>
                <p className='text-slate-800 font-bold tracking-wide text-sm md:text-xl font-quicksand'>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Galery;
