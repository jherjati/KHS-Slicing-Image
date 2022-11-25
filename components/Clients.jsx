import React from "react";
import Image from "next/image";
import { clients } from "./Data";

const Clients = () => {
  return (
    <div className="my-16 flex flex-col space-y-12">
      <div className=" flex flex-col space-y-8 lg:grid lg:grid-cols-3  content-center px-[20px] md:px-[120px] mt-16">
        <div className="lg:col-span-2 flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3">
          <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand ">
            Clients
          </h1>
          <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et
          </p>
        </div>
      </div>
      <div className="flex flex-wrap px-[30px] sm:px-[150px] gap-x-10 md:gap-x-32 gap-y-10">
        {clients.map(({ client }) => {
          return (
            <div key={client} className="w-auto h-auto">
              <Image
                layout="cover"
                width="50"
                height="30"
                src={client}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
