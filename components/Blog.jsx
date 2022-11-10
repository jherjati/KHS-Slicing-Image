import React from "react";
import Image from "next/image";

import { blogs } from "./Data";

const Blog = () => {
  return (
    <div className="mt-16 bg-blog">
      <div className=" flex flex-col  space-y-8 lg:grid lg:grid-cols-2 content-center p-[5%] ">
        <div className="flex justify-center flex-col space-y-4 lg:space-y-8 col-span-1 mx-3">
          <h1 className="text-white font-bold tracking-wide text-xl md:text-2xl font-quicksand  ">
            Blog
          </h1>
          <h1 className="text-white font-bold tracking-wide text-2xl md:text-5xl font-quicksand ">
            UAV Lidar untuk Perencanaan Perumahan
          </h1>
          <p className="text-white tracking-wide text-sm md:text-xl font-quicksand ">
            Dalam perencanaan perumahan salah satu elemen kunci adalah data
            lahan dari lahan yang akan dibangun. Data lahan yang diperlukan
            meliputi batas lahan, data topografi dan data tematik lainnya.
            Berikut adalah manfaat UAV Lidar untuk perencanaan perumahan
          </p>
          <div className="grid md:flex">
            <button className=" text-sky-600 font-bold bg-white rounded-md tracking-wide text-sm md:text-xl font-quicksand py-3 px-5">
              Read More
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end items-center ">
          <Image
            src="/blogimage.png"
            className="rounded-lg"
            alt=""
            width="500"
            height="300"
            layout="intrinsic"
          />
        </div>
      </div>
      <div className="bg-white rounded-lg m-[5%]">
        {/* category and searching */}
        <div className="hidden lg:flex space-x-4 px-[2%] py-[3%] text-slate-500 tracking-wide  lg:text-xl font-quicksand">
          <div>All</div>
          <div>Perencanaan Wilayah Kota</div>
          <div>Arsitektur</div>
          <div>Management Konstruksi</div>
          <div>Survei dan Pemetaan</div>
          <div>UAV Lidar</div>
          <div>Cari Artikel</div>
        </div>
        {/* list blog detail */}
        <div className="row-span-2 flex flex-col  space-y-3 lg:grid lg:grid-cols-3 gap-2 lg:gap-12 px-[2%]">
          {blogs.map(({ image, category, title, text, publish }) => {
            return (
              <div
                key={title}
                className=" grid grid-cols-6 gap-4 lg:flex lg:flex-col justify-items-center content-center  rounded-[1rem] bg-white shadow-2xl px-[4%] py-[5%]"
              >
                <div className="col-span-2 order-last lg:order-first grid content-center ">
                  <Image
                    layout="responsive"
                    src={image}
                    alt={title}
                    width="900"
                    height="800"
                  />
                </div>

                <div className="col-span-4  flex flex-col justify-center space-y-2">
                  <p className="text-sky-500 font-bold tracking-wide text-sm md:text-base font-quicksand">
                    {category}
                  </p>
                  <p className="text-slate-800 font-bold tracking-wide text-sm md:text-xl font-quicksand">
                    {title}
                  </p>
                  <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                    {text}
                  </p>
                  <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                    {publish}
                  </p>
                  <div className="flex justify-between">
                    <p className="text-sky-600 font-bold hover:text-sky-900 tracking-wide text-sm md:text-base font-quicksand">
                      Read More
                    </p>
                    <p className="hidden lg:flex text-sky-600 hover:text-sky-900 tracking-wide text-sm md:text-xl font-quicksand">
                      {" "}
                      {">"}{" "}
                    </p>
                  </div>
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
