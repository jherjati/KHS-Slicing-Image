import React from "react";
import Image from "next/image";

const Monitor = () => {
  return (
    <div className="my-16 flex flex-col space-y-12">
      <div className=" flex flex-col space-y-8 lg:grid lg:grid-cols-3  content-center px-[20px] md:px-[120px] mt-16">
        <div className="lg:col-span-2 flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3">
          <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand ">
            Monitor
          </h1>
          <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand ">
            This content is password protected. To view it please enter your
            password below:
          </p>
          <form className="col-span-4">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 font-quicksand"
                placeholder="Enter Password"
                required
              />
              <button
                type="submit"
                className="text-white  font-quicksand absolute right-2.5 bottom-2.5 bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
