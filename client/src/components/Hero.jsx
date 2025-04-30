import React from "react";
import heroimg from "../assets/hero_img.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[563px]">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src={heroimg}
        alt="Hero background"
      />

      {/* Text Content */}
      <div className="absolute top-16 md:top-24 px-6 md:px-12 lg:px-56 text-white space-y-8">

        <div className="flex flex-col gap-2 justify-center items-center">
        <p className="text-xl md:text-2xl lg:text-[35px] font-light font-[montserrat] tracking-wide max-w-4xl ">
          Rent premium camera equipment, accessories, and tools to bring your
          creative vision to life
        </p>

        <button className="bg-[#df1b1b] hover:bg-red-700 text-white text-base font-light font-[montserrat] px-6 py-2 rounded transition duration-300">
          RENT NOW
        </button>
        </div>
      
         <div className=" flex flex-col gap-3 justify-center items-center">
         <p className="text-xl md:text-2xl lg:text-[35px] font-light font-[montserrat] tracking-wide max-w-4xl">
          Monetize your camera gear by renting it out to filmmakers and creators
          while keeping full control over your equipment
        </p>

        <Link to="/sellitems">
          <button className="bg-[#df1b1b] hover:bg-red-700 text-white text-base font-light font-[montserrat] px-6 py-2 rounded transition duration-300">
            List Your Gear
          </button>
        </Link>
         </div>
        
      </div>
    </div>
  );
};

export default Hero;
