import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function ButtonWhatsapp() {
  return (
    <a
      href='https://wa.me/085195145758'
      rel='noreferrer'
      target='_blank'
      className='fixed bottom-0 right-0 bg-green-500 rounded-full w-[50px] h-[50px] m-5 flex items-center justify-center text-2xl text-white hover:bg-green-600 transition-colors'
    >
      <FaWhatsapp />
    </a>
  );
}

export default ButtonWhatsapp;
