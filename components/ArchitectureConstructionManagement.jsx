import React from "react";
import Image from "next/image";
import { architecs } from "./Data";
import Dropdown from "./Dropdown";

const ArchitectureConstructionManagement = () => {
  return (
    <div className="flex flex-col divide-y space-y-12">
      <div className=" flex flex-col space-y-8 md:grid md:grid-cols-2 content-center px-[20px] md:px-[120px] mt-16">
        <div className="flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3">
          <h1 className="text-blue text-[20px] leading-[28px] font-[600] font-inter  ">
            Services
          </h1>
          <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand  ">
            Architecture & Construction
          </h1>
          <p className="text-grey text-kecilmobile md:text-kecil font-inter ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et
          </p>

          <ul className="flex flex-col space-y-1 list-decimal text-grey text-kecilmobile md:text-kecil font-inter px-[20px]">
            <li>Architectural Planning</li>
            <li>Detail Engineering Design Planning</li>
            <li>Construction Management</li>
            <li>Design and Build</li>
          </ul>
        </div>
        <div className="flex justify-end items-center">
          <div className="grid grid-rows-2  bg-architecture bg-cover bg-center rounded-[1rem] w-[90%]  h-[80%]">
            <div className="grid grid-cols-2 row-start-2">
              <div className="outline outline-[16px] md:outline-[28px] bg-white w-[100%]  outline-white rounded-tr-lg">
                <Image
                  src="/architectureimage.png"
                  className=""
                  alt=""
                  width="300"
                  height="300"
                />
                <h1 className="text-blacky text-[14px] leading-[17px] md:text-[18px] md:leading-[22px] font-[700] font-inter  ">
                  Bangunan TIC & Komersial di Labuan Baju
                </h1>
                <p className="text-grey text-[12px] md:text-[16px] md:leading-[19px] leading-[15px] font-[400] font-inter pb-[10px]">
                  Architecture & Construction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page 3 */}
      <div className="px-[20px] md:px-[120px] ">
        {/* sisi kanan */}
        <div className="pt-8">
          <div className="lg:hidden border border-black rounded-lg text-center">
            <Dropdown
              title="Select Section"
              texts={[
                "Architectural Planning",
                "Detail Engineering Design Planning",
                "Construction Management",
                "Design and Build",
              ]}
            />
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-4 lg:divide-x">
          <div className="col-span-3 flex flex-col space-y-8 pt-[5%] pr-[3%]">
            <div className=" flex flex-col space-y-8 ">
              <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand ">
                Architectural Planning
              </h1>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                HANDAL SELARAS GROUP is supported by reliable architects who
                have decades of experience. Architectural planning includes
                planning Concept Design, Pre-Design / Schematic Design, and
                Design Development.
              </p>

              <div className="row-span-2 flex flex-col  space-y-3 md:grid md:grid-cols-2 gap-2 md:gap-12 ">
                {architecs.map(({ architec, name, year }) => {
                  return (
                    <div
                      key={name}
                      className=" flex flex-col  p-[20px] lg:p-[40px] space-x-4  space-y-[24px] rounded-[1rem] bg-white shadow-2xl"
                    >
                      <div className="flex items-center justify-center">
                        <Image
                          layout="intrinsic"
                          src={architec}
                          alt={name}
                          width="800"
                          height="400"
                        />
                      </div>

                      <div className="flex flex-col space-y-[10px] h-[48px] text-left  justify-center">
                        <p className="text-blacky font-[700] text-[14px] leading-[20px]  md:text-[17px] md:leading-[22px] font-inter">
                          {name}
                        </p>
                        <p className="text-grey text-[14px] leading-[17px] font-inter md:text-[16px] md:leading-[19px]">
                          {year}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" flex flex-col space-y-8 ">
              <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand ">
                Detail Engineering Design Planning
              </h1>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                HANDAL SELARAS GROUP is supported by reliable architects who
                have decades of experience. We can produce a Detailed
                Engineering Design (DED) as a product of a planning consultant,
                which is used in making working drawings for various
                construction works, including the Budget Cost Design (RAB).
              </p>
              <Image
                className="rounded-lg"
                src="/architecdesain.png"
                alt="Detail Engineering Design Planning Image"
                width="800"
                height="400"
                layout="intrinsic"
              />
            </div>
            <div className=" flex flex-col space-y-8 ">
              <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand ">
                Construction Management
              </h1>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                HANDAL SELARAS GROUP is supported by reliable and experienced
                architects who have decades of experience in the construction
                industry, capable of carrying out supervision, providing advice
                and assistance in a development project, especially for the
                Procurement Implementation Process and Periodic Supervision.
              </p>
              <Image
                className="rounded-lg"
                src="/architecconstruction.png"
                alt="Construction Management Image"
                width="800"
                height="400"
                layout="intrinsic"
              />
            </div>
            <div className=" flex flex-col space-y-8 ">
              <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-quicksand ">
                Design and Build
              </h1>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                HANDAL SELARAS GROUP With more than 25 years of experience in
                the field of engineering design, both as planners, executors,
                and users, at this time, We want to share experiences for your
                needs.
              </p>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                Data generated by TVT can be effectively compared with data
                obtained by the geophysical method. Some TVT applications are
                exploration of oil and gas accumulation (offshore and onshore),
                mineral exploration, environmental observation, exploration of
                water source accumulation, infrastructure inspection (oil and
                gas pipelines), and others.
              </p>

              <Image
                className="rounded-lg pb-8 "
                src="/architecbuilding.png"
                alt="Design and Builde"
                width="800"
                height="400"
                layout="intrinsic"
              />
            </div>
          </div>
          {/* sisi kiri */}
          <aside className="hidden md:flex col-span-1 p-[10%] ">
            <ul className="space-y-12 ">
              <li>Architectural Planning</li>
              <li>Detail Engineering Design Planning</li>
              <li>Construction Management</li>
              <li>Design and Build</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureConstructionManagement;
