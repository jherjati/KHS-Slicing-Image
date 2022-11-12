import React from "react";
import Image from "next/image";
import Dropdown from "./Dropdown";

const UrbanPlanning = () => {
  return (
    <div className="flex flex-col divide-y space-y-12">
      <div className=" flex flex-col space-y-8 md:grid md:grid-cols-2 content-center px-[5%] mt-16">
        <div className="flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3">
          <h1 className="text-sky-700 font-bold tracking-wide text-xl md:text-2xl font-quicksand  ">
            Services
          </h1>
          <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand ">
            Urban Planning
          </h1>
          <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet
            consectetur adipiscing elit sed do eiusmod tempor incididunt ut
            labore et
          </p>
          <ul className="flex flex-col space-y-1 list-decimal text-slate-500 tracking-wide text-sm md:text-xl font-quicksand px-[5%]">
            <li>Spatial Planning</li>
            <li>General and Sectoral Planning</li>
            <li>Property Investment Studies</li>
            <li>Information System Development</li>
          </ul>
        </div>
        <div className="flex justify-end items-center">
          <div className="grid grid-rows-2  bg-urban bg-cover bg-center rounded-[1rem] w-[90%]  h-[80%]">
            <div className="grid grid-cols-2 row-start-2">
              <div className="border-[2rem] bg-white w-[100%]  border-white rounded-[1rem]">
                <Image
                  src="/urbanimage.png"
                  className=""
                  alt=""
                  width="300"
                  height="300"
                />
                <h1 className="text-black font-bold tracking-wide text-xs md:text-xl font-quicksand  ">
                  Kontur Mandalika
                </h1>
                <p className="text-slate-500 tracking-wide text-xs md:text-xl font-quicksand  ">
                  Urban Planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page 3 */}
      <div className="px-[5%] ">
        <div className="pt-8">
          <div className="lg:hidden border border-black rounded-lg text-center">
            <Dropdown
              title="Select Section"
              texts={[
                " Spatial Planning",
                "General and Sectoral Planning",
                "Property Investment Studies",
                "Information System Development",
              ]}
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 lg:divide-x">
          <div className="col-span-3 flex flex-col space-y-8 pt-[5%] pr-[3%]">
            <div className=" flex flex-col space-y-8 ">
              <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
                Spatial Planning
              </h1>
              <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand ">
                HANDAL SELARAS GROUP is supported by Urban planners who have the
                capability in preparing Spatial Plans both in general and
                detailed scales. Technology and Speed are our advantages in the
                preparation of spatial planning.
              </p>
              <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand ">
                Experienced in preparing Regional Spatial Plans (RTRW), Spatial
                Detailed Plans (RDTR), Regional Disaster Management Plans (RPBD)
                to master plan scales for Education, Tourism and Health
                facilities. Do not stop at the work given by the client, we make
                research as a manifestation of our work.
              </p>

              <Image
                className="rounded-lg"
                src="/u-spatialplaning.png"
                alt="Spatial Planning Image"
                width="800"
                height="400"
                layout="intrinsic"
              />
            </div>
            <div className=" flex flex-col space-y-8 ">
              <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
                General and Sectoral Planning
              </h1>
              <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                HANDAL SELARAS GROUP is supported by urban planners who have the
                capability in preparing Spatial Plan documents and studies
                related to regional development in general and sectoral. The
                General Planning that we have worked on is the Regional
                Government Work Plan (RKP), the Regional Economic Development
                Master Plan (RIPE), the Regional Tourism Master Plan (RIPDA),
                and various studies in the field of housing finance development.
              </p>
              <Image
                className="rounded-lg"
                src="/u-generalsectoral.png"
                alt="General and Sectoral Planning Image"
                width="800"
                height="400"
                layout="intrinsic"
              />
            </div>
            <div className=" flex flex-col space-y-8 ">
              <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
                Property Investment Studies
              </h1>
              <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                HANDAL SELARAS GROUP sees that the investment prospects in the
                property sector, including land, are increasingly attractive.
                Demand and price growth in all property sectors, including land
                as raw material, increased quite high. The use of a large area
                of land in strategic locations must be carried out carefully.
                Business calculations need to be done so that the value of the
                benefits obtained compared to the investment invested can later
                be optimal.
              </p>
              <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                Before making a choice on an alternative utilization, of course,
                requires an in-depth analysis with the right method. So it is
                deemed necessary to provide input to land owners in determining
                the best use to optimize the value of the land through property
                investment studies.
              </p>
              <Image
                className="rounded-lg"
                src="/u-propertyinves.png"
                alt="Property Investment Studies Image"
                width="800"
                height="400"
                layout="intrinsic"
              />
            </div>
            <div className=" flex flex-col space-y-8 ">
              <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
                Information System Development
              </h1>
              <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                HANDAL SELARAS GROUP has a value in innovation and technology
                that encourages planning and studies to be easily
                understood/applied with information technology innovation.
              </p>
              <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                Innovation to assist local governments in regulating, fostering,
                implementing and supervising spatial planning. We have an
                innovation for spatial control which we call the Spatial
                Utilization Control Application (Andaltaru).
              </p>
              <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                In addition, we also have an information system in collecting
                databases, both spatial information and sectoral information.
              </p>

              <Image
                className="rounded-lg pb-8 "
                src="/u-informationsistem.png"
                alt="Information System Development Image"
                width="800"
                height="400"
                layout="intrinsic"
              />
            </div>
          </div>
          {/* sisi kiri */}
          <aside className="hidden md:flex col-span-1 p-[10%] ">
            <ul className="space-y-12 ">
              <li>Spatial Planning</li>
              <li>General and Sectoral Planning</li>
              <li>Property Investment Studies</li>
              <li>Information System Development</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default UrbanPlanning;
