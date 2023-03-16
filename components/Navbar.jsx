import { useState, Fragment } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { BiChevronDown, BiArrowBack } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown, IoMdSend } from "react-icons/io";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import { Dialog, Menu, Transition } from "@headlessui/react";
import icMap from "../public/icons/ic-map.svg";
import icBuilding from "../public/icons/ic-building.svg";
import icBox from "../public/icons/ic-box.svg";
import icBlog from "../public/icons/ic-blog.svg";
import icDrone from "../public/icons/ic-drone.svg";
import icGallery from "../public/icons/ic-gallery.svg";
import icMonitor from "../public/icons/ic-monitor.svg";
import icCareer from "../public/icons/ic-add-user.svg";
import logo from "../public/logoatas.png";

function DropDown({ title, children, path, icon = "default", drop = "left" }) {
  const router = useRouter();

  return (
    <div className='relative text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className={clsx("flex gap-2 items-center font-quicksand font-bold hover:text-blue-dark transition-colors ease-in-out", { "text-blue-dark": router.pathname.includes(path) })}>
            {({ open }) => (
              <>
                <p>{title}</p>
                <IoIosArrowDown className={clsx("transition-transform ease-in-out", { "rotate-180 t text-blue": open, "text-xs": icon === "mini" })} />
              </>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items
            className={clsx("p-3 space-y-5 absolute mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", {
              "-left-2 w-[330px]": drop === "left",
              "-right-2 w-[220px]": drop === "right",
            })}
          >
            {children}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function SideNav({ nav, onClick, path }) {
  const [dropdownOpen, setdropdownOpen] = useState(null);

  return (
    <Transition appear show={nav} as={Fragment}>
      <Dialog className='fixed inset-y-0 inset-x-0 sm:inset-x-full overflow-hidden z-10' onClose={onClick}>
        <Transition.Child as={"div"} className='fixed inset-0 bg-black/80' enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0' />
        <Transition.Child
          as={"div"}
          className='fixed inset-y-0 bg-white overflow-y-auto overflow-x-hidden left-0'
          enter='ease-in duration-300'
          enterFrom='-translate-x-full opacity-80'
          enterTo='translate-x-0 opacity-100'
          leave='ease-out duration-150'
          leaveFrom='translate-x-0 opacity-100'
          leaveTo='-translate-x-full opacity-80'
        >
          <Dialog.Panel as='div' className='bg-white w-screen max-w-xs relative px-5 py-5 flex flex-col'>
            <div className='fixed left-0 top-0 max-w-[322px] w-full h-screen bg-white'>
              <Image width={49.43} height={40} className='w-[49.43px] h-[40px] m-6' src='/logosidebar.png' alt='khs logo' />
              <div className='flex flex-col divide-y '>
                <div className='px-6 py-3  align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand'>
                  <Link href='/' className={clsx("font-quicksand transition-colors ease-in-out hover:text-blue-dark hover:font-bold", { "font-bold text-blue-dark": path === "/" })}>
                    Home
                  </Link>
                </div>
                <div className='px-6  py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand'>
                  <Link href='/about-us' className={clsx("font-quicksand transition-colors ease-in-out hover:text-blue-dark", { "font-bold text-blue-dark": path === "/about-us" })}>
                    About Us
                  </Link>
                </div>
                <div className='px-6 py-3 align-middle'>
                  <button
                    onClick={() => (dropdownOpen === "services" ? setdropdownOpen(null) : setdropdownOpen("services"))}
                    className={clsx(
                      "flex w-full select-none justify-between hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px] font-quicksand transition-colors ease-in-out hover:text-blue-dark",
                      {
                        "text-blue-dark font-bold": path.includes("/service"),
                      }
                    )}
                  >
                    <p>Service</p>
                    <BiChevronDown
                      className={clsx("text-[25px] text-center transition-all ease-in-out", { "text-[#8F8C8C]": !path.includes("/service"), "text-blue-dark": path.includes("/service"), "rotate-180": dropdownOpen === "services" })}
                    />
                  </button>

                  <div className={`${dropdownOpen === "services" ? `top-full opacity-100 visible` : "hidden"} mx-[24px] flex flex-col pt-1 space-y-2 ml-[16px]`}>
                    <div className='hover:text-blue/80 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand'>
                      <Link
                        href='/service/survey-and-mapping'
                        className={clsx({
                          "text-blue/80 font-semibold": path.includes("/service/survey-and-mapping"),
                        })}
                      >
                        Survey & Mapping
                      </Link>
                    </div>
                    <div className='hover:text-blue/80 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand'>
                      <Link
                        href='/service/architecture-construction'
                        className={clsx({
                          "text-blue/80 font-semibold": path.includes("/service/architecture-construction"),
                        })}
                      >
                        Architecture & Construction Management
                      </Link>
                    </div>
                    <div className='hover:text-blue/80 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand'>
                      <Link
                        href='/service/urban-planning'
                        className={clsx({
                          "text-blue/80 font-semibold": path.includes("/service/urban-planning"),
                        })}
                      >
                        Urban Planning
                      </Link>
                    </div>
                    <div className='hover:text-blue/80 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand'>
                      <Link
                        href='/service/drone-spraying'
                        className={clsx({
                          "text-blue/80 font-semibold": path.includes("/service/drone-spraying"),
                        })}
                      >
                        Drone Spraying
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='px-[24px] py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand'>
                  <Link href='/clients' className={clsx("font-quicksand transition-colors ease-in-out hover:text-blue-dark hover:font-bold", { "font-bold text-blue-dark": path === "/clients" })}>
                    Clients
                  </Link>
                </div>
                <div className='px-6 py-3 align-middle'>
                  <button
                    onClick={() => (dropdownOpen === "content" ? setdropdownOpen(null) : setdropdownOpen("content"))}
                    className={clsx(
                      "flex w-full select-none justify-between hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px] font-quicksand transition-colors ease-in-out hover:text-blue-dark",
                      {
                        "text-blue-dark font-bold": path.includes("/content"),
                      }
                    )}
                  >
                    <p>Content</p>
                    <BiChevronDown
                      className={clsx("text-[25px] text-center transition-all ease-in-out", { "text-[#8F8C8C]": !path.includes("/content"), "text-blue-dark": path.includes("/content"), "rotate-180": dropdownOpen === "content" })}
                    />
                  </button>
                  <div className={`${dropdownOpen === "content" ? `top-full opacity-100 visible` : "hidden"} mx-[24px] flex flex-col pt-1 space-y-2 ml-[16px]`}>
                    <div className='hover:text-blue/80 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand'>
                      <Link
                        href='/content/gallery'
                        className={clsx({
                          "text-blue/80 font-semibold": path.includes("/content/gallery"),
                        })}
                      >
                        Gallery
                      </Link>
                    </div>
                    <div className='hover:text-blue/80 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand'>
                      <Link
                        href='/content/blog'
                        className={clsx({
                          "text-blue/80 font-semibold": path.includes("/content/blog"),
                        })}
                      >
                        Blog & Publications
                      </Link>
                    </div>
                    <div className='hover:text-blue/80 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand'>
                      <Link
                        href='/content/career'
                        className={clsx({
                          "text-blue/80 font-semibold": path.includes("/content/career"),
                        })}
                      >
                        Career
                      </Link>
                    </div>
                    <div className='hover:text-blue/80 hover:cursor-pointer text-[#8F8C8C] tracking-wide text-sm font-quicksand'>
                      <Link
                        href='/content/monitoring'
                        className={clsx({
                          "text-blue/80 font-semibold": path.includes("/content/monitoring"),
                        })}
                      >
                        Monitoring
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='px-[24px]  py-3 align-middle hover:text-blue-900 hover:font-bold hover:cursor-pointer text-blacky text-[16px] leading-[20px font-quicksand'>
                  <Link href='/contact-us' className={clsx("font-quicksand transition-colors ease-in-out hover:text-blue-dark hover:font-bold", { "font-bold text-blue-dark": path === "/contact-us" })}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

const Navbar = () => {
  const router = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [term, setTerm] = useState("");
  const [activeNav, setActiveNav] = useState("home");
  const [selectedLang, setSelectedLang] = useState("en");

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
    <div className='z-[200]'>
      {searchOpen ? (
        <div className='flex fixed left-0 top-0 w-full h-screen bg-black/80 z-[200]'>
          <div className='fixed flex items-center  left-0 top-0 h-[70px] w-full bg-white '>
            <div className='flex  items-center  px-[17.1px] md:px-[60px] space-x-[14.2px] basis-[90%]'>
              <BiArrowBack className='flex md:hidden' onClick={() => setSearchOpen(!searchOpen)} />
              <GoSearch className='hidden md:flex' />
              <form className='text-grey  font-[500] font-quicksand text-[14px] hidden md:flex basis-[100%]' action='' onSubmit={onSubmit}>
                <input type='text' onChange={(event) => setTerm(event.target.value)} id='simple-search' className='bg-white focus:outline-none text-gray-900 text-sm  w-full pl-10 p-2.5' placeholder='Telusuri' required />
              </form>
              <form className='text-grey  font-[500] font-quicksand text-[14px] flex md:hidden basis-[100%]' action='' onSubmit={onSubmit}>
                <input type='text' onChange={(event) => setTerm(event.target.value)} id='simple-search' className='bg-white focus:outline-none text-gray-900 text-sm  w-full pl-10 p-2.5' placeholder='Telusuri' required />
              </form>
            </div>
            <div className='flex md:space-x-[32px] basis-[10%] space-x-1 items-center'>
              <button onClick={() => setSearchOpen(!searchOpen)} className='md:flex space-x-1 text-blacky hidden items-center'>
                <AiOutlineClose className='text-[14px] font-[600]  font-quicksand' />
                <div className='text-[14px] font-quicksand leading-[18px] font-[600] '>Cancel</div>
              </button>
              <div className='bg-blue flex items-center justify-center h-[71px] w-[70px]'>
                <IoMdSend className='text-white text-[25px]' />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='z-[200] w-full'>
          <div className='hidden lg:flex justify-between h-[70px]  shadow-lg md:px-10  bg-white   fixed top-0 left-0 right-0 z-10'>
            <div className='gap-10 flex w-auto h-auto px-3 items-center '>
              <Link href='/'>
                <Image width={76.54} height={33.93} className='w-[77.54px] h-[33.93px] ' src='/logoatas.png' alt='khs logo' />
              </Link>
              <Link href='/' className={clsx("font-bold font-quicksand transition-colors ease-in-out hover:text-blue-dark", { "text-blue-dark": router.pathname === "/" })} onClick={() => setActiveNav("home")}>
                Home
              </Link>
              <Link href='/about-us' className={clsx("font-bold font-quicksand transition-colors ease-in-out hover:text-blue-dark", { "text-blue-dark": router.pathname.includes("about-us") })} onClick={() => setActiveNav("about")}>
                About Us
              </Link>
              <DropDown title='Services' path='service'>
                <Link className={clsx(" p-2 hover:bg-[#F5F5F5] transition-colors ease-in-out rounded-md flex gap-5 items-start", { "bg-[#F5F5F5]": router.pathname.includes("survey-and-mapping") })} href='/service/survey-and-mapping'>
                  <Image src={icMap} alt='Map Icon' />
                  <span className='font-quicksand'>
                    <h1 className='font-bold'>Survey & Mapping</h1>
                    <p className='text-sm text-[#8F8C8C]'>Collect data and mapping as needed</p>
                  </span>
                </Link>
                <Link
                  className={clsx(" p-2 hover:bg-[#F5F5F5] transition-colors ease-in-out rounded-md flex gap-5 items-start", { "bg-[#F5F5F5]": router.pathname.includes("architecture-construction") })}
                  href='/service/architecture-construction'
                >
                  <Image src={icBuilding} alt='Infrastructure Icon' />
                  <span className='font-quicksand'>
                    <h1 className='font-bold'>Architecture & Construction Management</h1>
                    <p className='text-sm text-[#8F8C8C]'>Manage projects with comprehensive program</p>
                  </span>
                </Link>
                <Link className={clsx(" p-2 hover:bg-[#F5F5F5] transition-colors ease-in-out rounded-md flex gap-5 items-start", { "bg-[#F5F5F5]": router.pathname.includes("urban-planning") })} href='/service/urban-planning'>
                  <Image src={icBox} alt='Urban Plan Icon' />
                  <span className='font-quicksand'>
                    <h1 className='font-bold'>Urban Planning</h1>
                    <p className='text-sm text-[#8F8C8C]'>Plan and design urban layouts that are modern and livable</p>
                  </span>
                </Link>
                <Link className={clsx(" p-2 hover:bg-[#F5F5F5] transition-colors ease-in-out rounded-md flex gap-5 items-start", { "bg-[#F5F5F5]": router.pathname.includes("drone-spraying") })} href='/service/drone-spraying'>
                  <Image src={icDrone} alt='Drone Icon' className='w-[20px]' />
                  <span className='font-quicksand'>
                    <h1 className='font-bold'>Drone Spraying</h1>
                    <p className='text-sm text-[#8F8C8C]'>Efficient and effective service for spraying all kinds of plants</p>
                  </span>
                </Link>
              </DropDown>
              <Link href='/clients' className={clsx("font-bold font-quicksand transition-colors ease-in-out hover:text-blue-dark", { "text-blue-dark": router.pathname.includes("clients") })} onClick={() => setActiveNav("clients")}>
                Clients
              </Link>
              <DropDown title='Content' path='content'>
                <Link className={clsx(" p-2 hover:bg-[#F5F5F5] transition-colors ease-in-out rounded-md flex gap-5 items-start", { "bg-[#F5F5F5]": router.pathname.includes("gallery") })} href='/content/gallery'>
                  <Image src={icGallery} alt='Gallery Icon' />
                  <span className='font-quicksand'>
                    <h1 className='font-bold'>Gallery</h1>
                    <p className='text-sm text-[#8F8C8C]'>Find out the projects we have completed</p>
                  </span>
                </Link>
                <Link className={clsx(" p-2 hover:bg-[#F5F5F5] transition-colors ease-in-out rounded-md flex gap-5 items-start", { "bg-[#F5F5F5]": router.pathname.includes("blog") })} href='/content/blog'>
                  <Image src={icBlog} alt='Blog Icon' />
                  <span className='font-quicksand'>
                    <h1 className='font-bold'>Blog & Publications</h1>
                    <p className='text-sm text-[#8F8C8C]'>Learn more about our project by accessing the blog documentation</p>
                  </span>
                </Link>
                <Link className={clsx(" p-2 hover:bg-[#F5F5F5] transition-colors ease-in-out rounded-md flex gap-5 items-start", { "bg-[#F5F5F5]": router.pathname.includes("career") })} href='/content/career'>
                  <Image src={icCareer} alt='Career Icon' />
                  <span className='font-quicksand'>
                    <h1 className='font-bold'>Career</h1>
                    <p className='text-sm text-[#8F8C8C]'>Discover the opportunities and join our team</p>
                  </span>
                </Link>
                <Link className={clsx(" p-2 hover:bg-[#F5F5F5] transition-colors ease-in-out rounded-md flex gap-5 items-start", { "bg-[#F5F5F5]": router.pathname.includes("monitoring") })} href='/content/monitoring'>
                  <Image src={icMonitor} alt='Monitor Icon' />
                  <span className='font-quicksand'>
                    <h1 className='font-bold'>Monitoring</h1>
                    <p className='text-sm text-[#8F8C8C]'>Our internal applications</p>
                  </span>
                </Link>
              </DropDown>
              <Link href='/contact-us' className={clsx("font-bold font-quicksand transition-colors ease-in-out hover:text-blue-dark", { "text-blue-dark": router.pathname.includes("contact") })} onClick={() => setActiveNav("contact")}>
                Contact Us
              </Link>
            </div>
            <div className='flex items-center divide-x divide-[#F2F2F2] gap-3'>
              <GoSearch className='max-h-20px text-blacky text-[14px] font-bold hover:text-black cursor-pointer' onClick={() => setSearchOpen(!searchOpen)} />
              <div className='pl-3 max-h-[20px]'>
                <DropDown
                  drop='right'
                  title={<Image alt={selectedLang} className='rounded-full w-4 h-4 object-cover border drop-shadow-sm' width={16} height={16} src={`/icons/ic-${selectedLang === "en" ? "US" : "ID"}.svg`} />}
                  path='content'
                  icon='mini'
                >
                  <div className={clsx("flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-[#F5F5F5] rounded-md", { "bg-[#F5F5F5]": selectedLang === "en" })} onClick={() => setSelectedLang("id")}>
                    <Image className='rounded-full w-5 h-5 object-cover border drop-shadow-sm' alt='US' width={16} height={16} src='/icons/ic-US.svg' />
                    <p className='font-semibold'>English</p>
                  </div>
                  <div className={clsx("flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-[#F5F5F5] rounded-md", { "bg-[#F5F5F5]": selectedLang === "id" })} onClick={() => setSelectedLang("en")}>
                    <Image className='rounded-full w-5 h-5 object-cover border drop-shadow-sm' alt='ID' width={16} height={16} src='/icons/ic-ID.svg' />
                    <p className='font-semibold'>Bahasa Indonesia</p>
                  </div>
                </DropDown>
              </div>
              <div className='hidden md:flex gap-6 items-center pl-3'>
                <FaInstagram className=' text-16px] font-bold cursor-pointer hover:text-yellow-600' onClick={() => window.open("https://www.instagram.com/handalselaras/?hl=en", "_blank")} />
                {/* <FaFacebook className=' text-16px] font-bold cursor-pointer hover:text-sky-600' /> */}
                <FaYoutube className=' text-16px] font-bold cursor-pointer hover:text-red-600' onClick={() => window.open("https://www.youtube.com/channel/UCqdgCMFewMEKRnJVcTeJi6w", "_blank")} />
              </div>
            </div>
          </div>
          <div className='flex w-full lg:hidden items-center justify-between h-[70px] shadow-lg md:px-10 bg-white fixed top-0 left-0 right-0 z-10 min-w-0'>
            <div className='mx-[24px] max-w-[375px]'>
              <FiMenu className='text-blacky text-[18px] font-[600] flex items-center cursor-pointer hover:text-black' onClick={handleNav} />
              <SideNav nav={nav} onClick={handleNav} path={router.pathname} />
            </div>
            <div className='flex items-center '>
              <Image src={logo} alt='KHS Logo' className='max-w-[76.54px] max-h-[33.93px]' />
              <GoSearch className='text-blacky text-[14px] font-[600] mx-[24px] hover:text-black' onClick={() => setSearchOpen(!searchOpen)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
