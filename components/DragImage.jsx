import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { dragImage } from "./SliderData";
function DragImage() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

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
          className="flex bg-white "
        >
          {dragImage.map(({ image }) => {
            return (
              <motion.div
                key={image}
                className="min-h-[40rem] min-w-[370px] md:min-w-[30rem] p-[40px]"
              >
                <img
                  className="w-[100%] h-[90%] rounded-[2rem] pointer-events-none"
                  src={image}
                  alt=""
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
export default DragImage;
