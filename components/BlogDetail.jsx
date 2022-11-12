import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "./Data";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Detail = () => {
  // get id of the blog
  return (
    <div className="flex flex-col divide-y-2">
      <div className="my-16 flex flex-col space-y-12  content-center px-[5%] md:px-[15%] ">
        <div className="mt-16 flex justify-center px-[5%]">
          <Image
            src="/blogimage1.png"
            className="rounded-lg "
            alt=""
            width="1600"
            height="300"
            layout="intrinsic"
          />
        </div>
        <div className="flex justify-center flex-col space-y-2 md:space-y-8 col-span-1 mx-3">
          <div className="text-sky-600 font-bold tracking-wide text-sm md:text-lg font-quicksand">
            UAV LiDAR
          </div>
          <h1 className="text-slate-900 font-bold tracking-wide text-2xl md:text-5xl font-quicksand ">
            UAV Lidar untuk Perencanaan Perumahan
          </h1>
          <div className="flex flex-col md:flex-row space-y-1 md:space-x-2  md:divide-x-2">
            <div className="flex space-x-2 ">
              <p className="text-slate-500  tracking-wide text-sm md:text-xl font-quicksand">
                Penulis:
              </p>
              <p className="text-slate-500 font-bold tracking-wide text-sm md:text-xl font-quicksand">
                Gunawan Wibisono
              </p>
            </div>
            <div className="flex space-x-2 md:px-2">
              <p className="text-slate-500  tracking-wide text-sm md:text-xl font-quicksand">
                Publish:
              </p>
              <p className="text-slate-500 font-bold tracking-wide text-sm md:text-xl font-quicksand">
                29 April 2020
              </p>
            </div>
          </div>
          <div className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand whitespace-pre-wrap ">
            UAV lidar untuk perencanaan perumahan perumahan salah satu elemen
            kunci adalah data lahan dari lahan yang akan dibangun. Data lahan
            yang diperlukan meliputi batas lahan, data topografi dan data
            tematik lainnya. Berikut adalah manfaat UAV Lidar untuk perencanaan
            perumahan 1. Menentukan Garis Batas Lahan. Dengan foto udara dengan
            dikombinasikan oleh pengukuran Real Time Kinematic (RTK) GPS
            Geodetic di titik batas dan juga menggunakan Total Station garis
            baras dari lahan menjadi presisi. Ini sangat berguna untuk
            menentukan wilayah perencanaan dan strategi akusisi lahan. Data
            Topografi untuk “cut and fill”. Data Lidar dapat memberikan data
            kontur sampai dengan 1:1.000 atau rentan 0,5m. Perencanaan “cut and
            fill” dapat di rencanakan dengan baik sehingga biaya untuk
            pematangan lahan bisa di optimalkan dari aset tanah yang ada.
            Perencanaan untuk infrastruktur kawasan seperti jalan dan drainase
            juga bisa bersamaan dilakukan. Pembuatan Masterplan. Optimalisasi
            lahan yang ada agar dapat dijual atau yang dikenal dengan saleable
            area mejadi suatu perencanaan kunci dalam keberhasilan project
            perumahan. Merencakan blok rumah harus mempertimbangkan luasan,
            batas lahan, kontur, vegetasi, arah matahari dan mata angin. Handal
            selaras sangat berpengalaman membantu perusahaan developer atau real
            estate dalam pengembangan desainnya. Sudah banyak perusahaan
            developer atau real estate menggunakan jasa UAV Lidar kami untuk
            mendapatkan data topografi untuk perencanaan masterplan, perencanaan
            detail, dan perizinan. UAV Lidar memastikan biaya, mutu dan waktu
            lebih baik dengan metodologi yang tepat. KHS memastikan biaya yang
            terjangkau, mutu yang terbaik, dan waktu tercepat dalam proses
            survey sampai penyajian data.
          </div>
        </div>
        <div className="flex justify-between">
          <div className="px-[5%] text-center text-slate-900 font-bold tracking-wide text-sm md:text-xl font-quicksand">
            Bagikan Artikel
          </div>
          <div className="flex justify-center gap-6 ">
            <FaLinkedinIn className="text-xl text-slate-900 cursor-pointer hover:text-blue-500" />
            <FaFacebook className="text-xl text-slate-900 cursor-pointer hover:text-blue-800" />
            <FaTwitter className="text-xl text-slate-900 cursor-pointer hover:text-blue-600" />
            <FaLink className="text-xl text-slate-900 cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg mx-[5%]">
        <div className="text-4xl text-slate-900 font-quicksand tracking-wide font-bold py-8">
          Artikel Terkait
        </div>
        <div className="row-span-2 flex flex-col  space-y-3 lg:grid lg:grid-cols-3 gap-2 lg:gap-12 p-[2%]">
          {blogs.map(({ id, image, category, title, text, publish }) => {
            return (
              <div
                key={id}
                className=" grid grid-cols-6 gap-4 lg:flex lg:flex-col justify-items-center content-center  rounded-[1rem] bg-white shadow-2xl px-[4%] py-[5%]"
              >
                <div className="col-span-2 order-last lg:order-first grid content-center ">
                  <Image
                    layout="responsive"
                    src={image}
                    alt={title}
                    width="900"
                    height="800"
                  />
                </div>

                <div className="col-span-4  flex flex-col justify-center space-y-2">
                  <p className="text-sky-500 font-bold tracking-wide text-sm md:text-base font-quicksand">
                    {category}
                  </p>
                  <p className="text-slate-800 font-bold tracking-wide text-sm md:text-xl font-quicksand">
                    {title}
                  </p>
                  <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                    {text}
                  </p>
                  <p className="text-slate-500 tracking-wide text-sm md:text-xl font-quicksand">
                    {publish}
                  </p>
                  <Link
                    href={`/blog/detail?id=${id}`}
                    className="flex justify-between"
                  >
                    <p className="text-sky-600 font-bold hover:text-sky-900 tracking-wide text-sm md:text-base font-quicksand">
                      Read More
                    </p>
                    <p className="hidden lg:flex text-sky-600 hover:text-sky-900 tracking-wide text-sm md:text-xl font-quicksand">
                      {" "}
                      {">"}{" "}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
