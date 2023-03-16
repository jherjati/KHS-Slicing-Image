import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";

function Footer() {
  return (
    <footer className='flex flex-col divide-y divide-slate-400/25 font-inter'>
      <div className='bg-footer  w-full flex-col flex md:flex-row  justify-between items-center pt-2  px-[20px] md:px-[60px] lg:px-[120px] '>
        <div className='py-5'>
          <ul>
            {/* <div className='py-3 w-[7.4 rem] h-[3.75 rem]'>
              <Image className='object-cover bg-white rounded-lg px-5 py-[14px]' src='/logoatas.png' alt='Logo' width={112.18} height={60} />
              Stream<span className="text-blue-600">line</span>
            </div> */}
            <div className='flex flex-col gap-6 pb-5'>
              <ul className='space-y-2'>
                <div className=''>
                  <div className='flex items-start space-x-2'>
                    <HiOfficeBuilding className='text-lg text-white cursor-pointer  hover:text-sky-200' />
                    <div className='leading-3 space-y-3'>
                      <p className='text-white text-[14px] font-inter font-[400]'>Pondok Pinang Center C-34 Jalan Ciputat Raya,</p>
                      <p className='text-white text-[14px] font-inter font-[400]'>Kota Jakarta Selatan, DKI Jakarta 12310.</p>
                    </div>
                  </div>
                </div>
                <div className=' flex items-center space-x-2'>
                  <MdEmail className='text-lg text-white cursor-pointer  hover:text-yellow-200' />
                  <p className='text-[14px] text-white'>info@handalselaras.com</p>
                </div>
                <div className=' flex items-center space-x-2'>
                  <MdCall className='text-lg text-white cursor-pointer  hover:text-blue' />
                  <p className='text-[14px] text-white'>0217514589</p>
                </div>
                <div className=' flex items-center space-x-2'>
                  <FaWhatsapp className='text-lg text-white cursor-pointer  hover:text-green-500' />
                  <p className='text-[14px] text-white'>085195145758</p>
                </div>
              </ul>
            </div>
          </ul>
        </div>
        <div className='flex flex-row py-5 space-x-8 lg:space-x-28'>
          <div className=''>
            <ul>
              <p className='text-white  text-[16px] leading-[24px] font-[700] pb-4'>Company</p>
              <li className='text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer'>About Us</li>
              <li className='text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer'>Service</li>
              <li className='text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer'>Clients</li>
              <li className='text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer'>Blog</li>
            </ul>
          </div>
          <div className=''>
            <ul>
              <p className='text-white  text-[16px] leading-[24px] font-[700] pb-4'>Media</p>

              <li className='text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer'>Gallery</li>
              <li className='text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer'>Blog & Publications</li>
            </ul>
          </div>
          <div className=''>
            <ul>
              <p className='text-white  text-[16px] leading-[24px] font-[700] pb-4'>Support</p>
              <li className='text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer'>Contact Us</li>
              <li className='text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer'>Career</li>
              <li className='text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer'>App</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='h-16 flex flex-col md:flex-row md:justify-between md:items-center bg-[#032947] '>
        <h1 className=' flex px-[20px] lg:px-[120px] justify-center pb-1 md:pb-0 text-white '>© 2022 Handal Selaras Group</h1>
        <div className='flex justify-center gap-6 px-20 lg:px-[120px]'>
          <FaInstagram className='text-[20px] leading-[24px] font-[700] text-white cursor-pointer hover:text-yellow-600' onClick={() => window.open("https://www.instagram.com/handalselaras/?hl=en", "_blank")} />
          {/* <FaFacebook className='text-[20px] leading-[24px] font-[700] text-white cursor-pointer hover:text-sky-600' /> */}
          <FaYoutube className='text-[20px] leading-[24px] font-[700] text-white cursor-pointer hover:text-red-600' onClick={() => window.open("https://www.youtube.com/channel/UCqdgCMFewMEKRnJVcTeJi6w", "_blank")} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
