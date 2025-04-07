import React from "react";
import heroimg from "../assets/hero_img.jpg";

const Hero = () => {
  return (
    <>
      <div className="w-[1498px] h-[563px] relative">
        <img
          className="w-full h-[563px] left-0 top-0 absolute opacity-20"
          src={heroimg}
          alt="Hero background"
        />
        <div className="w-[1042px] h-[78px] left-[225px] top-[73px] absolute text-justify justify-start text-white text-[35px] font-light font-['Montserrat'] tracking-widest">
          Rent premium camera equipment, accessories, and tools to bring your
          creative vision to life
        </div>
        <div className="w-[1042px] h-[78px] left-[236px] top-[282px] absolute text-justify justify-start text-white text-[35px] font-light font-['Montserrat'] tracking-widest">
          Monetize your camera gear by renting it out to filmmakers and creators
          while keeping full control over your equipment
        </div>

        {/* RENT NOW Button */}
        <button className="w-[154px] h-[35px] left-[660px] top-[213px] absolute bg-[#df1b1b] text-white text-base font-light font-['Montserrat'] tracking-wide hover:bg-red-700 transition-colors duration-300 cursor-pointer">
          RENT NOW
        </button>

        {/* List Your Gear Button */}
        <button className="w-[154px] h-[35px] px-7 py-[7px] left-[672px] top-[432px] absolute bg-[#df1b1b] inline-flex justify-center items-center gap-2.5 text-white text-base font-light font-['Montserrat'] tracking-wide hover:bg-red-700  cursor-pointer">
          List Your Gear
        </button>
      </div>
    </>
  );
};

export default Hero;
