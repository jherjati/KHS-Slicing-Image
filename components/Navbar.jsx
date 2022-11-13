import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div className="flex h-16  shadow-lg md:px-10  bg-white   fixed top-0 left-0 right-0 z-10">
      {/* kiri */}

      <div className="basis-[20%] lg:basis-[10%] flex w-auto h-auto px-3 items-center ">
        <Image
          width={100}
          height={100}
          className="w-20 h-10 "
          src="/4 1.png"
          alt="khs logo"
        />
      </div>

      {/* tengah */}

      <div className="flex basis-[70%]">
        {searchOpen ? (
          <div className="basis-[70%] lg:basis-[100%] flex items-center">
            <BiArrowBack
              className="basis-[10%] text-2xl text-slate-900 cursor-pointer hover:text-blue-600"
              onClick={() => setSearchOpen(!searchOpen)}
            />
            <form className="basis-[90%]">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 font-quicksand"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </form>
          </div>
        ) : (
          <div
            className="flex  divide-x-2 "
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <div className="flex items-center justify-items-center cursor-pointer hover:text-blue-600 ">
              <GoSearch className="mx-3 text-2xl text-slate-900 hover:text-blue-600 " />
              <p className="mx-5 text-slate-900 hover:text-blue-600">SEARCH</p>
            </div>
            <div className="hidden md:flex gap-6 items-center px-10">
              <FaInstagram className="text-2xl text-slate-900 cursor-pointer hover:text-yellow-600" />
              <FaFacebook className="text-2xl text-slate-900 cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl text-slate-900 cursor-pointer hover:text-red-600" />
            </div>
          </div>
        )}
      </div>

      {/* kanan */}
      <div className="flex items-center justify-items-center px-5">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
