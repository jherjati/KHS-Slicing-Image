import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";

const NavbarBackUp = () => {
  return (
    <div className="flex h-16  shadow-lg md:px-10  bg-white   fixed top-0 left-0 right-0 z-10">
      {/* kiri */}

      <div className="flex w-auto h-auto mx-auto px-3 items-center ">
        <Image
          width={100}
          height={100}
          className="w-20 h-10 "
          src="/4 1.png"
          alt="khs logo"
        />
      </div>

      {/* tengah */}
      <div className="flex basis-[90%] justify-items-center divide-x-2 ">
        <div className="flex items-center justify-items-center cursor-pointer hover:text-slate-900 ">
          <GoSearch className="mx-3 text-2xl text-slate-900 " />
          <p className="mx-5 text-slate-900">SEARCH</p>
        </div>
        <div className="hidden md:flex gap-6 items-center px-10">
          <FaInstagram className="text-2xl text-slate-900 cursor-pointer hover:text-yellow-600" />
          <FaFacebook className="text-2xl text-slate-900 cursor-pointer hover:text-blue-600" />
          <FaYoutube className="text-2xl text-slate-900 cursor-pointer hover:text-red-600" />
        </div>
      </div>

      {/* kanan */}
      <div className="flex items-center justify-items-center px-5">
        <Sidebar />
      </div>
    </div>
  );
};

export default NavbarBackUp;
