import React from "react";
import Navbar from "../components/Navbar";
import "../components/fonts.css";
const SellerDashboard = () => {
  return (
    <div className="bg-[#0C0A0B] min-h-screen ">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Section: Sidebar + Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-60 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-sm flex flex-col items-center py-6 ml-4 mt-6 mb-6">
          {/* Profile Image */}
          <img
            src="https://placehold.co/150x150"
            alt="Profile"
            className="w-32 h-32 rounded-full shadow-md  outline-[6px] outline-[#3b3939]"
          />

          {/* Username */}
          <div className="mt-4 text-white text-xl font-semibold font-[montserrat] tracking-wide text-center">
            PETER PARKOUR
          </div>

          {/* Sidebar Buttons */}
          <div className="mt-8 space-y-4 w-full px-4">
            <button className="w-full h-10 bg-white text-[#0c0a0b] rounded-md border border-white/10 text-base font-light font-[montserrat] tracking-wide">
              PROFILE
            </button>
            <button className="w-full h-10 bg-white/10 text-white rounded-md border border-white/10 text-base font-light font-montserrat tracking-wide">
              SELL ITEMS
            </button>
            <button className="w-full h-10 bg-white/10 text-white rounded-md border border-white/10 text-base font-light font-montserrat tracking-wide">
              MY LIST
            </button>
            <button className="w-full h-10 bg-white/10 text-white rounded-md border border-white/10 text-base font-light font-montserrat tracking-wide flex items-center justify-between px-3 relative">
              <span>RENTAL</span>
              <span className="w-6 h-6 bg-[#df1b1b] text-white text-xs font-semibold rounded-full flex items-center justify-center">
                1
              </span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 text-white">
          <h1 className="text-2xl font-bold">Dashboard Content</h1>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
