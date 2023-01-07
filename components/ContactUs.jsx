import React from "react";
import { MdCall, MdEmail } from "react-icons/md";
import { HiOfficeBuilding } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import Map from "./Map";

const ContactUs = () => {
  return (
    <div className='my-16 flex flex-col space-y-12 px-[120px]'>
      <div className=' flex flex-col space-y-8 lg:grid lg:grid-cols-3  content-center mt-[100px]'>
        <div className='lg:col-span-2 flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3'>
          <h1 className='text-slate-900 font-bold tracking-wide text-3xl md:text-5xl font-quicksand '>Get in Touch With Us</h1>
          <div className='flex flex-col gap-6 pb-5'>
            <div className='flex items-start space-x-1 gap-2'>
              <HiOfficeBuilding className='text-2xl text-slate-600 cursor-pointer mt-1 hover:text-sky-200' />
              <span>
                <p className='text-slate-600'>Pondok Pinang Center C-34 Jalan Ciputat Raya,</p>
                <p className='text-slate-600'>Kota Jakarta Selatan, DKI Jakarta 12310</p>
              </span>
            </div>
            <div className='flex items-center space-x-1 gap-2'>
              <MdEmail className='text-2xl text-slate-600 cursor-pointer  hover:text-sky-200' />
              <p className='text-slate-600'>info@handalselaras.com</p>
            </div>
            <div className='flex items-center space-x-1 gap-2'>
              <MdCall className='text-2xl text-slate-600 cursor-pointer  hover:text-sky-200' />
              <p className='text-slate-600'>0851 9514 5758 (Nurul)</p>
            </div>
            <div className='flex items-center space-x-1 gap-2' onClick={() => window.open("https://wa.me/>085195145758", "_blank")}>
              <FaWhatsapp className='text-2xl text-slate-600 cursor-pointer  hover:text-sky-200' />
              <p className='text-slate-600'>0851 9514 5758 (Nurul)</p>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-7 gap-10'>
        <div className='col-span-3 grid grid-cols-2 rounded-3xl shadow p-5 gap-5'>
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
          <button className='border-2 w-full col-span-2 py-2 rounded-xl bg-[#0093DE] border-[#054D83] text-white font-semibold hover:bg-opacity-80 transition-opacity ease-in-out'>Kirim</button>
        </div>
        <div className='col-span-4 h-full w-full'>
          <Map />
        </div>
      </div>
      {/* <div className='flex flex-col md:grid md:grid-cols-2 px-[5%] '>
        <div>
          <div className='md:mt-12 lg:mt-0 mb-12 lg:mb-0'>
            <div className='block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14'>
              <h2 className='text-3xl font-bold mb-12'>Contact us</h2>
              <form>
                <div className='form-group mb-6'>
                  <input
                    type='text'
                    className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='exampleInput7'
                    placeholder='Name'
                  />
                </div>
                <div className='form-group mb-6'>
                  <input
                    type='email'
                    className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='exampleInput8'
                    placeholder='Email address'
                  />
                </div>
                <div className='form-group mb-6'>
                  <textarea
                    className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='exampleFormControlTextarea13'
                    rows='3'
                    placeholder='Message'
                  ></textarea>
                </div>
                <div className='form-group form-check text-center mb-6'>
                  <input
                    type='checkbox'
                    className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer'
                    id='exampleCheck87'
                    defaultChecked={true}
                  />
                  <label className='form-check-label inline-block text-gray-800' htmlFor='exampleCheck87'>
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type='submit'
                  className='w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div></div>
      </div> */}
    </div>
  );
};

export default ContactUs;
