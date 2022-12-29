import React from "react";
import Image from "next/image";

const Monitor = () => {
  return (
    <div className="my-16 flex flex-col space-y-12">
      <div className=" flex flex-col space-y-8 lg:grid lg:grid-cols-3  content-center px-[20px] md:px-[120px] mt-16">
        <div className="lg:col-span-2 flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3">
          <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-bold font-quicksand ">
            App
          </h1>
          <p className="text-grey text-kecilmobile md:text-kecil font-inter ">
            This content is password protected. To view it please enter your
            password below:
          </p>
          <form className="col-span-4">
            <label
              htmlFor="password"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
              <input
                type="password"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 font-quicksand"
                placeholder="Enter Password"
                required
              />
              <button
                type="submit"
                className="text-white  font-quicksand absolute right-2.5 bottom-2.5 bg-blue focus:ring-4 font-medium rounded-lg text-sm px-8 py-2 "
              >
                Enter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Monitor;
