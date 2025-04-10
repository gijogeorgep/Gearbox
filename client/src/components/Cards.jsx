import React from "react";
import cardcamera from "../assets/card_camera.png";
import "./fonts.css";

const Cards = () => {
  return (
    <>
      <div className="w-full max-w-[278px] h-auto relative rounded-2xl bg-gradient-to-b from-[#1c1c1c] to-[#4f4a4a] p-5 mx-auto shadow-inner shadow-[#00000040] flex flex-col justify-between">
        {/* Location */}
        <div className="flex gap-2 mt-2 items-center">
          <img
            width="14"
            height="14"
            src="https://img.icons8.com/deco-glyph/48/ffffff/marker.png"
            alt="marker"
          />
          <div className="text-white text-xs sm:text-sm font-light font-[montserrat] tracking-wide">
            Kozhikode
          </div>
        </div>

        {/* Product Image */}
        <img
          src={cardcamera}
          alt="Product"
          className="w-full h-[130px] mt-3 rounded-xl object-cover"
        />

        {/* Product Title */}
        <div className="text-white text-center mt-3 text-xs sm:text-sm font-medium font-[montserrat] leading-snug tracking-wide">
          Canon EOS Rebel T7 / 2000D <br />
          24.1 MP APS-C sensor
        </div>

        {/* Price and Rent Button */}
        <div className="flex justify-between items-center mt-3 px-2">
          <div className="flex items-start gap-2">
            <img
              width="18"
              height="18"
              src="https://img.icons8.com/material-rounded/24/ffffff/rupee.png"
              alt="rupee"
              className="mt-[2px]"
            />
            <div className="flex flex-col leading-none">
              <div className="text-white text-[18px] sm:text-[20px] font-semibold font-[montserrat] tracking-wider">
                400
              </div>
              <div className="text-white text-[9px] sm:text-[10px] font-light font-[montserrat] tracking-wider mt-0.5">
                per day
              </div>
            </div>
          </div>

          <div className="bg-[#df1b1b] rounded-lg px-4 py-1 shadow-md shadow-[#df1b1b70]">
            <span className="text-white text-sm font-medium font-[montserrat] tracking-wide">
              RENT
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
