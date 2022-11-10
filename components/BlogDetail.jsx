import React from "react";
import Image from "next/image";
import { clients } from "./Data";

const Detail = () => {
  return (
    <div className="my-16 flex flex-col space-y-12  content-center px-[5%] md:px-[15%] ">
      <div className="mt-16 flex justify-center px-[5%]">
        <Image
          src="/blogdetailimage.png"
          className="rounded-lg "
          alt=""
          width="1600"
          height="300"
          layout="intrinsic"
        />
      </div>
      <div className="flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3">
        <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand ">
          Detail
        </h1>
        <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand ">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et. Lorem ipsum dolor sit amet consectetur
          adipiscing elit sed do eiusmod tempor incididunt ut labore et
        </p>
      </div>
    </div>
  );
};

export default Detail;
