import React from "react";
import { licences } from "./Data";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import accentBlueRed from "../public/accents/ac-blue-red.svg";
import accentRedBlue from "../public/accents/ac-red-blue.svg";
import accentRedBlueHalf from "../public/accents/ac-red-blue-half.svg";
import accentGreen from "../public/accents/ac-home-green.svg";
import aboutUs1 from "../public/aboutusimage1.png";
import aboutUs2 from "../public/aboutusimage2.png";

const AboutUs = () => {
  return (
    <div className='flex flex-col pt-[70px] w-full '>
      <div className='w-full relative pb-[60px] md:pb-[90px] md:border-b'>
        <Image src={accentBlueRed} alt='Accent' className='md:block hidden select-none absolute' />
        <div className='flex flex-col md:gap-2 md:grid md:grid-cols-5 w-full relative'>
          <div className='hidden md:col-span-1 md:grid content-end'>
            <Image src={aboutUs1} alt='About Us' className='select-none md:h-[408px] md:w-[230px]' />
          </div>
          <div className='w-full order-first md:order-none col-span-3 flex flex-col space-y-4 justify-center p-5 pb-10 md:pb-5 pt-10 md:pt-[90px] '>
            <div className='flex flex-col space-y-3'>
              <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-bold font-quicksand'>About Us</h1>
              <p className='text-grey text-kecilmobile md:text-kecil font-inter text-justify border-b pb-5'>
                HANDAL SELARAS GROUP is a group of companies with integrated business coverage. Engaged in the field of surveying and mapping, spatial planning, public policy development, architecture, construction management, design, and
                creative visual design, we provide services from upstream to downstream.
              </p>
            </div>
            <div className='flex flex-col space-y-3'>
              <h1 className='text-blue text-[20px] leading-[28px] font-bold font-quicksand'>Vision</h1>
              <p className='text-grey text-kecilmobile md:text-kecil font-inter text-justify'>
                Becoming a thriving engineering and construction consulting company with good project management and actively contributing to the development of the Republic of Indonesia.
              </p>
            </div>
            <div className='flex flex-col space-y-3'>
              <h1 className='text-blue text-[20px] leading-[28px] font-bold font-quicksand'>Mission</h1>
              <ul className='list-decimal text-grey text-kecilmobile md:text-kecil font-inter pl-5 md:px-5 text-justify'>
                <li>Providing excellent service to clients and partners.</li>
                <li>Providing optimal service through affordable prices, good quality, and time discipline.</li>
                <li>Encourage the use of appropriate technology and the application of innovation without limits.</li>
                <li>Encouraging research and training as a means of increasing human resource capacity.</li>
                <li>Establish good relations with the central and regional governments.</li>
                <li>Actively following the development journey in Indonesia from the center to the regions.</li>
              </ul>
            </div>
          </div>
          <div className=' justify-center md:justify-end grid grid-cols-2 md:col-span-1 '>
            <div className='block md:hidden '>
              <Image src={aboutUs1} alt='About Us' className='select-none h-[285px] w-full object-cover ' />
            </div>
            <div className='md:col-span-2 md:flex justify-end'>
              <Image src={aboutUs2} alt='About Us' className='select-none h-[285px] md w-full md:h-[408px] md:w-[230px] object-cover ' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-5 px-5 md:px-[120px] md:py-[90px]'>
        <div className='space-y-[16px] max-w-[600px]'>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2  font-bold font-quicksand'>Occupational Safety and Health Management Policy</h1>
          <ul className='flex flex-col space-y-1 list-decimal text-grey text-kecilmobile md:text-kecil font-inter pl-5 md:px-5 text-justify'>
            <li>Provide quality products and services in order to meet employer requirements and applicable regulations.</li>
            <li>Implement and maintain a management system according to ISO 9001, ISO 14001, and ISO 45001 standards to achieve employer satisfaction by continuously improving</li>
            <li>
              Improve communication and participation of all interested parties, especially employees in efforts to prevent work accidents and health problems by maintaining and maintaining good, safe and comfortable working conditions and
              environments.
            </li>
          </ul>
        </div>
        <div className='flex justify-end p-5 md:p-10 pb-[60px] md:pb-10'>
          <Image width='310' height='310' src='/aboutusimage3.png' alt='' className='object-contain rounded-lg shadow-lg p-5 md:mr-10' />
        </div>
      </div>
      <div className='flex flex-col space-y-4 px-[20px] md:px-[120px] bg-gradient-to-b from-[#E6EFF6] md:pt-[90px] pt-[60px]'>
        <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-bold font-quicksand'>Who We Are</h1>
        <p className=' text-grey text-kecilmobile md:text-kecil font-inter text-justify'>
          Engaged in the field of surveying and mapping, spatial planning, public policy development, architecture, construction management, design, and creative visual design, we provide services from upstream to downstream.
        </p>
      </div>
      {/* com */}
      <div className='flex flex-col relative border-b md:mx-0 mx-5'>
        <Image src={accentGreen} alt='Accent' className='hidden md:block select-none absolute -bottom-[50px] left-0' />
        <div className='w-full space-y-[32px] py-[30px] md:py-[60px] px-5'>
          <div className='flex w-full items-center justify-center gap-2'>
            <h1 className='text-blacky font-[700] text-[16px] leading-[20px] md:text-[20px] md:leading-[25px] font-quicksand'>Commisioner</h1>
            <div className='border-b w-full md:w-[748px] mt-1'></div>
          </div>
          <div className='flex flex-col justify-center space-y-2 md:space-y-0 gap-2 relative'>
            <div className='flex flex-col items-center space-y-2'>
              <Image width='150' height='100' src='/commisionerImage.png' layout='responsive' alt='' className='rounded-full' />
              <span className='space-y-1'>
                <h1 className='text-blacky text-[16px] leading-[19px] font-inter font-[600]'>Ir. H. Ahmad Syiham</h1>
                <h2 className='text-blue text-[14px] leading-[18px] font-[700] font-quicksand'>General Commissioner</h2>
              </span>
              <p className='text-[14px] leading-[20px] font-[400] font-inter text-grey'>Architecture, University of Indonesia</p>
            </div>
            {/* <div className='flex items-center justify-center gap-5'>
              <FaFacebook className=' text-[16px] text-gray-500 cursor-pointer hover:text-sky-600' />
              <FaTwitter className=' text-[16px] text-gray-500 cursor-pointer hover:text-sky-600' />
              <FaInstagram className=' text-[16px] text-gray-500 cursor-pointer hover:text-yellow-600' />
              <FaYoutube className=' text-[16px] text-gray-500 cursor-pointer hover:text-red-600' />
            </div> */}
          </div>
        </div>
        <div className='w-full space-y-[32px] pb-[30px] md:pb-[60px] px-5'>
          <div className='f lex w-full items-center justify-center gap-2'>
            <h1 className='text-blacky font-[700] w-[140px] md:w-max text-[16px] leading-[20px] md:text-[20px] md:leading-[25px] font-quicksand'>Board of Director</h1>
            <div className='border-b  w-[calc(100%_-_140px)] md:w-[748px] mt-1'></div>
          </div>
          <div className='flex md:flex-row flex-col gap-10 md:gap-20 items-center justify-center'>
            <div className='flex flex-col  justify-center space-y-2 md:space-y-0 gap-2 relative'>
              <div className='flex flex-col items-center space-y-2'>
                <Image width='150' height='100' src='/presidenDirectorImage.png' layout='responsive' alt='' className='rounded-full' />
                <span className='space-y-1 text-center'>
                  <h1 className='text-blacky text-[16px] leading-[19px] font-inter font-[600]'>Nurohim</h1>
                  <h2 className='text-blue text-[14px] leading-[18px] font-[700] font-quicksand'>President Director</h2>
                </span>
                <p className='text-[14px] leading-[20px] font-[400] font-inter text-grey'>Department Name, University Name</p>
              </div>
              {/* <div className='flex items-center justify-center gap-5'>
                <FaFacebook className=' text-[16px] text-gray-500 cursor-pointer hover:text-sky-600' />
                <FaTwitter className=' text-[16px] text-gray-500 cursor-pointer hover:text-sky-600' />
                <FaInstagram className=' text-[16px] text-gray-500 cursor-pointer hover:text-yellow-600' />
                <FaYoutube className=' text-[16px] text-gray-500 cursor-pointer hover:text-red-600' />
              </div> */}
            </div>
            <div className='flex flex-col  justify-center space-y-2 md:space-y-0 gap-2 relative'>
              <div className='flex flex-col items-center space-y-2'>
                <Image width='150' height='100' src='/directorImage.png' layout='responsive' alt='' className='rounded-full' />
                <span className='space-y-1 text-center'>
                  <h1 className='text-blacky text-[16px] leading-[19px] font-inter font-[600]'>Arszandi Pratama, M.Sc</h1>
                  <h2 className='text-blue text-[14px] leading-[18px] font-[700] font-quicksand'>Director of Kreasi Handal Selaras, PT</h2>
                </span>
                <p className='text-[14px] leading-[20px] font-[400] font-inter text-grey'>Real Estate, University of Greenwich </p>
              </div>
              {/* <div className='flex items-center justify-center gap-5'>
                <FaFacebook className=' text-[16px] text-gray-500 cursor-pointer hover:text-sky-600' />
                <FaTwitter className=' text-[16px] text-gray-500 cursor-pointer hover:text-sky-600' />
                <FaInstagram className=' text-[16px] text-gray-500 cursor-pointer hover:text-yellow-600' />
                <FaYoutube className=' text-[16px] text-gray-500 cursor-pointer hover:text-red-600' />
              </div> */}
            </div>
          </div>
        </div>
        <div className='w-full space-y-[32px] pb-[40px] md:pb-[60px] px-5'>
          <div className='flex w-full items-center justify-center gap-2'>
            <h1 className='text-blacky font-[700] w-[140px] md:w-max text-[16px] leading-[20px] md:text-[20px] md:leading-[25px] font-quicksand'>Head of Division</h1>
            <div className='border-b  w-[calc(100%_-_140px)] md:w-[`748px] mt-1'></div>
          </div>
          <div className='flex md:flex-row flex-col gap-10 md:gap-20 items-center justify-center'>
            <div className='flex flex-col justify-center space-y-2 md:space-y-0 gap-2 relative'>
              <div className='flex flex-col items-center space-y-2'>
                <Image width='150' height='100' src='/headOfSurvey.png' layout='responsive' alt='' className='rounded-full' />
                <span className='space-y-1 text-center'>
                  <h1 className='text-blacky text-[16px] leading-[19px] font-inter font-[600]'>Rabby Awalludin, S.T</h1>
                  <h2 className='text-blue text-[14px] leading-[18px] font-[700] font-quicksand'>Head of Survey & Mapping</h2>
                </span>
                <p className='text-[14px] leading-[20px] font-[400] font-inter text-grey'>Geodetic Engineering, ITB</p>
              </div>
              {/* <div className='flex items-center justify-center gap-5'>
                <FaFacebook className=' text-[16px] text-gray-500 cursor-pointer hover:text-sky-600' />
                <FaTwitter className=' text-[16px] text-gray-500 cursor-pointer hover:text-sky-600' />
                <FaInstagram className=' text-[16px] text-gray-500 cursor-pointer hover:text-yellow-600' />
                <FaYoutube className=' text-[16px] text-gray-500 cursor-pointer hover:text-red-600' />
              </div> */}
            </div>
            <div className='flex flex-col justify-center space-y-2 md:space-y-0 gap-2 relative'>
              <div className='flex flex-col items-center space-y-2'>
                <Image width='150' height='100' src='/headOfArchitecture.png' layout='responsive' alt='' className='rounded-full' />
                <span className='space-y-1 text-center'>
                  <h1 className='text-blacky text-[16px] leading-[19px] font-inter font-[600]'>Elssany Noor D, S.T</h1>
                  <h2 className='text-blue text-[14px] leading-[18px] font-[700] font-quicksand'>Head of Architecture &</h2>
                  <h2 className='text-blue text-[14px] leading-[18px] font-[700] font-quicksand'>Construction Management</h2>
                </span>
                <p className='text-[14px] leading-[20px] font-[400] font-inter text-grey'>Architecture, Itenas</p>
              </div>
              {/* <div className='flex items-center justify-center gap-5'>
                <FaFacebook className=' text-[16px] text-gray-500 cursor-pointer hover:text-sky-600' />
                <FaTwitter className=' text-[16px] text-gray-500 cursor-pointer hover:text-sky-600' />
                <FaInstagram className=' text-[16px] text-gray-500 cursor-pointer hover:text-yellow-600' />
                <FaYoutube className=' text-[16px] text-gray-500 cursor-pointer hover:text-red-600' />
              </div> */}
            </div>
            <div className='flex flex-col justify-center space-y-2 md:space-y-0 gap-2 relative'>
              <div className='flex flex-col items-center space-y-2'>
                <Image width='150' height='100' src='/headOfMarketting.png' layout='responsive' alt='' className='rounded-full' />
                <span className='space-y-1 text-center'>
                  <h1 className='text-blacky text-[16px] leading-[19px] font-inter font-[600]'>Nurul Megawati Putri, S.T</h1>
                  <h2 className='text-blue text-[14px] leading-[18px] font-[700] font-quicksand'>Head of Marketing, Tender</h2>
                  <h2 className='text-blue text-[14px] leading-[18px] font-[700] font-quicksand'>and Collection</h2>
                </span>
              </div>
              <p className='text-[14px] text-center leading-[20px] font-[400] font-inter text-grey'>Geodetic Engineering, Undip</p>
              {/* <div className='flex items-center justify-center gap-5'>
                <FaFacebook className=' text-[16px] text-gray-500 cursor-pointer hover:text-sky-600' />
                <FaTwitter className=' text-[16px] text-gray-500 cursor-pointer hover:text-sky-600' />
                <FaInstagram className=' text-[16px] text-gray-500 cursor-pointer hover:text-yellow-600' />
                <FaYoutube className=' text-[16px] text-gray-500 cursor-pointer hover:text-red-600' />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className='md:px-[120px] my-[60px] md:my-[90px] px-5 space-y-[16px] relative'>
        <Image src={accentRedBlueHalf} alt='Accent' className='select-none absolute block right-0  top-[20%] lg:hidden md:top-10 md:right-0 ' />
        <Image src={accentRedBlue} alt='Accent' className='select-none absolute md:block hidden md:top-10 md:right-0 ' />
        <div className='md:grid md:grid-cols-2 gap-5 items-center md:pb-[60px] '>
          <div className='space-y-[16px]'>
            <h1 className='text-blacky font-[700]  tracking-wide text-sedangmobile md:text-sedang font-quicksand'>Imagine, Believe, Achive!</h1>
            <p className='text-grey text-kecilmobile md:text-kecil font-quicksand text-justify '>
              Engaged in the field of surveying and mapping, spatial planning, public policy development, architecture, construction management, design, and creative visual design, we provide services from upstream to downstream.
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:grid lg:grid-cols-4  gap-8 relative'>
          <div className=' bg-white grid gap-2  content-center text-left  rounded-[1rem] shadow-md p-5 md:p-6'>
            <div className='text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue '>1992</div>
            <div className='text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]'>Year</div>
            <div className='text-xl text-slate-600'>We started our business</div>
          </div>
          <div className=' bg-white grid gap-2  content-center text-left  rounded-[1rem] shadow-md p-5 md:p-6'>
            <div className='text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue '>523</div>
            <div className='text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]'>Projects</div>
            <div className='text-xl text-slate-600'>Have been done</div>
          </div>
          <div className=' bg-white grid gap-2  content-center text-left  rounded-[1rem] shadow-md p-5 md:p-6'>
            <div className='text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue '>123</div>
            <div className='text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]'>Employees</div>
            <div className='text-xl text-slate-600'>Working together</div>
          </div>
          <div className=' bg-white grid gap-2  content-center text-left  rounded-[1rem] shadow-md p-5 md:p-6'>
            <div className='text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue '>10</div>
            <div className='text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]'>Countries</div>
            <div className='text-xl text-slate-600'>Connected with us</div>
          </div>
        </div>
      </div>
      <div className='md:px-[120px] mb-[60px] md:mb-[90px] px-5 md:space-y-[90px] relative'>
        <div className='flex  md:w-1/2 flex-col space-y-2 md:space-y-6 col-span-1  relative'>
          <h1 className='text-blacky font-bold text-sedangmobile md:text-sedang2  font-quicksand'>Licences</h1>
          <p className='text-grey text-kecilmobile md:text-kecil font-inter text-justify'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et amet consectetur adipiscing elit</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 content-center gap-8 relative pt-10 md:pt-0'>
          {licences.map(({ licence, lebar, panjang, iso, desc }) => {
            return (
              <div key={licence} className=' flex md:flex-col items-center space-x-[16px] md:space-x-0'>
                <div className='flex items-center justify-center w-[60px] md:w-[200px] h-[80px] md:h-[200px]'>
                  <Image className='flex items-center mb-3' width={lebar} height={panjang} src={licence} alt='' />
                </div>

                <div className='flex-col items-center text-left  md:text-center space-y-[8px] '>
                  <h1 className=' text-[16px] md:text-[18px] md:text-center font-[600] text-blacky font-inter'>{iso}</h1>
                  <p className='text-[12px] md:text-[14px] text-grey font-inter'>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
