import React from "react";
import "./tagline.css";
import gearbox from "../assets/gearbox.png";
const Tagline = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 text-white font-['Montserrat'] text-center mt-10">
      <div className="flex justify-center flex-wrap gap-x-6 gap-y-1 mb-1">
        <img className="w-xl " src={gearbox} alt="" />
        <h1 className="text-[64px] md:text-[82px] font-extrabold tracking-[0.1em] hover:text-[#df1b1b]">
          BORROW
        </h1>
        <h1 className="text-[64px] md:text-[82px] font-extrabold tracking-[0.1em] hover:text-[#df1b1b]">
          THE
        </h1>
        <h1 className="text-[64px] md:text-[82px] font-extrabold tracking-[0.1em] hover:text-[#df1b1b]">
          BEST
        </h1>
      </div>

      {/* CREATE THE REST */}
      <div className="flex justify-center flex-wrap gap-x-6 gap-y-2">
        <h1 className="text-[64px] md:text-[82px] font-[Montserrat] font-extrabold tracking-[0.1em] hover:text-[#df1b1b] mr-9">
          CREATE
        </h1>
        <h1 className="text-[64px] md:text-[82px]  font-[Montserrat] font-extrabold tracking-[0.1em] hover:text-[#df1b1b] mr-6">
          THE
        </h1>
        <h1 className="text-[64px] md:text-[82px]  font-[Montserrat] font-extrabold tracking-[0.1em] hover:text-[#df1b1b] mr-5">
          REST
        </h1>
      </div>

      {/* Tagline Text */}
      <p className="mt-8 text-[22px] md:text-[30px] tracking-wider font-[Montserrat] font-light">
        Your Ultimate Filmmaking Gear Hub
      </p>
    </div>
  );
};

export default Tagline;
