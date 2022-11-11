import React from "react";
import { licences } from "./Data";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="mt-16">
        <div className="flex flex-col xl:gap-2 xl:grid xl:grid-cols-5">
          <div className="hidden  xl:col-span-1 xl:grid content-end">
            <Image width="400" height="300" src="/aboutusimage1.png" alt="" />
          </div>

          <div className="order-first xl:order-none col-span-3 flex flex-col space-y-4 justify-center p-[5%]">
            <div className="flex flex-col space-y-3">
              <h1 className="text-slate-900 tracking-wide text-2xl md:text-5xl font-bold font-quicksand">
                About Us
              </h1>
              <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                HANDAL SELARAS GROUP is a group of companies with integrated
                business coverage. Engaged in the field of surveying and
                mapping, spatial planning, public policy development,
                architecture, construction management, design, and creative
                visual design, we provide services from upstream to downstream.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h1 className="text-sky-600 tracking-wide text-xl md:text-2xl font-bold font-quicksand">
                Vision
              </h1>
              <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                Becoming a thriving engineering and construction consulting
                company with good project management and actively contributing
                to the development of the Republic of Indonesia.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h1 className="text-sky-600 tracking-wide text-xl md:text-2xl font-bold font-quicksand">
                Mission
              </h1>
              <ul className="list-decimal text-slate-500 tracking-wide text-sm md:text-xl font-quicksand px-[5%]">
                <li>Providing excellent service to clients and partners.</li>
                <li>
                  Providing optimal service through affordable prices, good
                  quality, and time discipline.
                </li>
                <li>
                  Encourage the use of appropriate technology and the
                  application of innovation without limits.
                </li>
                <li>
                  Encouraging research and training as a means of increasing
                  human resource capacity.
                </li>
                <li>
                  Establish good relations with the central and regional
                  governments.
                </li>
                <li>
                  Actively following the development journey in Indonesia from
                  the center to the regions.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center xl:justify-end xl:grid xl:col-span-1 ">
            <div className="grid xl:hidden max-[320]:max-md:w-[50%]">
              {" "}
              <Image width="400" height="300" src="/aboutusimage1.png" alt="" />
            </div>
            <div className="min-[320]:max-md:w-[50%]">
              <Image width="400" height="300" src="/aboutusimage2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:grid xl:grid-cols-5 px-[5%]">
        <div className="flex flex-col space-y-4 col-span-3">
          <h1 className="text-slate-900 tracking-wide text-2xl md:text-5xl font-bold font-quicksand">
            Occupational Safety and Health Management Policy
          </h1>
          <ul className="flex flex-col space-y-1 list-decimal text-slate-500 tracking-wide text-sm md:text-xl font-quicksand px-[5%]">
            <li>
              Provide quality products and services in order to meet employer
              requirements and applicable regulations.
            </li>
            <li>
              Implement and maintain a management system according to ISO 9001,
              ISO 14001, and ISO 45001 standards to achieve employer
              satisfaction by continuously improving
            </li>
            <li>
              Improve communication and participation of all interested parties,
              especially employees in efforts to prevent work accidents and
              health problems by maintaining and maintaining good, safe and
              comfortable working conditions and environments.
            </li>
          </ul>
        </div>
        <div className="flex justify-center col-span-2">
          <Image width="400" height="300" src="/aboutusimage3.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col space-y-4 px-[5%]">
        <h1 className="text-slate-900 tracking-wide text-2xl md:text-5xl font-bold font-quicksand">
          Who We Are
        </h1>
        <p className=" text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
          Engaged in the field of surveying and mapping, spatial planning,
          public policy development, architecture, construction management,
          design, and creative visual design, we provide services from upstream
          to downstream.
        </p>
      </div>
      {/* page2 */}
      <div className="flex flex-col space-y-8 ">
        <div className="flex px-[15%]">
          <h1 className=" text-slate-900 tracking-wide text-sm md:text-xl font-bold font-quicksand">
            Commisioner
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-20">
          <div className="flex flex-col items-center">
            <Image
              width="150"
              height="100"
              src="/commisionerImage.png"
              layout="responsive"
              alt=""
              className="rounded-full"
            />
            <h1 className="text-slate-900 font-bold tracking-wide text-lg md:text-xl font-quicksand">
              Ir. H. Ahmad Syiham
            </h1>
            <h2 className="text-sky-700 tracking-wide text-sm md:text-base font-quicksand font-bold">
              General Commissioner
            </h2>
            <p className="text-sky-900 tracking-wide text-sm md:text-base font-quicksand">
              Architecture, University of Indonesia
            </p>
          </div>
        </div>
        <div className="flex px-[15%]">
          <h1 className=" text-slate-900 tracking-wide text-sm md:text-xl font-bold font-quicksand">
            Board of Director
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="flex flex-col items-center">
            <Image
              width="150"
              height="100"
              src="/presidenDirectorImage.png"
              layout="responsive"
              alt=""
              className="rounded-full"
            />

            <h1 className="text-slate-900 font-bold tracking-wide text-lg md:text-xl font-quicksand">
              Nurohim
            </h1>
            <h2 className="text-sky-700 tracking-wide text-sm md:text-base font-quicksand font-bold">
              President Director
            </h2>
            <p className="text-sky-900 tracking-wide text-sm md:text-base font-quicksand">
              Department Name, University Name
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              width="150"
              height="100"
              src="/directorImage.png"
              layout="responsive"
              alt=""
              className="rounded-full"
            />
            <h1 className="text-slate-900 font-bold tracking-wide text-lg md:text-xl font-quicksand">
              Arszandi Pratama, M.Sc
            </h1>
            <h2 className="text-sky-700 tracking-wide text-sm md:text-base font-quicksand font-bold">
              Director of Kreasi Handal Selaras, PT
            </h2>
            <p className="text-sky-900 tracking-wide text-sm md:text-base font-quicksand">
              Real Estate, University of Greenwich
            </p>
          </div>
        </div>
        <div className="flex px-[15%]">
          <h1 className=" text-slate-900 tracking-wide text-sm md:text-xl font-bold font-quicksand">
            Head of Division
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-20">
          <div className="flex flex-col items-center">
            <Image
              width="150"
              height="100"
              src="/headOfSurvey.png"
              layout="responsive"
              alt=""
              className="rounded-full"
            />
            <h1 className="text-slate-900 font-bold tracking-wide text-lg md:text-xl font-quicksand">
              Rabby Awalludin, S.T
            </h1>
            <h2 className="text-sky-700 tracking-wide text-sm md:text-base font-quicksand font-bold">
              Head of Survey & Mapping
            </h2>
            <p className="text-sky-900 tracking-wide text-sm md:text-base font-quicksand">
              Geodetic Engineering, ITB
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              width="150"
              height="100"
              src="/headOfArchitecture.png"
              layout="responsive"
              alt=""
              className="rounded-full"
            />
            <h1 className="text-slate-900 font-bold tracking-wide text-lg md:text-xl font-quicksand">
              Elssany Noor D, S.T
            </h1>
            <h2 className="text-sky-700 tracking-wide text-sm md:text-base  font-quicksand font-bold">
              Head of Architecture &
            </h2>
            <h2 className="text-sky-700 tracking-wide text-sm md:text-base  font-quicksand font-bold">
              Construction Management
            </h2>
            <p className="text-sky-900 tracking-wide text-sm md:text-base font-quicksand">
              Architecture, Itenas
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              width="150"
              height="100"
              src="/headOfMarketting.png"
              layout="responsive"
              alt=""
              className="rounded-full"
            />

            <h1 className="text-slate-900 font-bold tracking-wide text-lg md:text-xl font-quicksand">
              Nurul Megawati Putri, S.T
            </h1>
            <h2 className="text-sky-700 tracking-wide text-sm md:text-base font-quicksand font-bold">
              Head of Marketing, Tender
            </h2>
            <h2 className="text-sky-700 tracking-wide text-sm md:text-base font-quicksand font-bold">
              and Collection
            </h2>
            <p className="text-sky-900 tracking-wide text-sm md:text-base font-quicksand">
              Geodetic Engineering, Undip
            </p>
          </div>
        </div>
      </div>

      {/* page3 */}
      <div className="flex flex-col space-y-12 px-[3%] text-black">
        {/* subpage 1 */}
        <div className="flex  md:w-1/2 flex-col space-y-2 md:space-y-6 col-span-1 mx-3">
          <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand">
            Imagine, Believe, Achive!
          </h1>
          <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
            Engaged in the field of surveying and mapping, spatial planning,
            public policy development, architecture, construction management,
            design, and creative visual design, we provide services from
            upstream to downstream.
          </p>
        </div>
        {/* subpage 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4   gap-8">
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl px-[4%]">
            <div className="text-4xl font-bold text-sky-700 ">1992</div>
            <div className="text-2xl font-semibold text-slate-900">Year</div>
            <div className="text-xl text-slate-600">
              We started our business
            </div>
          </div>
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl px-[4%]">
            <div className="text-4xl font-bold text-sky-700 ">523</div>
            <div className="text-2xl font-semibold text-slate-900">
              Projects
            </div>
            <div className="text-xl text-slate-600">Have been done</div>
          </div>
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl px-[4%]">
            <div className="text-4xl font-bold text-sky-700 ">123</div>
            <div className="text-2xl font-semibold text-slate-900">
              Employees
            </div>
            <div className="text-xl text-slate-600">Working together</div>
          </div>
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl px-[4%]">
            <div className="text-4xl font-bold text-sky-700 ">10</div>
            <div className="text-2xl font-semibold text-slate-900">
              Countries
            </div>
            <div className="text-xl text-slate-600">Connected with us</div>
          </div>
        </div>
        {/* subpage 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-items-center  gap-8 pb-8">
          {licences.map(({ licence }) => {
            return (
              <div
                key={licence}
                className="  grid gap-2 justify-items-center content-center px-[4%]"
              >
                <Image width="200" height="100" src={licence} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
