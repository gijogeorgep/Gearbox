import React from "react";
import Navbar from "../components/Navbar";
import SellerDasboardSidebar from "../components/SellerDasboardSidebar";
import "../components/fonts.css";




const RentalRequest = () => {
  return (
    <div className="relative min-h-screen bg-[#0C0A0B] overflow-hidden">
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Top Navbar */}
        <Navbar />

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
          {/* Sidebar */}
          <div className="w-full lg:w-60 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm flex flex-col items-center py-6">
            {/* Profile Image */}
            <img
              src="https://placehold.co/120x120"
              alt="Profile"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full outline-[4px] outline-[#3b3939]"
            />

            {/* Sidebar Buttons */}
            <SellerDasboardSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex justify-center items-center px-4">
            <div className="w-full max-w-7xl bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-7 gap-6 sm:gap-12 mb-6 text-sm sm:text-base text-white font-[Montserrat]">
                <span>Name</span>
                <span>Item</span>
                <span>Location</span>
                <span>Phone No</span>
                <span>Delivery Day and Time</span>
                <span>Return Day and Time</span>
                <span>Payment Status</span>
              </div>

              <div className="w-full h-px bg-white/20 mb-4"></div>

              {/* Content Row */}
              <div className="w-full sm:h-[180px] md:h-[200px] relative rounded-[10px] mt-5">
                <div className="w-full h-[90px] bg-[#d9d9d9]/10 rounded-[10px] p-4 flex gap-4 sm:gap-12 items-center justify-between">
                  <div className="text-sm sm:text-base text-white font-light">
                    <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 sm:gap-12">
                      <span>Alan</span>
                      <span>cannon</span>
                      <span>mavoor</span>
                      <span>9874563215</span>
                      <span>12-1-2020, 5:00 pm</span>
                      <span>13-1-2020, 8:00 pm</span>
                      <div className="relative w-[108.56px] h-[30.06px] rounded-[10px] mt-1">
                        <div className="absolute inset-0 bg-[#0caf3a] rounded-[10px]" />
                        <button className="absolute inset-0 text-center justify-center text-white text-xs font-normal font-[Montserrat] tracking-wide">
                          DONE
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalRequest;
