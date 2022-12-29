import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(term);
    //TODO: fetch api here
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const searchfunc = (e) => {
    e.preventdefault();
    e.target.value;
  };

  return (
    <div className="z-[200]">
      {searchOpen ? (
        <div className="flex  fixed left-0 top-0 w-full h-screen bg-black/80 z-[200]">
          <div className="fixed flex items-center  left-0 top-0 h-[70px] w-full bg-white ">
            <div className="flex  items-center  px-[17.1px] md:px-[60px] space-x-[14.2px] basis-[90%]">
              <BiArrowBack
                className="flex md:hidden"
                onClick={() => setSearchOpen(!searchOpen)}
              />
              <GoSearch className="hidden md:flex" />
              <form
                className="text-grey  font-[500] font-quicksand text-[14px] hidden md:flex basis-[100%]"
                action=""
                onSubmit={onSubmit}
              >
                <input
                  type="text"
                  onChange={(event) => setTerm(event.target.value)}
                  id="simple-search"
                  className="bg-white focus:outline-none text-gray-900 text-sm  w-full pl-10 p-2.5"
                  placeholder="Telusuri"
                  required
                />
              </form>
              <form
                className="text-grey  font-[500] font-quicksand text-[14px] flex md:hidden basis-[100%]"
                action=""
                onSubmit={onSubmit}
              >
                <input
                  type="text"
                  onChange={(event) => setTerm(event.target.value)}
                  id="simple-search"
                  className="bg-white focus:outline-none text-gray-900 text-sm  w-full pl-10 p-2.5"
                  placeholder="Telusuri"
                  required
                />
              </form>
            </div>
            <div className="flex md:space-x-[32px] basis-[10%] space-x-1 items-center">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:flex space-x-1 text-blacky hidden items-center"
              >
                <AiOutlineClose className="text-[14px] font-[600]  font-quicksand" />
                <div className="text-[14px] font-quicksand leading-[18px] font-[600] ">
                  Cancel
                </div>
              </button>
              <div className="bg-blue flex items-center justify-center h-[71px] w-[70px]">
                <IoMdSend className="text-white text-[25px]" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="z-[200]">
          <div className="hidden md:flex justify-between h-[70px]  shadow-lg md:px-10  bg-white   fixed top-0 left-0 right-0 z-10">
            {/* kiri */}

            <div className="basis-[20%] lg:basis-[10%] flex w-auto h-auto px-3 items-center ">
              <Image
                width={76.54}
                height={33.93}
                className="w-[77.54px] h-[33.93px] "
                src="/logoatas.png"
                alt="khs logo"
              />
            </div>

            {/* tengah */}

            <div className="flex basis-[80%]">
              <div
                className="flex  divide-x-2 "
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <div className="flex items-center justify-items-center cursor-pointer hover:text-blue-600 ">
                  <GoSearch className=" text-blacky text-[14px] font-[600] hover:text-black " />
                  <p className="mx-5 text-blacky text-[14px] font-quicksand uppercase hover:text-black font-[600]">
                    SEARCH
                  </p>
                </div>
                <div className="hidden md:flex gap-6 items-center px-10">
                  <FaInstagram className="text-blacky text-[18px] font-[600] cursor-pointer hover:text-yellow-600" />
                  <FaFacebook className="text-blacky text-[18px] font-[600]cursor-pointer hover:text-sky-600" />
                  <FaYoutube className="text-blacky text-[18px] font-[600] cursor-pointer hover:text-red-600" />
                </div>
              </div>
            </div>
            {/* search */}
            {/* <div className="flex  fixed left-0 top-0 w-full h-screen bg-black/80">
        <div className="fixed flex items-center justify-between left-0 top-0 h-[70px] w-full bg-white  ease-in duration-500">
          <div className="flex  items-center justify-between px-[17.1px] md:px-[60px] space-x-[14.2px]">
            <BiArrowBack className="flex md:hidden" />
            <GoSearch className="hidden md:flex" />
            <div className="text-grey font-[500] font-quicksand text-[14px] hidden md:flex">
              Search Everything here (News, gallery, client, project, etc) ...
            </div>
            <div className="text-grey font-[500] font-quicksand text-[14px] flex md:hidden">
              Search Everything here ...
            </div>
          </div>
          <div className="flex md:space-x-[32px] space-x-1 items-center">
            <button className="md:flex space-x-1 text-blacky hidden items-center">
              <AiOutlineClose className="text-[14px] font-[600]  font-quicksand" />
              <div className="text-[14px] font-quicksand leading-[18px] font-[600] ">
                Cancel
              </div>
            </button>
            <div className="bg-blue flex items-center justify-center h-[71px] w-[70px]">
              <IoMdSend className="text-white text-[25px]" />
            </div>
          </div>
        </div>
      </div> */}

            {/* kanan */}

            <div className="flex divide-x-2 md:space-x-4 ">
              <div className="flex items-center font-quicksand space-x-1 cursor-pointer md:p-[25px] ">
                <img
                  className=""
                  src={
                    "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                  }
                  width={20}
                  height={30}
                />
                <p className="hidden font-quicksand text-[15px] leading-[18px] md:flex">
                  ENGLISH{" "}
                </p>
                <BiChevronDown className="text-blacky text-[40px] font-[600] text-center" />
              </div>
              <div
                onClick={handleNav}
                className="flex items-center px-[2px] py-[25px] cursor-pointer hover:text-black"
              >
                <div className="hidden md:flex text-[15px] leading-[18px] font-quicksand px-4">
                  MENU
                </div>
                <FiMenu className="text-blacky text-[18px] font-[600] flex items-center cursor-pointer hover:text-black" />
              </div>
            </div>
            <div
              className={
                nav
                  ? "flex  fixed left-0 top-0 w-full z-[100] h-screen bg-black/80"
                  : "hidden"
              }
            >
              <div className="fixed right-0 top-0 w-[322px] h-screen bg-white  ease-in duration-500">
                <div className="flex justify-between items-center">
                  <Image
                    width={49.43}
                    height={40}
                    className="w-[49.43px] h-[40px] ml-[27px] mt-[24px]"
                    src="/logosidebar.png"
                    alt="khs logo"
                  />
                  <AiOutlineClose
                    onClick={handleNav}
                    className="text-[20px]  text-[#8F8C8C] mt-[20px] mr-[40px] cursor-pointer hover:text-black"
                  />
                </div>
                <div className="flex flex-col divide-y ">
                  <div className="px-[24px] py-3  align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand">
                    <Link href="/">Home</Link>
                  </div>

                  <div className="px-[24px]  py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand">
                    <Link href="/about-us"> About Us</Link>
                  </div>

                  <div className="px-[24px] py-3 align-middle">
                    <div
                      onClick={() => setdropdownOpen(!dropdownOpen)}
                      className=" flex justify-between hover:text-blue-900 hover:font-bold
    hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand
    "
                    >
                      <div>Service</div>
                      {dropdownOpen ? (
                        <BiChevronUp className="text-[25px] text-[#8F8C8C] text-center" />
                      ) : (
                        <BiChevronDown className="text-[25px] text-[#8F8C8C] text-center" />
                      )}
                      {/* <BiChevronDown className="text-[25px] text-[#8F8C8C] text-center" />
                      <BiChevronUp className="text-[25px] text-[#8F8C8C] text-center" /> */}
                    </div>

                    <div
                      className={`${
                        dropdownOpen ? `top-full opacity-100 visible` : "hidden"
                      } mx-[24px] flex flex-col pt-1 space-y-2 ml-[16px] 
        `}
                    >
                      <div className="hover:text-blue-900 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand">
                        <Link href="/service/survey-and-mapping">
                          Survey & Mapping
                        </Link>
                      </div>
                      <div className="hover:text-blue-900 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand">
                        <Link href="/service/architecture-construction">
                          Architecture & Construction
                        </Link>
                      </div>
                      <div className="hover:text-blue-900 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand">
                        <Link href="/service/urban-planning">
                          Urban Planning
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="px-[24px] py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px] font-quicksand">
                    <Link href="/clients">Clients</Link>
                  </div>

                  <div className="px-[24px] py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px] font-quicksand">
                    <Link href="/gallery">Galery</Link>
                  </div>

                  <div className="px-[24px]  py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px] font-quicksand">
                    <Link href="/career">Career</Link>
                  </div>

                  <div className="px-[24px]  py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px] font-quicksand">
                    <Link href="/blog">Blog & Publications</Link>
                  </div>

                  <div className="px-[24px]  py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px] font-quicksand">
                    <Link href="/contact-us">Contact Us</Link>
                  </div>

                  <div className="px-[24px]  py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px] font-quicksand">
                    <Link href="/monitor">Monitoring</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:hidden items-center justify-between h-[70px]  shadow-lg md:px-10  bg-white   fixed top-0 left-0 right-0 z-10">
            <div className="mx-[24px]">
              <FiMenu
                className="text-blacky text-[18px] font-[600] flex items-center cursor-pointer hover:text-black"
                onClick={handleNav}
              />
              <div
                className={
                  nav
                    ? "flex  fixed left-0 top-0 w-full h-screen bg-black/80"
                    : "hidden"
                }
              >
                <div className="fixed left-0 top-0 w-[322px] h-screen bg-white  ease-in duration-500">
                  <div className="flex justify-between items-center">
                    <Image
                      width={49.43}
                      height={40}
                      className="w-[49.43px] h-[40px] ml-[27px] mt-[24px]"
                      src="/logosidebar.png"
                      alt="khs logo"
                    />
                    <AiOutlineClose
                      onClick={handleNav}
                      className="text-[20px]  text-[#8F8C8C] mt-[20px] mr-[40px] cursor-pointer hover:text-black"
                    />
                  </div>
                  <div className="flex flex-col divide-y ">
                    <div className="px-[24px] py-3  align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand">
                      <Link href="/">Home</Link>
                    </div>

                    <div className="px-[24px]  py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand">
                      <Link href="/about-us"> About Us</Link>
                    </div>

                    <div className="px-[24px] py-3 align-middle">
                      <div
                        onClick={() => setdropdownOpen(!dropdownOpen)}
                        className=" flex justify-between hover:text-blue-900 hover:font-bold
    hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand
    "
                      >
                        <div>Service</div>
                        {dropdownOpen ? (
                          <BiChevronUp className="text-[25px] text-[#8F8C8C] text-center" />
                        ) : (
                          <BiChevronDown className="text-[25px] text-[#8F8C8C] text-center" />
                        )}
                      </div>

                      <div
                        className={`${
                          dropdownOpen
                            ? `top-full opacity-100 visible`
                            : "hidden"
                        } mx-[24px] flex flex-col pt-1 space-y-2 ml-[16px] 
        `}
                      >
                        <div className="hover:text-blue-900 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand">
                          <Link href="/service/survey-and-mapping">
                            Survey & Mapping
                          </Link>
                        </div>
                        <div className="hover:text-blue-900 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand">
                          <Link href="/service/architecture-construction">
                            Architecture & Construction
                          </Link>
                        </div>
                        <div className="hover:text-blue-900 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand">
                          <Link href="/service/urban-planning">
                            Urban Planning
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="px-[24px] py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand">
                      <Link href="/clients">Clients</Link>
                    </div>

                    <div className="px-[24px] py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand">
                      <Link href="/gallery">Galery</Link>
                    </div>

                    <div className="px-[24px]  py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand">
                      <Link href="/career">Career</Link>
                    </div>

                    <div className="px-[24px]  py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand">
                      <Link href="/blog">Blog & Publications</Link>
                    </div>

                    <div className="px-[24px]  py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand">
                      <Link href="/contact-us">Contact Us</Link>
                    </div>

                    <div className="px-[24px]  py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand">
                      <Link href="/monitor">Monitoring</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                width={76.54}
                height={33.93}
                className="w-[76.54px] h-[33.93px] "
                src="/logoatas.png"
                alt="khs logo"
              />
            </div>
            <div className="mx-[24px]">
              <GoSearch
                className="text-blacky text-[14px] font-[600] hover:text-black"
                onClick={() => setSearchOpen(!searchOpen)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
