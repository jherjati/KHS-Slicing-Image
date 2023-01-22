import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import accentGreen from "../public/accents/ac-green-blue.svg";
import { FaLink } from "react-icons/fa";

const Detail = ({ blog, blogs = [] }) => {
  const webBlog = {
    image: blog && blog._embedded["wp:featuredmedia"] ? blog._embedded["wp:featuredmedia"][0].source_url : "https://www.handalselaras.com/wp-content/uploads/2022/12/rwrwtw.png",
    categories: blog ? blog._embedded["wp:term"][0].map((category) => category.name.replace(/&amp;/g, "&")).join(", ") : "",
    title: blog ? blog.title.rendered : "",
    author: blog ? blog._embedded["author"].map((author) => author.name).join(", ") : "",
    published: blog ? new Date(blog.date).toLocaleString() : "",
    content: blog ? blog.content.rendered : "",
  };

  return (
    <div className='flex flex-col pt-[70px] relative'>
      <Image src={accentGreen} alt='' className='absolute md:-top-[200px] right-0 -top-[50px] md:left-0 md:rotate-180 '></Image>
      <div className='md:my-16 flex flex-col space-y-12  content-center  md:px-[15%] relative '>
        <div className='flex justify-center md:px-[5%]'>
          <Image src={webBlog.image} className='md:rounded-lg shadow ' alt='' width='1600' height='300' layout='intrinsic' />
        </div>
        <div className='flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3 px-2 md:px-0'>
          <div className='text-sky-600 font-bold tracking-wide text-sm md:text-lg font-quicksand'>{webBlog.categories}</div>
          <article className='text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand ' dangerouslySetInnerHTML={{ __html: webBlog.title }} />
          <div className='flex flex-col md:flex-row space-y-1 md:space-x-2  md:divide-x-2'>
            <div className='flex space-x-2 '>
              <p className='text-slate-500  tracking-wide text-sm md:text-xl font-quicksand'>Penulis:</p>
              <p className='text-slate-500 font-bold tracking-wide text-sm md:text-xl font-quicksand'>{webBlog.author}</p>
            </div>
            <div className='flex space-x-2 md:px-2'>
              <p className='text-slate-500  tracking-wide text-sm md:text-xl font-quicksand'>Publish:</p>
              <p className='text-slate-500 font-bold tracking-wide text-sm md:text-xl font-quicksand'>{webBlog.published}</p>
            </div>
          </div>
          <div className='text-slate-500 prose xl:prose-xl text-sm md:text-base md:max-w-[100ch] text-justify ' dangerouslySetInnerHTML={{ __html: webBlog.content }}></div>
        </div>
        <div className='flex justify-between rounded-xl shadow-md p-5'>
          <div className=' text-center text-slate-900 font-bold tracking-wide text-sm md:text-xl font-quicksand'>Bagikan Artikel</div>
          <div className='flex justify-center gap-6 '>
            <FaLinkedinIn className='text-xl text-slate-900 cursor-pointer hover:text-blue-500' />
            <FaFacebook className='text-xl text-slate-900 cursor-pointer hover:text-blue-800' />
            <FaTwitter className='text-xl text-slate-900 cursor-pointer hover:text-blue-600' />
            <FaLink className='text-xl text-slate-900 cursor-pointer hover:text-red-500' />
          </div>
        </div>
      </div>
      <div className='bg-white mx-5 md:mx-[120px] pb-[60px] md:pb-[90px]'>
        <div className='text-4xl text-slate-900 font-quicksand tracking-wide font-bold py-8'>Artikel Terkait</div>
        <div className='row-span-2 flex flex-col  space-y-3 lg:grid lg:grid-cols-3 gap-2 lg:gap-12'>
          {blogs.map(({ id, slug, image, category, title, text, publish }) => {
            return (
              <div key={id} className=' grid grid-cols-6 gap-4 lg:flex lg:flex-col justify-items-center content-center justify-between  rounded-[1rem] bg-white shadow-2xl px-[4%] py-[5%]'>
                <div className='col-span-2 order-last lg:order-first grid content-center '>
                  <Image layout='responsive' className='object-cover rounded-md' src={image ?? "https://www.handalselaras.com/wp-content/uploads/2022/12/rwrwtw.png"} alt={title} width='900' height='200' />
                </div>

                <div className='col-span-4  flex flex-col justify-center space-y-2'>
                  <p className='text-sky-500 font-bold tracking-wide text-sm md:text-base font-quicksand'>{category}</p>
                  <article className='text-slate-800 font-bold tracking-wide text-sm md:text-xl font-quicksand' dangerouslySetInnerHTML={{ __html: title }} />
                  <article className='text-grey text-[12px] leading-[18px] font-inter md:text-[16px] md:leading-[26px] text-justify line-clamp-2' dangerouslySetInnerHTML={{ __html: text }} />
                  <p className='text-slate-500 tracking-wide text-sm md:text-xl font-quicksand'>Publish: {new Date(publish).toDateString()}</p>
                  <Link href={`/blog/detail/${slug}`} className='flex justify-between'>
                    <p className='text-sky-600 font-bold hover:text-sky-900 tracking-wide text-sm md:text-base font-quicksand'>Read More</p>
                    <p className='hidden lg:flex text-sky-600 hover:text-sky-900 tracking-wide text-sm md:text-xl font-quicksand'> {">"} </p>
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

export default Detail;
