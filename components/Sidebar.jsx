import React from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-xl md:text-3xl text-slate-900 items-center cursor-pointer fixed right-14 top-4 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6 pb-3"
          fill="rgb(15 23 42)"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="60" height="5"></rect>
          <rect y="20" width="60" height="5"></rect>
          <rect y="40" width="60" height="5"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[40vw] md:w-[20vw] bg-white shadow-lg  text-black fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        {" "}
        <div>
          <div>
            <Image
              src="/sidebar_logo.png"
              className="hidden w-auto h-auto md:flex ml-0 md:ml-3 mt-12 md:mt10  object-contain"
              alt="Picture of the author"
              width={40}
              height={40}
              layout="fill"
            />
            <Image
              src="/sidebar_logo.png"
              className="md:hidden flex w-auto h-auto ml-3 md:ml-3 mt-12 md:mt10  object-contain"
              alt="Picture of the author"
              width={30}
              height={30}
            />
          </div>
          <div className="flex-col text-xs md:text-base pt-5 px-2 divide-y items-center ">
            <div className=" py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-slate-900 tracking-wide text-base font-quicksand">
              <Link href="/">Home</Link>
            </div>
            <ul className="">
              <li className=" py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-slate-900 tracking-wide text-base font-quicksand">
                <Link href="/about-us"> About Us</Link>
              </li>
            </ul>
            <div className="py-3 align-middle">
              <div
                onClick={() => setdropdownOpen(!dropdownOpen)}
                className=" hover:text-blue-900 hover:font-bold
    hover:cursor-pointer text-slate-900 tracking-wide text-base font-quicksand
    "
              >
                Service
              </div>

              <div
                className={`${
                  dropdownOpen ? `top-full opacity-100 visible` : "hidden"
                } flex flex-col pt-1 space-y-2 pl-2 md:pl-8 
        `}
              >
                <div className="hover:text-blue-900 hover:cursor-pointer text-slate-400 tracking-wide text-sm font-quicksand">
                  <Link href="/service/survey-and-mapping">
                    Survey & Mapping
                  </Link>
                </div>
                <div className="hover:text-blue-900 hover:cursor-pointer text-slate-400 tracking-wide text-sm font-quicksand">
                  <Link href="/service/architecture-construction">
                    Architecture & Construction
                  </Link>
                </div>
                <div className="hover:text-blue-900 hover:cursor-pointer text-slate-400 tracking-wide text-sm font-quicksand">
                  <Link href="/service/urban-planning">Urban Planning</Link>
                </div>
              </div>
            </div>
            <ul>
              <li className=" py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-slate-900 tracking-wide text-base font-quicksand">
                <Link href="/clients">Clients</Link>
              </li>
            </ul>
            <ul>
              <li className=" py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-slate-900 tracking-wide text-base font-quicksand">
                <Link href="/#">Galery</Link>
              </li>
            </ul>
            <ul>
              <li className=" py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-slate-900 tracking-wide text-base font-quicksand">
                <Link href="/#">Blog & Publications</Link>
              </li>
            </ul>
            <ul>
              <li className=" py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-slate-900 tracking-wide text-base font-quicksand">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
            <ul>
              <li className=" py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-slate-900 tracking-wide text-base font-quicksand">
                <Link href="/#">Monitoring</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
