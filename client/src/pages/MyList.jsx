import React from "react";
import Navbar from "../components/Navbar";
import SellerDasboardSidebar from "../components/SellerDasboardSidebar";

const MyList = () => {
  return (
    <>
      <div className="relative min-h-screen bg-[#0C0A0B] overflow-hidden">
        <div className="relative z-10">
          <Navbar />

          <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6">
            {/* Sidebar */}
            <div className="w-full lg:w-60 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm flex flex-col items-center py-6">
              {/* Profile Image */}
              <img
                src="/api/placeholder/120/120"
                alt="Profile"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full outline-[4px] outline-[#3b3939]"
              />

              {/* Sidebar Buttons */}
              <SellerDasboardSidebar />
            </div>

            {/* Main Content - Empty Container */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-[937px] h-[1032px] bg-white/10 rounded-[10px] border border-white/10 backdrop-blur-[0px]">
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyList;
