import React from "react";
import camera from "../assets/camera.png";
import tripod from "../assets/tripod.png";
import lens from "../assets/lens.png";
import "./fonts.css";

const Items = () => {
  return (
    <div className="flex justify-center items-center py-8 px-4">
      <div className="flex justify-center items-center gap-8 sm:gap-10 md:gap-12 flex-wrap">
        {/* Camera */}
        <div className="flex flex-col items-center group w-40 sm:w-44 md:w-48">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <img
              className="w-full h-40 sm:h-44 md:h-48 rounded-2xl object-contain"
              src={camera}
              alt="Camera"
            />
          </div>
          <div className="mt-4 text-white text-lg sm:text-xl font-normal font-['Montserrat'] tracking-wide text-center">
            CAMERA
          </div>
        </div>

        {/* Tripod */}
        <div className="flex flex-col items-center group w-40 sm:w-44 md:w-48">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <img
              className="w-full h-40 sm:h-44 md:h-48 rounded-2xl object-contain"
              src={tripod}
              alt="Tripod"
            />
          </div>
          <div className="mt-4 text-white text-lg sm:text-xl font-normal font-['Montserrat'] tracking-wide text-center">
            TRIPOD
          </div>
        </div>

        {/* Lens */}
        <div className="flex flex-col items-center group w-40 sm:w-44 md:w-48">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <img
              className="w-full h-40 sm:h-44 md:h-48 rounded-2xl object-contain"
              src={lens}
              alt="Lens"
            />
          </div>
          <div className="mt-4 text-white text-lg sm:text-xl font-normal font-['Montserrat'] tracking-wide text-center">
            LENS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
