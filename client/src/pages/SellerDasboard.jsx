import React from "react";
import Navbar from "../components/Navbar";

const SellerDasboard = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0c0a0b]/40 outline outline-1 outline-white/10 backdrop-blur-sm overflow-hidden">
        {/* Top Nav */}
        <Navbar />

        <div className="flex gap-6 px-6 py-6">
          {/* Sidebar */}
          <div className="w-80 bg-white/10 rounded-2xl border border-white/10 p-4 flex flex-col items-center space-y-4">
            <img
              src="https://placehold.co/150x150"
              alt="Profile"
              className="w-32 h-32 rounded-full outline outline-[6px] outline-[#3b3939] shadow-lg"
            />
            <h2 className="text-white text-2xl font-semibold tracking-wide">
              PETER PARKOUR
            </h2>
            <button className="w-full bg-white text-[#0c0a0b] py-2 rounded-lg text-lg tracking-wide">
              PROFILE
            </button>
            <button className="w-full bg-white/10 text-white py-2 rounded-lg text-lg tracking-wide">
              SELL ITEMS
            </button>
            <button className="w-full bg-white/10 text-white py-2 rounded-lg text-lg tracking-wide">
              MY LIST
            </button>
            <div className="relative w-full">
              <button className="w-full bg-white/10 text-white py-2 rounded-lg text-lg tracking-wide">
                RENTAL REQUESTS
              </button>
              <div className="absolute -top-2 right-2 bg-red-600 w-6 h-6 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                1
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 bg-white/10 rounded-xl border border-white/10 p-6 relative">
            {/* Mini Card */}
            <div className="absolute top-0 right-6 transform -translate-y-1/2 flex items-center space-x-4">
              <div className="bg-white rounded-lg px-4 py-1 bg-opacity-20">
                <span className="text-white font-semibold tracking-wide text-base">
                  SELLER
                </span>
              </div>
              <img
                src="https://placehold.co/100x100"
                alt="User Small"
                className="w-20 h-20 rounded-full outline outline-[4px] outline-[#3b3939] shadow-lg"
              />
            </div>

            {/* Profile Info */}
            <div className="mt-20 flex flex-col gap-4 text-white font-montserrat">
              <div className="flex justify-between">
                <span className="font-normal text-base tracking-wide">
                  NAME
                </span>
                <span className="font-semibold text-base tracking-wide">
                  PETER PARKOUR
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-normal text-base tracking-wide">
                  USERNAME
                </span>
                <span className="font-semibold text-base tracking-wide">
                  peter@gamil.com
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-normal text-base tracking-wide">
                  PHONE
                </span>
                <span className="font-semibold text-base tracking-wide">
                  9778230292
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="absolute top-6 left-6">
          <img
            src="https://placehold.co/150x30"
            alt="Logo"
            className="w-[150px]"
          />
        </div>
      </div>
    </>
  );
};

export default SellerDasboard;
