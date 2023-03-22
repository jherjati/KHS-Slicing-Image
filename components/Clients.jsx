import React from "react";
import Image from "next/image";
import accentGreen from "../public/accents/ac-green-blue.svg";
import accentRedBlue from "../public/accents/ac-red-blue.svg";

const Clients = ({ pageData }) => {
  const { title, description, clients } = pageData;

  return (
    <div className='my-16 flex flex-col space-y-12 relative'>
      <div className=' flex flex-col space-y-8 lg:grid lg:grid-cols-3  content-center px-[20px] md:px-[120px] mt-16'>
        <div className='lg:col-span-2 flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3'>
          <h1 className='text-blacky text-sedangmobile md:text-sedang2 font-quicksand '>
            {title}
          </h1>
          <div
            className='text-grey text-kecilmobile md:text-kecil font-inter  text-justify space-y-2 md:space-y-8'
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </div>
      <Image
        src={accentGreen}
        alt='accent'
        className='select-none absolute -top-[200px] right-0 md:w-[300px] w-[180px]'
      />
      <Image
        src={accentRedBlue}
        alt='accent'
        className='select-none absolute -bottom-[200px] -left-[250px] -rotate-90'
      />
      {/* <div className="flex flex-wrap px-[30px] sm:px-[150px] gap-x-10 md:gap-x-32 gap-y-10"> */}
      <div>
        <div className='grid grid-cols-4 md:grid-cols-5 px-[30px] md:px-[150px] gap-5'>
          {clients.map(({ mediaItemId, mediaItemUrl }) => {
            return (
              <div
                key={mediaItemId}
                className='flex items-center justify-center mx-auto w-full md:w-[100px] h-[60px] md:h-[100px] hover:scale-[1.3] ease-in-out duration-300 delay-100'
              >
                <div className='relative h-14 md:h-16 w-full object-scale-down'>
                  <Image
                    fill
                    src={mediaItemUrl}
                    alt='Image'
                    className='object-contain object-center'
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
