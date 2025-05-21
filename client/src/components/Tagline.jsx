import React from "react";
import "./fonts.css";
import gearbox from "../assets/gearbox.png";

const Tagline = () => {
  return (
    <div className="w-full h-[450px] sm:h-[520px] md:h-[620px] max-w-6xl mx-auto px-4 pt-12 text-white font-[Montserrat] text-center mt-4 overflow-hidden">
      {/* Gearbox Image */}

      <div className="flex justify-center mb-4 sm:mb-6">
        <img
          className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px] xl:w-[160px]"
          src={gearbox}
          alt="Gearbox"
        />
      </div>

      {/* Headline */}
      <h1 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-extrabold tracking-[0.08em] hover:text-[#df1b1b] whitespace-nowrap">
        BORROW THE BEST
      </h1>
      <h1 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-extrabold tracking-[0.08em] hover:text-[#df1b1b] whitespace-nowrap mt-2">
        CREATE THE REST
      </h1>

      {/* Tagline */}
      <p className="mt-4 sm:mt-6 text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] tracking-wide font-light">
        Your Ultimate Filmmaking Gear Hub
      </p>
    </div>
  );
};

export default Tagline;
