import React from "react";
import { MdCall, MdEmail } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Map from "./Map";
import accentRedBlue from "../public/accents/ac-red-blue.svg";
import accentRedBlueHalf from "../public/accents/ac-red-blue-half.svg";
import accentGreen from "../public/accents/ac-home-green.svg";
import Image from "next/image";

const ContactUs = ({ pageData }) => {
  const { title, address, email, phone, whatsapp } = pageData;

  return (
    <div className='pt-[70px] pb-[90px] flex flex-col px-5  md:px-[120px] relative'>
      <Image
        src={accentGreen}
        alt=''
        className='md:block hidden absolute top-0 left-0'
      />
      <Image
        src={accentRedBlue}
        alt=''
        className='md:block hidden absolute top-1/4 right-0'
      />
      <Image
        src={accentRedBlueHalf}
        alt=''
        className='md:hidden absolute top-1/4 right-0'
      />
      <div className=' flex flex-col pb-[60px] space-y-8 md:grid md:grid-cols-3  content-center pt-10  md:pt-[90px]'>
        <div className='md:col-span-2 flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3'>
          <h1 className='text-slate-900 font-bold  text-[32px] md:text-left text-center md:text-5xl font-quicksand '>
            {title}
          </h1>
          <div className='flex flex-col gap-4 md:gap-6 pb-5'>
            <div className='flex items-start space-x-1 gap-2'>
              <HiOfficeBuilding className='text-sm md:text-2xl text-[#8F8C8C] cursor-pointer mt-1 hover:text-sky-200' />
              <p className='text-[#8F8C8C] md:text-base text-sm w-96'>
                {address}
              </p>
            </div>
            <div className='flex items-center space-x-1 gap-2'>
              <MdEmail className='text-sm md:text-2xl text-[#8F8C8C] cursor-pointer  hover:text-sky-200' />
              <p className='text-[#8F8C8C] md:text-base text-sm'>{email}</p>
            </div>
            <div className='flex items-center space-x-1 gap-2'>
              <MdCall className='text-sm md:text-2xl text-[#8F8C8C] cursor-pointer  hover:text-sky-200' />
              <p className='text-[#8F8C8C] md:text-base text-sm'>{phone}</p>
            </div>
            <div
              className='flex items-center space-x-1 gap-2 cursor-pointer'
              onClick={() => window.open("https://wa.me/" + whatsapp, "_blank")}
            >
              <FaWhatsapp className='text-sm md:text-2xl text-[#8F8C8C] cursor-pointer  hover:text-sky-200' />
              <p className='text-[#8F8C8C] md:text-base text-sm'>{whatsapp}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex  flex-col md:grid md:grid-cols-7 gap-10 relative'>
        <div className='md:col-span-3 grid grid-cols-2 rounded-3xl shadow p-5 gap-5 bg-white'>
          <div className='text-sm space-y-1'>
            <label htmlFor='nama' className='font-semibold'>
              Nama<span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              className='block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='nama'
              placeholder='Masukkan nama'
            />
          </div>
          <div className='text-sm space-y-1'>
            <label htmlFor='nama' className='font-semibold'>
              E-mail<span className='text-red-500'>*</span>
            </label>
            <input
              type='email'
              className='block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='email'
              placeholder='Masukkan email'
            />
          </div>
          <div className='text-sm space-y-1 col-span-2'>
            <label htmlFor='nama' className='font-semibold'>
              Subjek<span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              className='block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='subjek'
              placeholder='Masukkan subjek'
            />
          </div>
          <div className='text-sm space-y-1 col-span-2'>
            <label htmlFor='nama' className='font-semibold'>
              Pesan<span className='text-red-500'>*</span>
            </label>
            <textarea
              className='block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='pesan'
              cols='30'
              rows='10'
              placeholder='Tuliskan pesan anda'
            />
          </div>
          <button className=' w-full col-span-2 py-2 rounded-xl bg-blue-dark  text-white font-semibold hover:bg-opacity-80 transition-opacity ease-in-out'>
            Kirim
          </button>
        </div>
        <div className='md:col-span-4 h-[375px] md:h-full w-full'>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
