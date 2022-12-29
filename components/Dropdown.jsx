import React from "react";
import { useState } from "react";
import Link from "next/link";

const Dropdown = ({ title, texts }) => {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  return (
    <div className="py-3 align-middle">
      <div
        onClick={() => setdropdownOpen(!dropdownOpen)}
        className=" hover:text-blue-900 hover:font-bold
    hover:cursor-pointer text-kecil font-[600] font-quicksand text-center flex item
    "
      >
        {title}
      </div>

      <div
        className={`${
          dropdownOpen ? `top-full opacity-100 visible` : "hidden"
        } flex flex-col pt-1 space-y-2 pl-2 md:pl-8 
        `}
      >
        <div className="">
          {texts.map((text) => {
            return (
              <div
                className="hover:text-blue-900 hover:cursor-pointer text-slate-400 tracking-wide text-sm font-quicksand "
                key={text}
              >
                {text}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
