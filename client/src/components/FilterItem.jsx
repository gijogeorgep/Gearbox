import React from "react";
import searchicon from "../assets/search_icon.png";
import "./navbar.css";
const FilterItem = () => {
  return (
    <>
      <div className="w-full max-w-[949px] mx-auto bg-transparent rounded-[10px]">
        <h2 className="text-white text-xl font-normal font-[montserrat] tracking-wide mb-4">
          Filter By Items
        </h2>
        <div className="flex flex-wrap gap-4">
          {/* CAMERA */}
          <button className="w-[137px] h-[41px] bg-white text-[#df1b1b] text-xl font-normal font-[montserrat] tracking-wide rounded-[10px]">
            CAMERA
          </button>

          {/* TRIPOD */}
          <button className="w-[153px] h-[41px] bg-[#df1b1b] text-white text-xl font-normal font-[montserrat] tracking-wide rounded-[10px]">
            TRIPOD
          </button>

          {/* GIMBAL */}
          <button className="w-[137px] h-[41px] bg-[#df1b1b] text-white text-xl font-normal font-[montserrat] tracking-wide rounded-[10px]">
            GIMBAL
          </button>

          {/* LENS */}
          <button className="w-[137px] h-[41px] bg-[#df1b1b] text-white text-xl font-normal font-[montserrat] tracking-wide rounded-[10px]">
            LENS
          </button>

          {/* LIGHTS */}
          <button className="w-[137px] h-[41px] bg-[#df1b1b] text-white text-xl font-normal font-[montserrat] tracking-wide rounded-[10px]">
            LIGHTS
          </button>
        </div>
      </div>

      <div className="w-full max-w-[945px] mx-auto bg-transparent rounded-[10px] ">
        <h2 className="text-white text-xl font-normal font-[montserrat] tracking-wide mb-4">
          Filter By Brands
        </h2>
        <div className="flex flex-wrap gap-4">
          {/* SONY */}
          <button className="w-[137px] h-[41px] bg-[#df1b1b] text-white text-xl font-normal font-[montserrat] tracking-wide rounded-[10px]">
            SONY
          </button>

          {/* NIKON */}
          <button className="w-[137px] h-[41px] bg-[#df1b1b] text-white text-xl font-normal font-[montserrat] tracking-wide rounded-[10px]">
            NIKON
          </button>

          {/* CANNON */}
          <button className="w-[137px] h-[41px] bg-white text-[#df1b1b] text-xl font-normal font-[montserrat] tracking-wide rounded-[10px]">
            CANNON
          </button>

          {/* FUJI FILM */}
          <button className="w-[137px] h-[41px] bg-[#df1b1b] text-white text-xl font-normal font-[montserrat] tracking-wide rounded-[10px]">
            FUJI FILM
          </button>

          {/* PANASONIC */}
          <button className="w-[137px] h-[41px] bg-[#df1b1b] text-white text-xl font-normal font-[montserrat] tracking-wide rounded-[10px]">
            PANASONIC
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterItem;
