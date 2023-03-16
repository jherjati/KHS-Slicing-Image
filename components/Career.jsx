import React, { useRef, useState } from "react";
import Image from "next/image";
import { careeractivity } from "./Data";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import acLinear from "../public/accents/ac-linear.svg";
import acRedBlue from "../public/accents/ac-red-blue.svg";
import acRedBlueHalf from "../public/accents/ac-red-blue-half.svg";
import { careers } from "./Data";
import { BsLightbulbFill, BsLightningChargeFill, BsGearFill } from "react-icons/bs";
import SelectButton from "./SelectButton";

const Career = () => {
  const [selected, setSelected] = useState(null);

  const searchRef = useRef();
  const OPTIONS = [
    { id: null, value: "--Pilih Divisi--" },
    ...careers.map((e) => {
      return { id: e.id, value: e.text };
    }),
  ];

  function handleSelect(e) {
    setSelected(e.target.name);
  }

  return (
    <div className='mt-[70px] relative'>
      <Image src={acLinear} alt='Accent' className='select-none absolute top-0 left-0' />
      <div className='flex flex-col lg:grid lg:grid-cols-2 py-[43px] md:py-[60px] px-[20px] md:px-[120px] relative border-b '>
        {/* halfimage */}
        <div className='order-last lg:order-first grid grid-cols-2 gap-y-4 gap-x-4 items-center justify-items-center pr-[10%] pl-[10%] lg:pr-[20%] lg:pl-0'>
          <Image className='col-span-2 rounded-lg lg:rounded-[20px]' width='800' height='600' src='/careerimage1.png' alt='' priority='false' />
          <Image className='col-span-1 rounded-lg lg:rounded-[20px]' width='600' height='300' src='/careerimage2.png' alt='' />
          <Image className='col-span-1 rounded-lg lg:rounded-[20px]' width='600' height='300' src='/careerimage3.png' alt='' />
        </div>
        <div className='flex flex-col space-y-4 justify-center'>
          <h2 className='text-blue text-[20px] leading-[28px] font-[600] font-inter '>Career</h2>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand'>Life at KHS</h1>
          <p className='text-grey text-kecilmobile md:text-kecil font-inter text-justify '>
            At Kreasi Handal Selaras, we are working hard to reach our goals and enjoying every challenge and having fun while doing it. We hire talents who have a passion for creating new solutions and next-gen technology to help
            businesses and people.
          </p>
          {/* <div className='grid md:flex pb-8'>
            <button className=' text-white font-bold bg-sky-700 rounded-lg tracking-wide text-sm md:text-base font-quicksand py-3 px-5 hover:bg-opacity-80 transition-colors ease-in-out'>See Opportunity</button>
          </div> */}
        </div>
      </div>
      {/* page 2 */}
      <div className='flex flex-col space-y-12 md:space-y-20 px-[20px] md:px-[120px] text-black relative border-b pb-16'>
        <Image src={acRedBlue} alt='Accent' className='hidden md:block select-none absolute top-0 right-0' />
        <Image src={acRedBlueHalf} alt='Accent' className='md:hidden select-none absolute top-[100px] right-0' />
        {/* subpage 1 */}
        <div className='flex  md:w-1/2 flex-col space-y-2 md:space-y-6 col-span-1 mx-3 relative'>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand '>Our Value</h1>
          <p className='text-grey text-kecilmobile md:text-kecil font-inter '>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
        {/* subpage 2 */}
        <div className='flex flex-col lg:grid lg:grid-cols-3 gap-8 relative '>
          <div className=' bg-white  flex lg:grid  rounded-[1rem] shadow-md p-[4%]'>
            <BsLightningChargeFill className='text-[40px] md:text-[50px] font-bold text-sky-700 p-2 ' />
            <div>
              <div className='text-2xl font-semibold text-slate-900'>Fast and Accurate</div>

              <div className='text-grey text-kecilmobile md:text-kecil font-inter'>
                <ul className='list-disc px-[5%]'>
                  <li>Moving in high speed while keeping excellence.</li>
                  <li>Handling issues effectively and efficiently.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=' bg-white  flex lg:grid  rounded-[1rem] shadow-md p-[4%]'>
            <BsLightbulbFill className='text-[40px] md:text-[50px] font-bold text-sky-700 p-2 ' />
            <div>
              <div className='text-2xl font-semibold text-slate-900'>Inspire</div>

              <div className='text-grey text-kecilmobile md:text-kecil font-inter'>
                <ul className='list-disc px-[5%]'>
                  <li>Moving in high speed while keeping excellence.</li>
                  <li>Handling issues effectively and efficiently.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className=' bg-white  flex lg:grid  rounded-[1rem] shadow-md p-[4%]'>
            <BsGearFill className='text-[40px] md:text-[50px] font-bold text-sky-700 p-2 ' />
            <div>
              <div className='text-2xl font-semibold text-slate-900'>Responsive</div>

              <div className='text-grey text-kecilmobile md:text-kecil font-inter'>
                <ul className='list-disc px-[5%]'>
                  <li>Moving in high speed while keeping excellence.</li>
                  <li>Handling issues effectively and efficiently.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* subpage 3 */}
        <div className='flex flex-col lg:grid lg:grid-cols-2 gap-3'>
          <div className='relative w-[100%] h-[100%]'>
            <Image className=' ' width='800' height='300' src='/careerimageactivity1.png' alt='' layout='intrinsic' />
          </div>
          <div className='hidden lg:flex flex-col gap-3'>
            <div className='relative w-[100%] h-[100%]'>
              <Image className=' ' width='800' height='300' src='/careerimageactivity2.png' alt='' layout='intrinsic' />
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='relative w-[100%] h-[100%]'>
                <Image className=' ' width='800' height='300' src='/careerimageactivity3.png' alt='' layout='intrinsic' />
              </div>
              <div className='relative w-[100%] h-[100%]'>
                <Image className=' ' width='800' height='300' src='/careerimageactivity4.png' alt='' layout='intrinsic' />
                {/* <p className='absolute w-[90%] pt-3 bottom-0   text-grey text-kecilmobile md:text-kecil font-inter bg-white  '>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do</p> */}
              </div>
            </div>
          </div>
          <div className='pt-8  flex flex-col lg:hidden space-y-8 '>
            {careeractivity.map(({ activity, text, key }) => {
              return (
                <div className='grid content-center grid-cols-5 gap-4' key={key}>
                  <Image className='col-span-2 md:w-full w-[100px]' width='800' height='900' src={activity} alt='' layout='responsive' />
                  <div className='col-span-3  flex justify-center items-center text-grey text-kecilmobile md:text-kecil font-inter bg-white text-xs '>
                    <p className=''>{text}</p>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-12 md:space-y-20 px-[20px] md:px-[120px] text-black relative pt-16'>
        <div className='flex flex-col space-y-4 '>
          <div className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand'>Join with Us</div>
          <div className='flex flex-col lg:grid lg:grid-cols-5 gap-8'>
            <form className='col-span-4'>
              <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>
                Search
              </label>
              <div className='h-14 flex items-center justify-between gap-5 border rounded-lg bg-gray-50  border-gray-300 pr-5 cursor-text' onClick={() => searchRef?.current?.focus()}>
                <input type='text' ref={searchRef} className='w-full h-full px-5 text-kecil font-quicksand  rounded-lg focus:outline-none bg-gray-50 ' id='default-search' placeholder='Cari Posisi yang tersedia' required />
                <FiSearch className='text-blue-dark text-lg' />
              </div>
            </form>
            <div className='rounded-xl border mb-10'>
              <SelectButton selected={selected} options={OPTIONS} onChange={handleSelect} height='large' />
            </div>
            {/* <div className='col-span-1 px-[5%] lg:px-[20%] w-full text-xl text-slate-900 bg-gray-50 rounded-lg border border-gray-300  '>
              <Dropdown className='relative' title='-- Pilih Divisi --' texts={["Field Engineer", "Management Trainee", "Civil Engineer"]} />
            </div> */}
          </div>
          <div className='flex flex-col  lg:grid lg:grid-cols-3 gap-5 lg:gap-12  pb-20'>
            {careers.map(({ id, image, title, text, text2 }) => {
              return (
                <div key={id} className=' grid grid-cols-6 gap-4 lg:flex lg:flex-col justify-items-center content-center  rounded-[1rem] bg-white shadow-md px-[5%] py-[5%]'>
                  <div className='col-span-2  grid lg:px-10 content-center '>
                    <Image layout='' src={image} alt={title} width='500' height='800' />
                  </div>

                  <div className='col-span-4  flex flex-col justify-center space-y-[8px]'>
                    <p className='text-blacky font-inter text-[16px] leading-[19px] md:text-[20px] md:leading-[24px] font-[600]'>{title}</p>
                    <p className='text-grey text-kecilmobile md:text-kecil'>{text}</p>
                    <p className='text-grey text-kecilmobile md:text-kecil'>{text2}</p>
                    <Link href={`/career`} className='flex justify-between'>
                      <p className='w-full text-[16px] leading-[24px] font-inter lg:p-5 text-center font-bold text-blue  bg-white rounded-lg  border-[2px] border-blue'>View Details</p>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
