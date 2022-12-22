import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";

function Footer() {
  return (
    <footer className="flex flex-col divide-y divide-slate-400/25">
      <div className="bg-footer h-[21.063 rem] w-full flex-col flex md:flex-row  justify-between items-center pt-10 ">
        <div className=" px-[20px] lg:px-[60px] ">
          <ul>
            <div className="py-3 w-[7.4 rem] h-[3.75 rem]">
              <Image
                className="w-auto h-auto"
                src="/logo_hs.png"
                alt="Logo"
                width={118}
                height={60}
              />
              {/* Stream<span className="text-blue-600">line</span> */}
            </div>
            <div className="flex flex-col gap-6 pb-5">
              <ul>
                <div className="py-3">
                  <div className="flex items-center space-x-1">
                    <HiOfficeBuilding className="text-2xl text-white cursor-pointer  hover:text-sky-200" />
                    <div>
                      <p className="text-white text-[14px] font-inter font-[400]">
                        Pondok Pinang Center C-34 Jalan Ciputat Raya,
                      </p>
                      <p className="text-white text-[14px] font-inter font-[400]">
                        Kota Jakarta Selatan, DKI Jakarta 12310
                      </p>
                    </div>
                  </div>
                </div>
                <div className="py-3 flex items-center space-x-1">
                  <MdEmail className="text-2xl text-white cursor-pointer  hover:text-sky-200" />
                  <p className="text-[14px] text-white">
                    info@handalselaras.com
                  </p>
                </div>
                <div className="py-3 flex items-center space-x-1">
                  <MdCall className="text-2xl text-white cursor-pointer  hover:text-sky-200" />
                  <p className="text-[14px] text-white">0217514589</p>
                </div>
                <div className="py-3 flex items-center space-x-1">
                  <FaWhatsapp className="text-2xl text-white cursor-pointer  hover:text-sky-200" />
                  <p className="text-[14px] text-white">085195145758</p>
                </div>
              </ul>
            </div>
          </ul>
        </div>
        <div className="flex flex-row px-[20px] lg:px-[60px] pt-5 space-x-8 lg:space-x-28">
          <div className="">
            <ul>
              <p className="text-white  text-2xl pb-4">Company</p>
              <li className="text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer">
                About Us
              </li>
              <li className="text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer">
                Service
              </li>
              <li className="text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer">
                Clients
              </li>
              <li className="text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <p className="text-white  text-2xl pb-4">Media</p>
              <li className="text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer">
                Galery
              </li>
              <li className="text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer">
                Publications
              </li>
            </ul>
          </div>
          <div className="">
            <ul>
              <p className="text-white  text-2xl pb-4">Support</p>
              <li className="text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer">
                Contact Us
              </li>
              <li className="text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer">
                Career
              </li>
              <li className="text-white text-[14px] pb-2  hover:text-blue-600 cursor-pointer">
                Monitoring
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-16 flex flex-col md:flex-row md:justify-between md:items-center bg-[#032947] ">
        <h1 className=" flex px-[20px] lg:px-[60px] justify-center pb-1 md:pb-0 text-white ">
          © 2022 Handal Selaras Group
        </h1>
        <div className="flex justify-center gap-6 px-20">
          <FaInstagram className="text-2xl text-white cursor-pointer hover:text-yellow-600" />
          <FaFacebook className="text-2xl text-white cursor-pointer hover:text-blue-600" />
          <FaYoutube className="text-2xl text-white cursor-pointer hover:text-red-600" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
