import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { dragImage } from "./Data";
function DragImage() {
  const [width, setWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="px-[20px] sm:px-[40px] md:px-[120px]">
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="cursor-grab overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex bg-white "
        >
          {dragImage.map(({ image, title, text, link }) => {
            return (
              <motion.div
                key={image}
                className="relative min-h-[40rem] min-w-[370px] md:min-w-[30rem] p-[32px]"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                {/* <Image
                  className="w-[100%] h-[90%] rounded-[2rem] pointer-events-none"
                  src={image}
                  layout="responsive"
                  width="800"
                  height="400"
                /> */}
                <div
                  className="w-[100%] h-[90%] md:h-[600px] rounded-[2rem] pointer-events-none bg-cover flex justify-center items-center"
                  style={{
                    backgroundImage: `linear-gradient(65.81deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0) 67.52%) , url(${image})`,
                  }}
                ></div>

                {isHovering && (
                  <div className="flex justify-center  ">
                    <div
                      className={`flex justify-end flex-col h-full  space-y-8 p-2 absolute w-[282px]  md:w-[372px] pt-3 bottom-[100px] md:bottom-[40px]  font-quicksand  opacity-0 hover:opacity-100 bg-opacity-90 duration-300`}
                    >
                      <h1 className="text-white font-bold text-[20px] md:text-[32px] ">
                        {title}
                      </h1>
                      <p className="text-[#EEEEEE]  text-[12px] md:text-[16px]">
                        {text}
                      </p>
                      <Link
                        href={link}
                        className="text-slate-200 w-[100%] lg:w-[100%] text-xl border-2 text-center rounded"
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
