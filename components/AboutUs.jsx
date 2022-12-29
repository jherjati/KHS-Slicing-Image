import React from "react";
import { licences } from "./Data";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col space-y-8 md:space-y-16">
      <div className="mt-16">
        <div className="flex flex-col xl:gap-2 xl:grid xl:grid-cols-5">
          <div className="hidden xl:col-span-1 xl:grid content-end">
            <Image width="251" height="403" src="/aboutusimage1.png" alt="" />
          </div>

          <div className="max-w-[794px] order-first xl:order-none  col-span-3 flex flex-col space-y-4 justify-center p-[5%]">
            <div className="flex flex-col space-y-3">
              <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-bold font-quicksand">
                About Us
              </h1>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                HANDAL SELARAS GROUP is a group of companies with integrated
                business coverage. Engaged in the field of surveying and
                mapping, spatial planning, public policy development,
                architecture, construction management, design, and creative
                visual design, we provide services from upstream to downstream.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h1 className="text-blue text-[20px] leading-[28px] font-bold font-quicksand">
                Vision
              </h1>
              <p className="text-grey text-kecilmobile md:text-kecil font-inter">
                Becoming a thriving engineering and construction consulting
                company with good project management and actively contributing
                to the development of the Republic of Indonesia.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h1 className="text-blue text-[20px] leading-[28px] font-bold font-quicksand">
                Mission
              </h1>
              <ul className="list-decimal text-grey text-kecilmobile md:text-kecil font-inter px-[20px] ">
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
            <div className="grid xl:hidden ">
              {" "}
              <Image width="251" height="403" src="/aboutusimage1.png" alt="" />
            </div>
            <div className="">
              <Image width="251" height="403" src="/aboutusimage2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:grid xl:grid-cols-5 px-[20px] md:px-[120px]">
        <div className="flex flex-col space-y-4 col-span-3">
          <h1 className="text-blacky text-sedangmobile md:text-sedang2  font-bold font-quicksand">
            Occupational Safety and Health Management Policy
          </h1>
          <ul className="flex flex-col space-y-1 list-decimal text-grey text-kecilmobile md:text-kecil font-inter px-[5%]">
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
      <div className="flex flex-col space-y-4 px-[20px] md:px-[120px]">
        <h1 className="text-blacky text-sedangmobile md:text-sedang2 font-bold font-quicksand">
          Who We Are
        </h1>
        <p className=" text-grey text-kecilmobile md:text-kecil font-inter">
          Engaged in the field of surveying and mapping, spatial planning,
          public policy development, architecture, construction management,
          design, and creative visual design, we provide services from upstream
          to downstream.
        </p>
      </div>
      {/* page2 */}
      <div className="flex flex-col space-y-8 ">
        <div className="flex px-[15%]">
          <h1 className=" text-blacky font-[700] text-[16px] leading-[20px] md:text-[20px] md:leading-[25px] font-quicksand">
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
            <h1 className="text-blacky text-[16px] leading-[19px] font-inter font-[600]">
              Ir. H. Ahmad Syiham
            </h1>
            <h2 className="text-blue text-[14px] leading-[18px] font-[700] font-quicksand">
              General Commissioner
            </h2>
            <p className="text-[14px] leading-[20px] font-[400] font-inter text-grey">
              Architecture, University of Indonesia
            </p>
          </div>
        </div>
        <div className="flex px-[15%]">
          <h1 className=" text-blacky font-[700] text-[16px] leading-[20px] md:text-[20px] md:leading-[25px] font-quicksand">
            Board of Director
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-[100px]">
          <div className="flex flex-col items-center">
            <Image
              width="150"
              height="100"
              src="/presidenDirectorImage.png"
              layout="responsive"
              alt=""
              className="rounded-full"
            />

            <h1 className="text-blacky text-[16px] leading-[19px] font-inter font-[600]">
              Nurohim
            </h1>
            <h2 className="text-blue text-[14px] leading-[18px] font-[700] font-quicksand">
              President Director
            </h2>
            <p className="text-[14px] leading-[20px] font-[400] font-inter text-grey">
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
            <h1 className="text-blacky text-[16px] leading-[19px] font-inter font-[600]">
              Arszandi Pratama, M.Sc
            </h1>
            <h2 className="text-blue text-[14px] leading-[18px] font-[700] font-quicksand">
              Director of Kreasi Handal Selaras, PT
            </h2>
            <p className="text-[14px] leading-[20px] font-[400] font-inter text-grey">
              Real Estate, University of Greenwich
            </p>
          </div>
        </div>
        <div className="flex px-[15%]">
          <h1 className=" text-blacky font-[700] text-[16px] leading-[20px] md:text-[20px] md:leading-[25px] font-quicksand">
            Head of Division
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-[100px]">
          <div className="flex flex-col items-center">
            <Image
              width="150"
              height="100"
              src="/headOfSurvey.png"
              layout="responsive"
              alt=""
              className="rounded-full"
            />
            <h1 className="text-blacky text-[16px] leading-[19px] font-inter font-[600]">
              Rabby Awalludin, S.T
            </h1>
            <h2 className="text-blue text-[14px] leading-[18px] font-[700] font-quicksand">
              Head of Survey & Mapping
            </h2>
            <p className="text-[14px] leading-[20px] font-[400] font-inter text-grey">
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
            <h1 className="text-blacky text-[16px] leading-[19px] font-inter font-[600]">
              Elssany Noor D, S.T
            </h1>
            <h2 className="text-blue text-[14px] leading-[18px] font-[700] font-quicksand">
              Head of Architecture &
            </h2>
            <h2 className="text-blue text-[14px] leading-[18px] font-[700] font-quicksand">
              Construction Management
            </h2>
            <p className="text-[14px] leading-[20px] font-[400] font-inter text-grey">
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

            <h1 className="text-blacky text-[16px] leading-[19px] font-inter font-[600]">
              Nurul Megawati Putri, S.T
            </h1>
            <h2 className="text-blue text-[14px] leading-[18px] font-[700] font-quicksand">
              Head of Marketing, Tender
            </h2>
            <h2 className="text-blue text-[14px] leading-[18px] font-[700] font-quicksand">
              and Collection
            </h2>
            <p className="text-[14px] leading-[20px] font-[400] font-inter text-grey">
              Geodetic Engineering, Undip
            </p>
          </div>
        </div>
      </div>

      {/* page3 */}
      <div className="flex flex-col space-y-16 md:space-y-20 px-[20px] md:px-[120px] text-black">
        {/* subpage 1 */}
        <div className="flex  md:w-1/2 flex-col space-y-2 md:space-y-6 col-span-1 ">
          <h1 className="text-blacky font-bold text-sedangmobile md:text-sedang2 font-quicksand">
            Imagine, Believe, Achive!
          </h1>
          <p className="text-grey text-kecilmobile md:text-kecil font-inter">
            Engaged in the field of surveying and mapping, spatial planning,
            public policy development, architecture, construction management,
            design, and creative visual design, we provide services from
            upstream to downstream.
          </p>
        </div>
        {/* subpage 2 */}
        <div className="flex flex-col lg:grid lg:grid-cols-4  gap-8">
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl p-[4%]">
            <div className="text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue ">
              1992
            </div>
            <div className="text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]">
              Year
            </div>
            <div className="text-xl text-slate-600">
              We started our business
            </div>
          </div>
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl p-[4%]">
            <div className="text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue ">
              523
            </div>
            <div className="text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]">
              Projects
            </div>
            <div className="text-xl text-slate-600">Have been done</div>
          </div>
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl p-[4%]">
            <div className="text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue ">
              123
            </div>
            <div className="text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]">
              Employees
            </div>
            <div className="text-xl text-slate-600">Working together</div>
          </div>
          <div className=" bg-white grid gap-2  content-center text-center  rounded-[1rem] shadow-2xl p-[4%]">
            <div className="text-[24px] leading-[29px] md:text-[32px] md:leading-[39px] font-inter font-[800] text-blue ">
              10
            </div>
            <div className="text-[18px] leading-[22px] md:text-[20px] md:leading-[24px] font-inter  text-blacky font-[600]">
              Countries
            </div>
            <div className="text-xl text-slate-600">Connected with us</div>
          </div>
        </div>
        {/* subpage 3 */}
        <div className="flex  md:w-1/2 flex-col space-y-2 md:space-y-6 col-span-1 ">
          <h1 className="text-blacky font-bold text-sedangmobile md:text-sedang2  font-quicksand">
            Licences
          </h1>
          <p className="text-grey text-kecilmobile md:text-kecil font-inter">
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et amet consectetur adipiscing
            elit
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  content-center  gap-8 pb-8">
          {licences.map(({ licence, lebar, panjang, iso, desc }) => {
            return (
              <div
                key={licence}
                className=" flex md:flex-col items-center space-x-[16px] md:space-x-0"
              >
                <div className="flex items-center justify-center w-[60px] md:w-[200px] h-[80px] md:h-[200px]">
                  <Image
                    className="flex items-center"
                    width={lebar}
                    height={panjang}
                    src={licence}
                    alt=""
                  />
                </div>

                <div className="flex-col items-center space-y-[8px] ">
                  <h1 className=" text-[16px] md:text-[18px] md:text-center font-[600] text-blacky font-inter">
                    {iso}
                  </h1>
                  <p className="text-[12px] md:text-[14px] text-grey font-inter">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
