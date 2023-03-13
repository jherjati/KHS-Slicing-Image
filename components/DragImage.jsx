import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { dragImage } from "./Data";

function DragImage({ data }) {
  const [width, setWidth] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  const [isHovering, setIsHovering] = useState(false);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, [width]);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className='px-0 md:px-0'>
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className='cursor-grab overflow-hidden'
      >
        <motion.div
          drag='x'
          dragConstraints={{
            right: 0,
            left: -width - (innerWidth > 768 ? 120 : 20),
          }}
          className='flex md:px-[120px] px-5 space-x-5 md:space-x-8'
        >
          {data.map(({ image, title, text, link }) => {
            return (
              <motion.div
                key={image}
                className='relative md:min-h-[350px] md:max-h-[600px] md:h-full md:max-w-[455px] md:w-full last:mx-[200px]'
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <div
                  className='min-h-[370px] min-w-[280px] md:min-h-[600px] md:h-full md:min-w-[455px] md:w-full rounded-3xl md:rounded-[2rem] pointer-events-none bg-cover flex justify-center items-center'
                  style={{
                    backgroundImage: `linear-gradient(65.81deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 67.52%) , url(${image})`,
                  }}
                ></div>
                {isHovering && (
                  <div className='flex justify-center  '>
                    <div
                      className={`flex justify-end flex-col h-full  space-y-8 p-2 absolute w-[282px]  md:w-[372px] pt-3 bottom-[100px] md:bottom-[40px]  font-quicksand  opacity-0 hover:opacity-100 bg-opacity-90 duration-300`}
                    >
                      <div
                        className='text-white font-bold text-[20px] md:text-[32px] '
                        dangerouslySetInnerHTML={{ __html: title }}
                      ></div>
                      <div
                        className='text-[#EEEEEE]  text-[12px] md:text-[16px]'
                        dangerouslySetInnerHTML={{ __html: text }}
                      ></div>
                      <Link
                        href={link}
                        className='text-slate-200 w-[100%] lg:w-[100%] text-xl border-2 text-center rounded'
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
export default DragImage;
