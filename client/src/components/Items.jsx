import React from "react";
import camera from "../assets/camera.png";
import tripod from "../assets/tripod.png";
import lens from "../assets/lens.png";

const Items = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <div className="flex flex-col items-center group">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <img
              className="w-48 h-48 rounded-3xl object-contain"
              src={camera}
              alt="Camera"
            />
          </div>
          <div className="mt-4 text-white text-xl font-normal font-['Montserrat'] tracking-wide">
            CAMERA
          </div>
        </div>

        <div className="flex flex-col items-center group">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <img
              className="w-48 h-48 rounded-3xl object-contain"
              src={tripod}
              alt="Tripod"
            />
          </div>
          <div className="mt-4 text-white text-xl font-normal font-['Montserrat'] tracking-wide">
            TRIPOD
          </div>
        </div>

        <div className="flex flex-col items-center group">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <img
              className="w-48 h-48 rounded-3xl object-contain"
              src={lens}
              alt="Lens"
            />
          </div>
          <div className="mt-4 text-white text-xl font-normal font-['Montserrat'] tracking-wide">
            LENS
          </div>
        </div>
      </div>

      

      
    </div>

  );
};

export default Items;
