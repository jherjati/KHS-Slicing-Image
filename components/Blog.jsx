import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ blogs, categories }) => {
  return (
    <div className='mt-16 bg-blog'>
      <div className=' flex flex-col  space-y-8 lg:grid lg:grid-cols-2 content-center p-[5%] '>
        <div className='flex justify-center flex-col space-y-4 lg:space-y-8 col-span-1 mx-3'>
          <h1 className='text-white text-[20px] leading-[28px] font-inter font-[600] '>
            Blog
          </h1>
          <h1 className='text-white text-sedangmobile md:text-sedang2 font-quicksand '>
            UAV Lidar untuk Perencanaan Perumahan
          </h1>
          <p className='text-[#F5F5F5] text-kecilmobile md:text-kecil font-quicksand '>
            Dalam perencanaan perumahan salah satu elemen kunci adalah data
            lahan dari lahan yang akan dibangun. Data lahan yang diperlukan
            meliputi batas lahan, data topografi dan data tematik lainnya.
            Berikut adalah manfaat UAV Lidar untuk perencanaan perumahan
          </p>
          <div className='grid md:flex'>
            <button className=' text-blue  bg-white rounded-md text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] font-[600] font-inter py-3 px-5'>
              Read More
            </button>
          </div>
        </div>
        <div className='flex justify-center lg:justify-end items-center '>
          <Image
            src='/blogimage.png'
            className='rounded-lg'
            alt=''
            width='500'
            height='300'
            layout='intrinsic'
          />
        </div>
      </div>
      <div className='bg-white rounded-lg m-[5%]'>
        {/* category and searching */}
        <div className='hidden min-[1300px]:flex flex-nowrap scrollbar-hide w-full h-[10px] space-x-[32px] px-[40px] py-[3%] overflow-x-scroll overflow-y-hidden text-[16px] leading-[18.75px] font-roboto text-[#5F5B5A] opacity-[0.6]'>
          <div className='flex items-center whitespace-nowrap text-blue-dark font-bold'>
            All
          </div>
          {categories.map(({ id, name, catIds }) => (
            <Link
              href={"/blog/" + catIds}
              className='flex items-center whitespace-nowrap '
              key={id}
            >
              {name}
            </Link>
          ))}
          <form className='flex items-center justify-center pl-0 min-[1400px]:pl-[96px]'>
            <label
              htmlFor='default-search'
              className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'
            >
              Search
            </label>
            <div className='relative'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  ></path>
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                className='block p-1 pl-10 w-[309px] text-kecil bg-gray-50 rounded-lg border border-gray-300 font-quicksand'
                placeholder='Cari Artikel'
                required
              />
              {/* <button
                  type="submit"
                  className="text-grey font-quicksand absolute right-2.5 bottom-2.5 bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button> */}
            </div>
          </form>
        </div>
        {/* list blog detail */}
        <div className='row-span-2 flex flex-col  min-[1300px]:grid min-[1300px]:grid-cols-3 gap-2 min-[1300px]:gap-12 px-[2%]'>
          {blogs.map(({ id, image, category, title, text, publish }) => {
            return (
              <div
                key={id}
                className=' grid grid-cols-8 gap-4 min-[1300px]:flex min-[1300px]:flex-col justify-items-center  rounded-[1rem] bg-white shadow-2xl px-[4%] py-[5%]'
              >
                <div className='col-span-3 order-last min-[1300px]:order-first grid content-center  '>
                  <Image
                    layout=''
                    src={
                      image ??
                      "https://www.handalselaras.com/wp-content/uploads/2022/12/rwrwtw.png"
                    }
                    alt={title}
                    width='900'
                    height='900'
                  />
                </div>

                <div className='col-span-5  flex flex-col justify-center space-y-2'>
                  <p className='text-blue font-[600] text-[12px] leading-[15px] md:text-[16px] md:leading-[26px] font-inter'>
                    {category}
                  </p>
                  <article
                    className='text-blacky font-inter font-[600] text-[14px] leading-[17px] md:text-[20px] md:leading-[24px]'
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <article
                    className='text-grey text-[12px] leading-[18px] font-inter md:text-[16px] md:leading-[26px]'
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                  <p className='text-grey text-[12px] leading-[18px] font-inter md:text-[16px] md:leading-[26px]'>
                    {new Date(publish).toLocaleString()}
                  </p>
                  <Link
                    href={`/blog/detail?id=${id}`}
                    className='hidden min-[1300px]:flex justify-between'
                  >
                    <p className='text-sky-600 font-bold hover:text-sky-900 tracking-wide text-sm md:text-base font-quicksand'>
                      Read More
                    </p>
                    <p className='hidden min-[1300px]:flex text-sky-600 hover:text-sky-900 tracking-wide text-sm md:text-xl font-quicksand'>
                      {" "}
                      {">"}{" "}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
