import React from "react";
import Image from "next/image";
import { clients, clients2 } from "./Data";

const Clients = () => {
  return (
    <div className='my-16 flex flex-col space-y-12 relative'>
      <Image src='/accents/ac-green-blue.svg' alt='accent' className='select-none absolute -top-[200px] right-0' />
      <Image src='/accents/ac-red-blue.svg' alt='accent' className='select-none absolute -bottom-[200px] -left-[250px] -rotate-90' />
      <div className=' flex flex-col space-y-8 lg:grid lg:grid-cols-3  content-center px-[20px] md:px-[120px] mt-16'>
        <div className='lg:col-span-2 flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3'>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand '>Clients</h1>
          <p className='text-grey text-kecilmobile md:text-kecil font-inter '>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
      </div>
      {/* <div className="flex flex-wrap px-[30px] sm:px-[150px] gap-x-10 md:gap-x-32 gap-y-10"> */}
      <div className='grid grid-cols-6 px-[30px] sm:px-[150px] gap-5'>
        {clients.map(({ client, lebar, panjang }) => {
          return (
            <div key={client} className='flex items-center justify-center mx-auto w-[100px] h-[100px] grayscale hover:grayscale-0 hover:scale-[1.3] ease-in-out duration-300 delay-100'>
              <Image width={lebar} height={panjang} src={client} alt='' />
            </div>
          );
        })}
      </div>
      <div className='grid grid-cols-7 px-[30px] sm:px-[150px] gap-5'>
        {clients2.map(({ client, lebar, panjang }) => {
          return (
            <div key={client} className='flex items-center justify-center mx-auto w-[100px] h-[100px] grayscale hover:grayscale-0 hover:scale-[1.3] ease-in-out duration-300 delay-100'>
              <Image width={lebar} height={panjang} src={client} alt='' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
