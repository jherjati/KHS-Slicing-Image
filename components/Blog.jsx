import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import acBg from "../public/accents/ac-bg.svg";
import acBgMini from "../public/accents/ac-bg-mini.svg";
import SelectButton from "./SelectButton";
import Pagination from "./Pagination";
import { rootUrl, wpBlog2webBlog } from "../constants";

const Blog = ({ serverBlogs = [], categories = [] }) => {
  const OPTIONS = [
    { id: "all", value: "All" },
    ...categories.map((e) => ({ id: e.catIds, value: e.name })),
  ];

  function handleChange(event) {
    console.log(event.target);
  }

  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [clientBlogs, setClientBlogs] = useState([]);
  useEffect(() => {
    if (page === 1) setClientBlogs([]);
    else {
      (async () => {
        try {
          setIsLoading(true);
          const blogsRes = await (
            await fetch(
              rootUrl +
                "/posts?per_page=12&_embed&_fields=id,title,excerpt,modified,slug,_links,_embedded&page=" +
                page
            )
          ).json();

          const returnedBlogs = blogsRes.map(wpBlog2webBlog);
          setClientBlogs(returnedBlogs);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [page]);

  const renderedBlogs = clientBlogs.length ? clientBlogs : serverBlogs;

  // console.log({ serverBlogs, clientBlogs });
  return (
    <div className='pt-[70px] relative w-full '>
      <Image
        src={acBg}
        alt=''
        className='absolute top-0 w-full md:h-auto hidden md:block'
      />
      <Image
        src={acBgMini}
        alt=''
        className='absolute -top-[70px] w-full md:hidden max-h-[835px] object-cover'
      />
      <div className=' flex flex-col space-y-8 lg:grid lg:grid-cols-2 content-center p-[5%] relative'>
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
      <div className=' md:bg-white rounded-lg m-[5%] relative'>
        {/* category and searching */}
        <div className='hidden min-[1100px]:grid min-[1100px]:grid-cols-6 items-center'>
          {/* <div className='hidden min-[1300px]:flex  scrollbar-hide w-full h-[10px] space-x-[32px] px-[40px] py-[3%] overflow-x-scroll overflow-y-hidden text-[16px] leading-[18.75px] font-roboto text-[#5F5B5A] opacity-[0.6]'> */}
          <div className='col-span-5 flex w-full justify-between p-5'>
            <Link
              href={"/blog"}
              className={
                "flex items-center whitespace-nowrap text-blue-dark font-extrabold"
              }
            >
              All
            </Link>
            {categories.map(({ id, name, catIds }) => (
              <Link
                href={"/content/blog/" + catIds}
                className={"flex items-center whitespace-nowrap "}
                key={id}
              >
                {name}
              </Link>
            ))}
          </div>
          <form className='flex items-center justify-center pr-5'>
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
                className='block p-1 pl-10 w-full text-kecil bg-gray-50 rounded-lg border border-gray-300 font-quicksand'
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
        <div className='rounded-xl border mb-10'>
          <SelectButton
            selected={"all"}
            options={OPTIONS}
            onChange={handleChange}
          />
        </div>
        {/* list blog detail */}
        <div className='row-span-2 flex flex-col min-[1300px]:grid min-[1300px]:grid-cols-3 gap-5 min-[1300px]:gap-12 md:px-[2%] pb-10 md:pb-[90px]'>
          {isLoading
            ? Array.from({ length: 12 }).map((_, idx) => (
                <div
                  key={idx}
                  className='animate-pulse grid grid-cols-8 gap-4 min-[1300px]:flex min-[1300px]:flex-col justify-items-center justify-between  rounded-[1rem] bg-white shadow-md px-[4%] py-[5%]'
                >
                  <div className='col-span-3 order-last min-[1300px]:order-first w-full h-full min-[1300px]:h-48 bg-gray-300 rounded-tr-[1rem] rounded-br-[1rem] min-[1300px]:rounded-br-[0] min-[1300px]:rounded-t-[1rem]'></div>
                  <div className='col-span-5 flex flex-col justify-center space-y-2 w-full'>
                    <p className='text-blue font-[600] text-[12px] leading-[15px] min-[1300px]:text-[16px] min-[1300px]:leading-[26px] font-inter bg-gray-300 h-7 w-full'></p>
                    <article className='text-blacky font-inter font-[600] text-[14px] leading-[17px] min-[1300px]:text-[20px] min-[1300px]:leading-[24px] bg-gray-300 h-14' />
                    <article className='text-grey text-[12px] leading-[18px] font-inter min-[1300px]:text-[16px] min-[1300px]:leading-[26px] text-justify line-clamp-2 bg-gray-300 h-20' />
                    <p className='text-grey text-[12px] leading-[18px] font-inter min-[1300px]:text-[16px] min-[1300px]:leading-[26px] bg-gray-300 h-8 min-[1300px]:rounded-b-[1rem]'></p>
                  </div>
                </div>
              ))
            : renderedBlogs.map(
                ({ id, slug, image, category, title, text, publish }) => {
                  return (
                    <div
                      key={id}
                      className=' grid grid-cols-8 gap-4 min-[1300px]:flex min-[1300px]:flex-col justify-items-center justify-between  rounded-[1rem] bg-white shadow-md px-[4%] py-[5%]'
                    >
                      <div className='col-span-3 order-last min-[1300px]:order-first grid content-center  '>
                        <Image
                          layout=''
                          src={
                            image ??
                            "https://www.handalselaras.com/wp-content/uploads/2022/12/rwrwtw.png"
                          }
                          className='rounded-md object-cover h-20 md:w-full w-20 md:h-[200px]'
                          alt={title}
                          width='900'
                          height='800'
                        />
                      </div>
                      <div className='col-span-5 flex flex-col justify-center space-y-2'>
                        <p className='text-blue font-[600] text-[12px] leading-[15px] md:text-[16px] md:leading-[26px] font-inter'>
                          {category}
                        </p>
                        <article
                          className='text-blacky font-inter font-[600] text-[14px] leading-[17px] md:text-[20px] md:leading-[24px] '
                          dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <article
                          className='text-grey text-[12px] leading-[18px] font-inter md:text-[16px] md:leading-[26px] text-justify line-clamp-2'
                          dangerouslySetInnerHTML={{ __html: text }}
                        />
                        <p className='text-grey text-[12px] leading-[18px] font-inter md:text-[16px] md:leading-[26px]'>
                          Publish: {new Date(publish).toDateString()}
                        </p>
                        <Link
                          href={`/content/blog/detail/${slug}`}
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
                }
              )}
        </div>

        <Pagination page={page} maxPage={10} setPage={setPage} />
      </div>
    </div>
  );
};

export default Blog;
