import React from "react";
import "./fonts.css";

const FilterItem = () => {
  return (
    <div className="w-full px-4 space-y-12 py-8">
      {/* Filter By Items */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-lg sm:text-xl font-normal font-[montserrat] mb-4">
          Filter By Items
        </h2>
        <div className="flex flex-wrap justify-start gap-3 sm:gap-4">
          <button className="min-w-[100px] sm:min-w-[120px] px-3 sm:px-4 py-2 bg-white text-[#df1b1b] text-sm sm:text-xl font-[montserrat] rounded-[10px]">
            CAMERA
          </button>
          <button className="min-w-[100px] sm:min-w-[120px] px-3 sm:px-4 py-2 bg-[#df1b1b] text-white text-sm sm:text-xl font-[montserrat] rounded-[10px]">
            TRIPOD
          </button>
          <button className="min-w-[100px] sm:min-w-[120px] px-3 sm:px-4 py-2 bg-[#df1b1b] text-white text-sm sm:text-xl font-[montserrat] rounded-[10px]">
            GIMBAL
          </button>
          <button className="min-w-[100px] sm:min-w-[120px] px-3 sm:px-4 py-2 bg-[#df1b1b] text-white text-sm sm:text-xl font-[montserrat] rounded-[10px]">
            LENS
          </button>
          <button className="min-w-[100px] sm:min-w-[120px] px-3 sm:px-4 py-2 bg-[#df1b1b] text-white text-sm sm:text-xl font-[montserrat] rounded-[10px]">
            LIGHTS
          </button>
        </div>
      </div>

      {/* Filter By Brands */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-white text-lg sm:text-xl font-normal font-[montserrat] mb-4">
          Filter By Brands
        </h2>
        <div className="flex flex-wrap justify-start gap-3 sm:gap-4">
          <button className="min-w-[100px] sm:min-w-[120px] px-3 sm:px-4 py-2 bg-[#df1b1b] text-white text-sm sm:text-xl font-[montserrat] rounded-[10px]">
            SONY
          </button>
          <button className="min-w-[100px] sm:min-w-[120px] px-3 sm:px-4 py-2 bg-[#df1b1b] text-white text-sm sm:text-xl font-[montserrat] rounded-[10px]">
            NIKON
          </button>
          <button className="min-w-[100px] sm:min-w-[120px] px-3 sm:px-4 py-2 bg-white text-[#df1b1b] text-sm sm:text-xl font-[montserrat] rounded-[10px]">
            CANNON
          </button>
          <button className="min-w-[100px] sm:min-w-[120px] px-3 sm:px-4 py-2 bg-[#df1b1b] text-white text-sm sm:text-xl font-[montserrat] rounded-[10px]">
            FUJI FILM
          </button>
          <button className="min-w-[100px] sm:min-w-[120px] px-3 sm:px-4 py-2 bg-[#df1b1b] text-white text-sm sm:text-xl font-[montserrat] rounded-[10px]">
            PANASONIC
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterItem;
