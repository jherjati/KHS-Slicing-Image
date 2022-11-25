import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { dragImage } from "./Data";
function SliderBackup() {
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
    <div className="px-[3%]">
      <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="cursor-grab overflow-hidden"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex  "
        >
          {dragImage.map(({ image, title, text, link }) => {
            return (
              <motion.div
                key={image}
                className="relative min-h-[40rem] min-w-[370px] md:min-w-[30rem] p-[40px]"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Image
                  className="w-[100%] h-[90%] rounded-[2rem] pointer-events-none"
                  src={image}
                  layout="responsive"
                  width="800"
                  height="400"
                />
                {isHovering && (
                  <div
                    className={`flex flex-col space-y-8 p-2 absolute w-[90%] lg:w-[70%] pt-3 bottom-40 font-quicksand  opacity-0 hover:opacity-100 bg-opacity-90 duration-300`}
                  >
                    <h1 className="text-white font-bold text-3xl">{title}</h1>
                    <p className="text-slate-200  text-xl">{text}</p>
                    <Link
                      href={link}
                      className="text-slate-200 w-[80%] lg:w-[100%] text-xl border-2 text-center rounded"
                    >
                      View Details
                    </Link>
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
export default SliderBackup;
