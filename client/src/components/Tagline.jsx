import React from "react";
import "./fonts.css";
import gearbox from "../assets/gearbox.png";

const Tagline = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 text-white font-[Montserrat] text-center mt-4 overflow-hidden">
      {/* Gearbox Image - centered and clearly visible */}
      <div className="flex justify-center mb-6">
        <img
          className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] xl:w-[180px]"
          src={gearbox}
          alt="Gearbox"
        />
      </div>

      {/* Top Line: BORROW THE BEST */}
      <h1 className="text-[28px] sm:text-[36px] md:text-[56px] lg:text-[72px] font-extrabold tracking-[0.08em] hover:text-[#df1b1b] whitespace-nowrap">
        BORROW THE BEST
      </h1>

      {/* Bottom Line: CREATE THE REST */}
      <h1 className="text-[28px] sm:text-[36px] md:text-[56px] lg:text-[72px] font-extrabold tracking-[0.08em] hover:text-[#df1b1b] whitespace-nowrap mt-2">
        CREATE THE REST
      </h1>

      {/* Tagline Text */}
      <p className="mt-6 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] tracking-wide font-light">
        Your Ultimate Filmmaking Gear Hub
      </p>
    </div>
  );
};

export default Tagline;
